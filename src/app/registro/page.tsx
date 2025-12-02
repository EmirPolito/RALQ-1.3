"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SignUpForm() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  // ERRORES SIN MOVER NADA (posición absoluta)
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const modeColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--mode-accent"
        )
      : undefined;

  const baseSocial = `
    border-2 border-border dark:border-neutral-700
    bg-background dark:bg-neutral-900
    text-foreground dark:text-white
    rounded-lg w-full py-5
    flex items-center justify-center
    transition-all duration-300 group
  `;

  const liftHover = `
    hover:-translate-y-1
    hover:scale-105
    active:scale-98
    hover:shadow-sm
    hover:bg-background dark:hover:bg-neutral-900
  `;

  const colorHover = modeColor
    ? `
      border-[2px] border-[${modeColor}]
      hover:shadow-[0_0_12px_${modeColor}]
    `
    : "";

  // VALIDACIÓN COMPLETA
  const validatePassword = (pass: string) => {
    if (!/[A-Z]/.test(pass)) {
      return "Debe incluir al menos 1 letra mayúscula.";
    }

    if (pass.length < 5) {
      return "Debe tener mínimo 5 caracteres.";
    }

    if (!/[#_\-\/\*]/.test(pass)) {
      return "Debe incluir un carácter especial (# _ - / *).";
    }
    
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const passError = validatePassword(password);
    setPasswordError(passError);

    if (passError !== "") return;

    if (password !== confirmPassword) {
      setConfirmError("Las contraseñas no coinciden.");
      return;
    }

    setConfirmError("");
    setIsLoading(true);

    setTimeout(() => {
      console.log("Form submitted:", { email, password, confirmPassword });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-20 min-h-screen max-h-screen overflow-hidden bg-background text-foreground transition-colors">
      {/* Left Side */}
      <div className="lg:col-span-11 flex items-center justify-center p-6 lg:p-8 bg-background overflow-y-auto transition-colors">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div
            className={`mb-9 text-center transition-all duration-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h1 className="text-3xl font-bold mb-2 hover:scale-105 transition-transform duration-300 cursor-default">
              Registrarse
            </h1>
            <p className="text-sm opacity-85 transition-opacity">
              Bienvenido/a a RALQ. Por favor, introduzca sus datos.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-9">
            {/* Email */}
            <div
              className={`space-y-1.5 transition-all duration-500 delay-75 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <Label htmlFor="email" className="text-sm font-semibold">
                Correo
              </Label>

              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Introduce tu correo"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background dark:bg-neutral-900 
                border-2 border-border dark:border-neutral-700
                text-foreground dark:text-white 
                placeholder:text-gray-400 dark:placeholder:text-gray-300
                px-3 py-2.5 rounded-lg 
                focus:border-blue-500 transition-all duration-300 
                hover:border-gray-400 dark:hover:border-neutral-600 
                hover:shadow-sm hover:scale-105 focus:scale-105"
              />
            </div>

            {/* Password */}
            <div
              className={`space-y-1.5 transition-all duration-500 delay-100 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              } relative`}
            >
              <Label htmlFor="password" className="text-sm font-semibold">
                Contraseña
              </Label>

              <div className="relative group">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Introduce tu contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(validatePassword(e.target.value));
                  }}
                  required
                  className="bg-background dark:bg-neutral-900 
                  border-2 border-border dark:border-neutral-700
                  text-foreground dark:text-white 
                  placeholder:text-gray-400 dark:placeholder:text-gray-300
                  w-full px-3 py-2.5 rounded-lg 
                  focus:border-blue-500 transition-all duration-300 
                  hover:border-gray-400 dark:hover:border-neutral-600 
                  hover:shadow-sm hover:scale-105 focus:scale-105 pr-20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 
                  hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* ERROR SIN MOVER NADA */}
              {passwordError && (
                <p className="absolute text-red-500 text-sm mt-1 left-0">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div
              className={`space-y-1.5 transition-all duration-500 delay-125 ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              } relative`}
            >
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-semibold"
              >
                Confirmar contraseña
              </Label>

              <div className="relative group">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmError(
                      e.target.value !== password
                        ? "Las contraseñas no coinciden."
                        : ""
                    );
                  }}
                  required
                  className="bg-background dark:bg-neutral-900 
                  border-2 border-border dark:border-neutral-700
                  text-foreground dark:text-white 
                  placeholder:text-gray-400 dark:placeholder:text-gray-300
                  w-full px-3 py-2.5 rounded-lg 
                  focus:border-blue-500 transition-all duration-300 
                  hover:border-gray-400 dark:hover:border-neutral-600 
                  hover:shadow-sm hover:scale-105 focus:scale-105 pr-20"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 
                  hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* ERROR SIN MOVER NADA */}
              {confirmError && (
                <p className="absolute text-red-500 text-sm mt-1 left-0">
                  {confirmError}
                </p>
              )}
            </div>

            {/* BOTÓN BAJADO 20px PARA EVITAR MOVIMIENTO */}
            <Button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-1 font-semibold rounded-lg transition-all duration-300 
                mt-3 border-2 border-[var(--primary-2)]
                bg-[var(--primary-2)] text-[var(--primary-foreground)]
                ${liftHover}
                hover:bg-[var(--primary-2)]  
                hover:text-[var(--primary-foreground)] 
                hover:shadow-[0_0_12px_var(--mode-accent)]
                hover:scale-105
                active:scale-95

                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
            >
              {isLoading ? "Creando cuenta..." : "Registrarse"}
            </Button>
          </form>

          {/* Divider */}
          <div
            className={`flex items-center gap-5 my-7 transition-all duration-500 delay-175 ${
              animate ? "opacity-100 scale-100" : "opacity-0 scale-98"
            }`}
          >
            <div className="flex-1 h-px bg-gray-400 dark:bg-neutral-700" />
            <span className="text-sm opacity-80 font-medium whitespace-nowrap">
              O continúa con
            </span>
            <div className="flex-1 h-px bg-gray-400 dark:bg-neutral-700" />
          </div>

          {/* Social */}
          <div
            className={`grid grid-cols-3 gap-3 transition-all duration-500 delay-200 ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Google */}
            <Button
              type="button"
              variant="outline"
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              <Image
                unoptimized
                src="/icons/google-logo.png"
                alt="Google"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>

            {/* Facebook */}
            <Button
              type="button"
              variant="outline"
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              <Image
                unoptimized
                src="/icons/facebook-logo.png"
                alt="Facebook"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Button>

            {/* Apple */}
            <Button
              type="button"
              variant="outline"
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              {mounted ? (
                <Image
                  unoptimized
                  src={
                    resolvedTheme === "dark"
                      ? "/icons/apple-logo-white.png"
                      : "/icons/apple-logo-black.png"
                  }
                  alt="Apple"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Login link */}
          <p
            className={`text-center text-sm text-muted-foreground mt-12 transition-all duration-500 delay-225 hover:opacity-100 ${
              animate ? "opacity-130" : "opacity-0"
            }`}
          >
            ¿Todavía no tienes una cuenta?{" "}
            <a
              href="inicio-sesion"
              className="font-semibold text-foreground hover:underline hover:scale-105 inline-block transition-all duration-300"
            >
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:block lg:col-span-9 relative">
        <div className="absolute inset-0 bg-gradient-to-br dark:from-neutral-900/80 dark:to-black/80" />
        <Image
          src="/img/img-registro.jpg"
          alt="Laboratory"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
