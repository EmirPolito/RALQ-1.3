"use client";

import { useTheme } from "next-themes";
import {
  ChevronLeft,
  ChevronRight,
  Book,
  HelpCircle,
  LogOut,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SideMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function SideMenu({ open, setOpen }: SideMenuProps) {
  const { theme, setTheme } = useTheme();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // MODO DALTÓNICO
  useEffect(() => {
    if (theme === "daltonico") {
      document.documentElement.classList.add("daltonico");
    } else {
      document.documentElement.classList.remove("daltonico");
    }
  }, [theme]);

  const handleThemeChange = (mode: string) => setTheme(mode);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-background shadow-xl border-l 
        border-border z-50 transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* HEADER DEL MENÚ */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Mi Cuenta</h2>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>

      {/* MENÚ PRINCIPAL */}
      <div className="p-4 space-y-2">
        {/* SUBMENÚ: Modo de pantalla */}
        <button
          className="menu-item flex justify-between items-center w-full"
          onClick={() => setOpenSubmenu(openSubmenu === "modo" ? null : "modo")}
        >
          <span className="flex items-center gap-2">
            <FileText className="w-5 h-5" /> Modo de pantalla
          </span>
          <ChevronRight
            className={`w-5 h-5 transition-transform ${
              openSubmenu === "modo" ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>

        {openSubmenu === "modo" && (
          <div className="pl-6 flex flex-col gap-1 mt-1">
            <button className="btn-submenu" onClick={() => handleThemeChange("light")}>
              Claro
            </button>
            <button className="btn-submenu" onClick={() => handleThemeChange("dark")}>
              Oscuro
            </button>
            <button className="btn-submenu" onClick={() => handleThemeChange("system")}>
              Sistema
            </button>
            <button className="btn-submenu" onClick={() => handleThemeChange("daltonico")}>
              Daltónico
            </button>
          </div>
        )}

        {/* SUBMENÚ: Colores personalizados */}
        <button
          className="menu-item flex justify-between items-center w-full"
          onClick={() => setOpenSubmenu(openSubmenu === "colores" ? null : "colores")}
        >
          <span className="flex items-center gap-2">
            <FileText className="w-5 h-5" /> Colores
          </span>
          <ChevronRight
            className={`w-5 h-5 transition-transform ${
              openSubmenu === "colores" ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>

        {openSubmenu === "colores" && (
          <div className="pl-6 flex flex-col gap-1 mt-1">
            <button className="btn-submenu text-pink-500" onClick={() => handleThemeChange("pink")}>
              Pink
            </button>
            <button className="btn-submenu text-violet-500" onClick={() => handleThemeChange("violet")}>
              Violeta
            </button>
            <button className="btn-submenu text-orange-500" onClick={() => handleThemeChange("orange")}>
              Naranja
            </button>
            <button className="btn-submenu text-cyan-500" onClick={() => handleThemeChange("cyan")}>
              Cyan
            </button>
          </div>
        )}

        {/* OTROS ITEMS */}
        <Link href="/blog">
          <button className="menu-item flex items-center gap-2">
            <Book className="w-5 h-5" /> Blog
          </button>
        </Link>
        <Link href="/ayuda">
          <button className="menu-item flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> Ayuda
          </button>
        </Link>
        <button className="menu-item flex items-center gap-2 text-red-600 dark:text-red-400">
          <LogOut className="w-5 h-5" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
}
