"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SignUpForm() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => setAnimate(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", { email });
      setIsLoading(false);
    }, 1500);
  };

  const modeColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--mode-accent"
        )
      : undefined;

  const baseSocial =
    "border-2 border-border bg-background text-foreground rounded-lg flex items-center justify-center w-full py-5.5 transition-all duration-300 group hover:scale-105 active:scale-98";

  const liftHover =
    "hover:-translate-y-1 hover:shadow-sm hover:bg-background dark:hover:bg-background";

  const colorHover = modeColor
    ? `border-[2px] border-[${modeColor}] hover:shadow-[0_0_12px_${modeColor}]`
    : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-20 min-h-screen max-h-screen overflow-hidden bg-background text-foreground transition-colors">
      {/* Left Side */}
      <div className="lg:col-span-11 flex items-center justify-center p-6 lg:p-8 bg-background text-foreground overflow-y-auto transition-colors">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div
            className={`mb-12 text-center transition-all duration-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h1 className="text-3xl font-bold mb-2 hover:scale-105 transition-transform duration-300 cursor-default">
              Iniciar sesión
            </h1>

            <p className="text-base text-muted-foreground transition-colors">
              Bienvenido/a de nuevo a RALQ. Por favor, introduzca sus datos.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div
              className={`space-y-2 transition-all duration-500 delay-75 ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
            >
              <Label htmlFor="email" className="text-sm font-semibold">
                Correo
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-2 border-border text-foreground placeholder:text-muted-foreground px-3 py-2.5 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-muted hover:shadow-sm hover:scale-105 focus:scale-105"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full 
                bg-foreground text-background 
                dark:bg-white dark:text-black
                py-4 rounded-lg font-semibold 
                transition-all duration-500 delay-150 mt-1
                hover:scale-105 hover:shadow-md active:scale-98
                ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
              `}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </form>

          {/* Divider */}
          <div
            className={`flex items-center gap-5 my-9 transition-all duration-500 delay-175 ${
              animate ? "opacity-100 scale-100" : "opacity-0 scale-98"
            }`}
          >
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
              O continúa con
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Buttons */}
          <div
            className={`flex flex-col space-y-6 transition-all duration-500 delay-200 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* GOOGLE */}
            <Button
              type="button"
              variant="outline"
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              <Image
                src="/icons/google-logo.png"
                alt="Google"
                width={24}
                height={24}
                unoptimized
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>

            {/* FACEBOOK */}
            <Button
              type="button"
              variant="outline"
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              <Image
                src="/icons/facebook-logo.png"
                alt="Facebook"
                width={24}
                height={24}
                unoptimized
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>

            {/* APPLE */}
            <Button
              type="button"
              variant="outline"
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              {mounted && (
                <Image
                  src={
                    resolvedTheme === "dark" || (resolvedTheme === "system" && theme === "dark")
                      ? "/icons/apple-logo-white.png"
                      : "/icons/apple-logo-black.png"
                  }
                  alt="Apple"
                  width={24}
                  height={24}
                  unoptimized
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              )}
            </Button>
          </div>

          {/* Login link */}
          <p
            className={`text-center text-sm text-muted-foreground mt-20 transition-all duration-500 delay-225 hover:opacity-100 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            ¿Todavía no tienes una cuenta?{" "}
            <a
              href="registro"
              className="font-semibold text-foreground hover:underline hover:scale-105 inline-block transition-all duration-300"
            >
              Regístrate
            </a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:block lg:col-span-9 relative">
        {/* Overlay con color de fondo según tema para evitar flash */}
        <div className="absolute inset-0 bg-background dark:bg-black opacity-70 transition-colors" />
        {mounted && (
          <Image
            src="/img/1.jpg"
            alt="Laboratory"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        )}
      </div>
    </div>
  );
}
