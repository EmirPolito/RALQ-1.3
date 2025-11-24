"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModoSelect } from "./ui/modoSelect";
import { useTheme } from "next-themes";

export function AnimatedHeaderMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pathname = usePathname();
  const hideMenuRoutes = [
    "/inicio-sesion",
    "/contacto",
    "/ayuda",
    "/nosotros",
    "/blog",
    "/registro",
  ];
  const shouldHideMenu = hideMenuRoutes.some((route) =>
    pathname.startsWith(route)
  );

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow transition-opacity duration-500 ease-out ${
        isScrolled
          ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <Link
            href="/menu"
            className="relative block transition-all duration-200"
            style={{
              animation: "slideInLeft 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
          >
            {mounted ? (
              <img
                key={resolvedTheme}
                src={
                  resolvedTheme === "dark"
                    ? "/modo-oscuro-removebg-preview.png"
                    : "/modo-claro.png"
                }
                alt="Logo"
                className="h-25 w-25 max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="h-25 w-25 bg-gray-200" />
            )}
          </Link>

          {/* MENU DESKTOP Y MOBILE */}
          {!shouldHideMenu && (
            <div className="relative flex items-center gap-4">
              {/* Desktop only */}
              <div className="hidden md:flex items-center gap-10">
                <ModoSelect />
              </div>

              {/* ICONO DE USUARIO (Responsive) */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold text-gray-800 dark:text-white shadow-sm hover:scale-105 transition-transform duration-200"
                >
                  E
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 md:mt-2 md:right-0 rounded-xl shadow-lg p-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 animate-fadeIn z-50">
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Emir Polito Guevara
                      </p>
                      <p className="text-xs text-gray-600 dark:text-neutral-400">
                        emirpolitog@gmail.com
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href="/blog"
                        className="block text-sm text-gray-800 dark:text-gray-200 hover:underline"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/ayuda"
                        className="block text-sm text-gray-800 dark:text-gray-200 hover:underline"
                      >
                        Ayuda
                      </Link>
                      <Link
                        href="/documentacion"
                        className="block text-sm text-gray-800 dark:text-gray-200 hover:underline"
                      >
                        Documentación
                      </Link>
                    </div>

                    <button
                      className={`mt-5 w-full py-2 rounded-lg text-sm font-semibold text-white ${
                        resolvedTheme === "light"
                          ? "bg-[#637b6c] hover:bg-black"
                          : resolvedTheme === "dark"
                          ? "bg-[#637b6c] hover:bg-black"
                          : "bg-[var(--primary)] hover:opacity-90"
                      }`}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ANIMACIONES */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeInDown 0.4s ease-out;
        }
      `}</style>
    </header>
  );
}
