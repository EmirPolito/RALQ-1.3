"use client";

import { useTheme } from "next-themes";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import { Sun, Moon, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function ModoSelect() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[45px] h-8 flex items-center justify-center opacity-0" />
    );
  }

  // TEMA REAL cuando theme="system"
  const realTheme = theme === "system" ? systemTheme : theme;

  // ICONO SEGÚN OPCIÓN ELEGIDA
  const getIcon = () => {
    switch (realTheme) {
      case "light":
        return Sun;
      case "dark":
        return Moon;
      case "daltonic":
        return Eye;
      default:
        return Eye; // icono para colores personalizados
    }
  };

  const Icon = getIcon();

  return (
    <Select
      value={theme ?? "light"} // system existe, pero NO se muestra
      onValueChange={setTheme}
    >
      <SelectTrigger
        className="
          w-[45px] h-8 flex items-center justify-center
          [&>svg:last-child]:hidden
        "
      >
        <Icon className="h-5 w-5" />
      </SelectTrigger>

      <SelectContent className="w-[180px] max-h-72 overflow-y-auto">

        {/* ================== GRUPO 1: MODO ================== */}
        <SelectGroup>
          <SelectLabel>Modo</SelectLabel>

          <SelectItem value="light">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4" /> Claro
            </div>
          </SelectItem>

          <SelectItem value="dark">
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4" /> Oscuro
            </div>
          </SelectItem>

          <SelectItem value="daltonic">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> Daltonico
            </div>
          </SelectItem>
        </SelectGroup>

        {/* ================== GRUPO 2: PERSONALIZADO ================== */}
        <SelectGroup>
          <SelectLabel>Personalizado</SelectLabel>

          <SelectItem value="blue">Azul</SelectItem>
          <SelectItem value="pink">Rosa</SelectItem>
          <SelectItem value="violet">Violeta</SelectItem>
          <SelectItem value="orange">Naranja</SelectItem>
          <SelectItem value="yellow">Amarillo</SelectItem>
        </SelectGroup>

      </SelectContent>
    </Select>
  );
}
