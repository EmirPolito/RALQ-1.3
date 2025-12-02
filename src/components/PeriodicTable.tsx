"use client";

import React, { useEffect, useState } from "react";

/**
 * PeriodicTable.tsx
 * - Descarga CSV público con datos de elementos (Gist)
 * - Parsea CSV a objetos
 * - Renderiza grid 18 columnas por periodos (rows)
 *
 * Fuente CSV (raw gist): https://gist.githubusercontent.com/GoodmanSciences/c2dd862cd38f21b0ad36b8f96b4bf1ee/raw/Periodic%20Table%20of%20Elements.csv
 * (verificado público). :contentReference[oaicite:6]{index=6}
 */

/* --- Tipo para elemento --- */
type ElementData = {
  AtomicNumber: number;
  Element: string;
  Symbol: string;
  AtomicMass?: string;
  Period?: number;
  Group?: number;
  // puedes mapear más campos del CSV si los necesitas
};

/* --- Helpers --- */
function csvToObjects(csv: string): ElementData[] {
  const lines = csv
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length < 2) return [];

  // Primer renglón: cabeceras separadas por espacios o tab (el gist está separado por espacios)
  // Para robustez, detectaremos separadores comunes (coma/tab/espacio multiple).
  // Aquí el Gist usa espacios: la primera columna es "AtomicNumber"
  // Vamos a separar por 2+ espacios como heurística para archivos con espacio-tabulado.
  const headerLine = lines[0];
  // Intenta detectar separación por comas:
  const delimiter = headerLine.includes(",")
    ? ","
    : headerLine.includes("\t")
    ? "\t"
    : / {2,}/.test(headerLine)
    ? / {2,}/
    : /\s+/;

  const headers = headerLine.split(delimiter).map((h) => h.trim());

  const rows = lines.slice(1);
  const objs: ElementData[] = rows.map((r) => {
    const cols = r.split(delimiter).map((c) => c.trim());
    const obj: any = {};
    headers.forEach((h, i) => {
      obj[h] = cols[i] ?? "";
    });
    // Normaliza campos que usaremos:
    return {
      AtomicNumber: Number(obj["AtomicNumber"] || obj["atomicNumber"] || 0),
      Element: obj["Element"] || obj["element"] || "",
      Symbol: obj["Symbol"] || obj["symbol"] || "",
      AtomicMass: obj["AtomicMass"] || obj["atomicMass"] || "",
      Period: Number(obj["Period"] || obj["period"] || 0) || undefined,
      Group: Number(obj["Group"] || obj["group"] || 0) || undefined,
    } as ElementData;
  });

  // Filtra registros inválidos
  return objs.filter((o) => o.AtomicNumber > 0);
}

/* --- Componente --- */
export default function PeriodicTable() {
  const [elements, setElements] = useState<ElementData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // URL raw del gist (datos públicos). :contentReference[oaicite:7]{index=7}
  const CSV_URL =
    "https://gist.githubusercontent.com/GoodmanSciences/c2dd862cd38f21b0ad36b8f96b4bf1ee/raw/Periodic%20Table%20of%20Elements.csv";

  useEffect(() => {
    let mounted = true;

    async function fetchCsv() {
      try {
        const res = await fetch(CSV_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const txt = await res.text();
        const data = csvToObjects(txt);
        if (mounted) {
          setElements(data);
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Error fetching CSV:", err);
        if (mounted) {
          setError("No se pudo cargar los datos de elementos.");
          setLoading(false);
        }
      }
    }

    fetchCsv();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        Cargando tabla periódica...
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-center text-sm text-red-500">
        Error: {error}
      </div>
    );

  // Construir mapa por (period, group)
  // La cuadrícula tendrá 7 periodos (filas) más bloque f (lanth/actinoids) si quieres.
  // Para simplicidad: colocamos por period (row) y group (col)
  const gridCols = 18; // columnas estándar
  const maxPeriod = Math.max(...(elements || []).map((e) => e.Period || 0), 7);

  // Crear una matriz period x group
  const grid: (ElementData | null)[][] = Array.from(
    { length: maxPeriod },
    () => Array.from({ length: gridCols }, () => null)
  );

  elements!.forEach((el) => {
    const r = (el.Period || 1) - 1;
    const c = (el.Group || 1) - 1;
    // si no tiene group (p. ej. algunos f-block), lo colocamos en la última filas area f-block:
    if (r >= 0 && c >= 0 && c < gridCols && r < grid.length) {
      grid[r][c] = el;
    } else {
      // si grupo/periodo faltan: intenta colocarlo por número atómico (simple fallback)
      // no hacemos nada para evitar romper la visualización
    }
  });

  /* --- Estilos inline simples (puedes mover a CSS/Tailwind) --- */
  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridCols}, minmax(48px, 1fr))`,
    gap: 8,
    alignItems: "stretch",
  };

  const boxStyle: React.CSSProperties = {
    borderRadius: 6,
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "6px 8px",
    minHeight: 64,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "var(--card-background, white)",
    color: "var(--text-foreground, #111)",
  };

  const emptyStyle: React.CSSProperties = {
    visibility: "hidden",
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tabla periódica (datos públicos)</h2>

      <div style={containerStyle}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (!cell)
              return (
                <div key={`r${rowIndex}c${colIndex}`} style={emptyStyle} />
              );

            return (
              <div
                key={cell.AtomicNumber}
                style={boxStyle}
                className="periodic-element hover:shadow-md transition-shadow duration-150"
                title={`${cell.Element} — ${cell.Symbol} — Z=${cell.AtomicNumber}`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, opacity: 0.75 }}>{cell.AtomicNumber}</span>
                  <span style={{ fontSize: 12 }}>{cell.Symbol}</span>
                </div>

                <div style={{ textAlign: "left", marginTop: 6 }}>
                  <div style={{ fontWeight: 600 }}>{cell.Element}</div>
                  <div style={{ fontSize: 11, opacity: 0.7 }}>{cell.AtomicMass}</div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Fuente de datos: Gist público con CSV de elementos. Puedes reemplazar la URL CSV por otra fuente si deseas.
      </p>
    </div>
  );
}
