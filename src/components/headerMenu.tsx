"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModoSelect } from "./ui/modoSelect";
import { useTheme } from "next-themes";

export function AnimatedHeaderMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const modeColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--mode-accent");
    if (modeColor) {
      document.documentElement.style.setProperty("--primary", modeColor);
    }
  }, [resolvedTheme]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow transition-opacity duration-500 ease-out bg-[var(--background)]/70 backdrop-blur-xl border-b border-[var(--border)]`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/menu"
            className="relative block transition-all duration-200"
            style={{
              animation: "slideInLeft 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
          >
            {mounted ? (
              <img
                src={
                  resolvedTheme === "dark"
                    ? "/modo-oscuro-removebg-preview.png"
                    : "/modo-claro.png"
                }
                alt="Logo"
                className="h-26 w-26 max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="h-26 w-26" />
            )}
          </Link>

          {/* Iconos */}
          <div className="relative flex items-center gap-4">
            {/* ModoSelect */}
            <div className="hidden md:flex items-center">
              <div
                className={`${
                  isDropdownOpen ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <ModoSelect />
              </div>
            </div>

            {/* Icono de usuario */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
                style={{
                  backgroundColor: "var(--primary-7)",
                  color: "var(--primary-foreground)",
                }}
              >
                E
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-5 w-64 min-h-[19rem] rounded-lg shadow-md p-6 border flex flex-col justify-between animate-fadeIn z-50"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  {/* Contenido minimalista con más espacio */}
                  <div className="mb-7 space-1">
                    <p className="font-semibold truncate text-[var(--foreground)] text-sm ">
                      Emir Polito Guevara
                    </p>
                    <p className="truncate text-[var(--foreground)] text-sm">
                      emirpolitog@gmail.com
                    </p>
                  </div>

                  <div className="space-y-6 text-[var(--foreground)] text-sm">
                    <Link href="/blog" className="block hover:underline">
                      Blog
                    </Link>
                    <Link href="/ayuda" className="block hover:underline">
                      Ayuda
                    </Link>
                    <Link
                      href="/documentacion"
                      className="block hover:underline"
                    >
                      Documentación
                    </Link>
                  </div>

<Link href="/">
  <button
    className="mt-5 w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:bg-[var(--primary-6)] hover:scale-105 active:scale-95"
    style={{
      backgroundColor: "var(--primary-7)",
      color: "var(--primary-foreground)"
    }}
    onClick={() => setIsDropdownOpen(false)} // cierra el dropdown al hacer click
  >
    Cerrar sesión
  </button>
</Link>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeInDown 0.3s ease-out;
        }

        @media (max-width: 768px) {
          header .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          header img {
            height: 2.5rem;
          }
        }
      `}</style>
    </header>
  );
}
