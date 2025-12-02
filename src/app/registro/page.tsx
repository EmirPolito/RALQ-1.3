"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

// FIREBASE IMPORTS
import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function SignUpForm() {
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Errores
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  useEffect(() => setAnimate(true), []);

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
  `;

  const colorHover = modeColor
    ? `
      border-[2px] border-[${modeColor}]
      hover:shadow-[0_0_12px_${modeColor}]
    `
    : "";

  // VALIDACIÓN
  const validatePassword = (pass: string) => {
    if (!/[A-Z]/.test(pass)) return "Debe incluir al menos 1 letra mayúscula.";
    if (pass.length < 5) return "Debe tener mínimo 5 caracteres.";
    if (!/[#_\-\/\*]/.test(pass))
      return "Debe incluir un carácter especial (# _ - / *).";

    return "";
  };

  // ----------------------------------------------------------
  // 🔥 REGISTRO CON CORREO Y CONTRASEÑA — COMPLETO
  // ----------------------------------------------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFirebaseError("");

    const passError = validatePassword(password);
    setPasswordError(passError);
    if (passError !== "") return;

    if (password !== confirmPassword) {
      setConfirmError("Las contraseñas no coinciden.");
      return;
    }

    setConfirmError("");
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      router.push("/menu"); // ⬅️ Redirige después de registrar

    } catch (error: any) {
      let msg = error.message;

      if (msg.includes("email-already-in-use"))
        msg = "Este correo ya está registrado.";

      if (msg.includes("invalid-email"))
        msg = "Correo inválido.";

      setFirebaseError(msg);
    }

    setIsLoading(false);
  };

  // ----------------------------------------------------------
  // 🔥 LOGIN CON GOOGLE
  // ----------------------------------------------------------

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-20 min-h-screen max-h-screen overflow-hidden bg-background text-foreground transition-colors">
      
      {/* LEFT SIDE */}
      <div className="lg:col-span-11 flex items-center justify-center p-6 lg:p-8 bg-background overflow-y-auto">
        <div className="w-full max-w-lg">

          {/* HEADER */}
          <div
            className={`mb-9 text-center transition-all duration-500 ${
              animate ? "opacity-100" : "opacity-0 translate-y-2"
            }`}
          >
            <h1 className="text-3xl font-bold mb-2">Registrarse</h1>
            <p className="text-sm opacity-85">Bienvenido/a a RALQ. Introduzca sus datos.</p>
          </div>

          {/* ERROR FIREBASE */}
          {firebaseError && (
            <p className="text-red-500 text-center mb-5">{firebaseError}</p>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-9">

            {/* EMAIL */}
            <div className="space-y-1.5">
              <Label>Correo</Label>
              <Input
                type="email"
                placeholder="Introduce tu correo"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5 relative">
              <Label>Contraseña</Label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Introduce tu contraseña"
                  value={password}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(validatePassword(e.target.value));
                  }}
                  className="pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {passwordError && (
                <p className="absolute text-red-500 text-sm mt-1 left-0">
                  {passwordError}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1.5 relative">
              <Label>Confirmar contraseña</Label>

              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  required
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmError(
                      e.target.value !== password
                        ? "Las contraseñas no coinciden."
                        : ""
                    );
                  }}
                  className="pr-12"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {confirmError && (
                <p className="absolute text-red-500 text-sm mt-1 left-0">
                  {confirmError}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-lg font-semibold"
            >
              {isLoading ? "Creando cuenta..." : "Registrarse"}
            </Button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-5 my-7">
            <div className="flex-1 h-px bg-gray-400" />
            <span className="text-sm opacity-80 font-medium whitespace-nowrap">
              O continúa con
            </span>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-3 gap-3">

            {/* GOOGLE */}
            <Button
              type="button"
              onClick={handleGoogle}
              className={`${baseSocial} ${liftHover} ${colorHover}`}
            >
              <Image
                unoptimized
                src="/icons/google-logo.png"
                alt="Google"
                width={24}
                height={24}
              />
            </Button>

            {/* FACEBOOK (AÚN NO ACTIVADO) */}
            <Button type="button" className={`${baseSocial} opacity-50 cursor-not-allowed`}>
              <Image
                unoptimized
                src="/icons/facebook-logo.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Button>

            {/* APPLE (AÚN NO ACTIVADO) */}
            <Button type="button" className={`${baseSocial} opacity-50 cursor-not-allowed`}>
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
                />
              ) : (
                <div className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:block lg:col-span-9 relative">
        <div className="absolute inset-0 bg-gradient-to-br dark:from-neutral-900/80 dark:to-black/80" />
        <Image
          src="/img/img-registro.jpg"
          alt="Laboratory"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
