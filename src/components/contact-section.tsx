"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(true); // Formulario aparece de inmediato

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modeColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--mode-accent"
        )
      : undefined;

  const liftHover = `
    hover:-translate-y-1
    hover:scale-105
    active:scale-98
    hover:shadow-sm
  `;

  const colorHover = modeColor
    ? `border-[2px] border-[${modeColor}] hover:shadow-[0_0_12px_${modeColor}]`
    : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log({ name, email, message });
      setIsLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };


  return (
    <section className="relative min-h-screen font-inter">
      {/* Imagen de fondo */}
      <img
        src="/img/fondo-contacto.jpg"
        alt="Fondo contacto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      {/* Contenido */}
      <div className="relative flex items-center justify-center min-h-screen px-4 py-50">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-6">
          {/* Texto Izquierdo */}
          <div className="lg:w-1/2 w-full text-[var(--accent)]">
            <h1
              className={`text-6xl lg:text-5xl font-bold capitalize transition-all duration-500 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              Contáctanos
            </h1>
            <p
              className={`mt-5 text-lg max-w-xl transition-all duration-500 delay-75 ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
            >
              ¿Tienes preguntas, comentarios o deseas colaborar con nosotros?
              Estamos aquí para ayudarte. Comparte tus ideas o necesidades, ¡nos
              encantaría saber de ti!
            </p>

            {/* Redes sociales */}
            <div
              className={`mt-5 transition-all duration-500 delay-100 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <h3 className="font-semibold text-[var(--accent)]">Redes sociales</h3>
              <div className="flex items-center gap-5 mt-4">
                {/* Twitter */}
                <a
                  href="#"
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.09 9.09 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 2.15 4.52 4.52 0 004.6 9.72a4.51 4.51 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.06 9.06 0 012 19.54a12.79 12.79 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2-.01-.42-.02-.63A9.2 9.2 0 0023 3z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.243 1.248-3.608 1.31-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.243-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.623.37 3.68 1.314c-.943.943-1.183 2.091-1.242 3.372C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.947.059 1.281.299 2.429 1.242 3.372.943.943 2.091 1.183 3.372 1.242 1.281.059 1.69.072 4.947.072s3.665-.013 4.947-.072c1.281-.059 2.429-.299 3.372-1.242.943-.943 1.183-2.091 1.242-3.372.059-1.282.072-1.69.072-4.947V9.333c0-3.256-.013-3.665-.072-4.947-.059-1.281-.299-2.429-1.242-3.372-.943-.943-2.091-1.183-3.372-1.242C15.667.013 15.259 0 12 0z" />
                    <circle cx="12" cy="12" r="3.6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario Derecho */}
          <div
            className={`w-full lg:w-1/2 p-8 rounded-xl shadow-2xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--card-border-theme)] transition-colors duration-300`}
          >
            <h2
              className={`text-xl font-semibold text-[var(--foreground)] transition-all duration-500 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              Formulario de contacto
            </h2>
            <p
              className={`mt-2 text-[var(--muted-foreground)] transition-all duration-500 delay-75 ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
            >
              Pregúntanos lo que necesites, estamos listos para responderte.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-7">
              {/* Nombre */}
              <div
                className={`space-y-3 transition-all duration-500 delay-100 ${
                  animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              >
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-[var(--foreground)]"
                >
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  className={`bg-[var(--input)] text-[var(--foreground)] border-[var(--border-theme)] px-3.5 py-3 rounded-lg transition-all duration-300 ${liftHover} ${colorHover}`}
                />
              </div>

              {/* Email */}
              <div
                className={`space-y-2 transition-all duration-500 delay-125 ${
                  animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              >
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-[var(--foreground)]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo"
                  required
                  className={`bg-[var(--input)] text-[var(--foreground)] border border-[var(--border-theme)] px-3.5 py-3 rounded-lg transition-all duration-300 ${liftHover} ${colorHover}`}
                />
              </div>

              {/* Mensaje */}
              <div
                className={`space-y-2 transition-all duration-500 delay-150 ${
                  animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              >
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--foreground)]"
                >
                  Mensaje
                </Label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje"
                  required
                  className={`w-full bg-[var(--input)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] border border-[var(--border-theme)] px-3.5 py-3 rounded-lg transition-all duration-300 ${liftHover} ${colorHover}`}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className={`
    w-full py-3.5 font-semibold rounded-lg transition-all duration-300 mt-1
    ${liftHover} 
    border-[2px] border-[var(--primary-2)]
    bg-[var(--primary-2)] 
    text-[var(--primary-foreground)]
    hover:shadow-[0_0_12px_var(--mode-accent)]
    ${
      resolvedTheme === "light"
        ? "hover:bg-[var(--primary-2)] hover:text-[var(--primary-foreground)]"
        : "hover:bg-[var(--primary-2)] hover:text-[var(--primary-foreground)]"
    }
    ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
  `}
              >
                {isLoading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
