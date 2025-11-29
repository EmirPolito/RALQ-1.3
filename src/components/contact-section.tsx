"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hover universal
  const liftHover = "hover:scale-[1.02] hover:-translate-y-[2px]";
  const colorHover =
    "hover:border-[var(--primary)] hover:text-[var(--foreground)]";

  const { resolvedTheme } = useTheme();

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
    <section className="relative min-h-screen font-inter px-6 pt-32 pb-32">
      {/* TÍTULO */}
      <div className="text-center mb-30">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 text-balance">
          Contáctanos
        </h1>

        <p className="text-lg text-muted-foreground text-balance max-w-1xl mx-auto">
          Si necesitas soporte, deseas colaborar o tienes preguntas sobre el
          sistema RALQ, nuestro equipo está disponible para ayudarte.
        </p>
      </div>

      {/* CONTENIDO ↓ */}
      <div className="grid grid-cols-6 lg:grid-cols-2 gap-1 max-w-7xl mx-auto">
        {/* -------------------------------------------------------------- */}
        {/* 🔥 FORMULARIO SIN ANIMACIONES */}
        {/* -------------------------------------------------------------- */}

        <div
          className="
    rounded-xl
    p-6
    w-full
    bg-[var(--card)]
    shadow-sm
    border border-[var(--primary-5)]
    dark:border-gray-800
  "
        >
          {/* Título y subtítulo */}
          <h1 className="text-3xl font-bold text-foreground mb-1">
            Formulario de contacto
          </h1>

          <p className=" text-muted-foreground mb-9">
            Pregúntanos lo que necesites, estamos listos para responderte
          </p>

                                        {/* 7 tamaño del formulario */}
          <form onSubmit={handleSubmit} className="mt-2 space-y-6"> 
            {/* Nombre */}
            <div className="space-y-3">
              <Label
                htmlFor="name"
                className="text-sm font-semibold text-[var(--foreground)]"
              >
                Nombre completo
              </Label>

              <Input
                id="name"
                type="text"
                value={name}
                placeholder="Introduce tu nombre"
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background dark:bg-neutral-900 
        border-2 border-border dark:border-neutral-700
        text-foreground dark:text-white 
        placeholder:text-gray-500 dark:placeholder:text-gray-300
        px-3 py-2.5 rounded-lg 
        focus:border-blue-500 transition-all duration-300 
        hover:border-gray-500 dark:hover:border-neutral-600 
        hover:shadow-sm hover:scale-105 focus:scale-105"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
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
                placeholder="Introduce tu correo"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background dark:bg-neutral-900 
        border-2 border-border dark:border-neutral-700
        text-foreground dark:text-white 
        placeholder:text-gray-500 dark:placeholder:text-gray-300
        px-3 py-2.5 rounded-lg 
        focus:border-blue-500 transition-all duration-300 
        hover:border-gray-400 dark:hover:border-neutral-600 
        hover:shadow-sm hover:scale-105 focus:scale-105"
              />
            </div>

            {/* Mensaje */}
            <div className="space-y-3">
              <Label
                htmlFor="message"
                className="text-sm font-semibold text-[var(--foreground)]"
              >
                Mensaje
              </Label>

              <textarea
                id="message"
                value={message}
                placeholder="Introduce tu mensaje"
                onChange={(e) => setMessage(e.target.value)}
                required
                className="
        bg-background dark:bg-neutral-900 
        border-2 border-border dark:border-neutral-700
        text-foreground dark:text-white 
        placeholder:text-gray-500 dark:placeholder:text-gray-300

        px-4 py-3 rounded-lg 

        w-full
        min-h-[180px]
        text-left
        text-start
        resize-y
        break-words

        focus:border-blue-500 transition-all duration-300 
        hover:border-gray-400 dark:hover:border-neutral-600 
        hover:shadow-sm hover:scale-105 focus:scale-105
      "
              />
            </div>

            {/* Botón */}
            <Button
              type="submit"
              disabled={isLoading}
              className={`
      w-full py-4 font-semibold rounded-lg transition-all duration-300 
      mt-2 border-2 border-[var(--primary-2)]
      bg-[var(--primary-2)] text-[var(--primary-foreground)]
      ${liftHover}
      hover:bg-[var(--primary-2)]  
      hover:text-[var(--primary-foreground)] 
      hover:shadow-[0_0_12px_var(--mode-accent)]
    `}
            >
              {isLoading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* INFORMACIÓN DERECHA (sin animaciones) */}
        {/* -------------------------------------------------------------- */}
        <div className="pl-20 md:pl-23 lg:pl-40">
          <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-10">
            Miembros del equipo
          </h3>

          <ul className="space-y-7.5 text-[var(--muted-foreground)]">
            <li className="transition-all duration-200 hover:translate-x-1.5">
              <p className="text-base font-medium text-[var(--foreground)]">
                Emir Polito Guevara
              </p>
              <p className="text-sm opacity-90">emirpolitog@mail.com</p>
            </li>

            <li className="transition-all duration-200 hover:translate-x-1.5">
              <p className="text-base font-medium text-[var(--foreground)]">
                Irving Esteban Molina Méndez
              </p>
              <p className="text-sm opacity-90">cristiandaniel@mail.com</p>
            </li>

            <li className="transition-all duration-200 hover:translate-x-1.5">
              <p className="text-base font-medium text-[var(--foreground)]">
                Cristian Daniel Barraza Hernández
              </p>
              <p className="text-sm opacity-90">irvingesteban@mail.com</p>
            </li>
          </ul>

          {/* ICONOS */}
          <div className="mt-10 flex gap-6">
            <a
              className="text-[var(--primary-2)] hover:text-[var(--primary-2)] transition"
              href="#"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.09 9.09 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 2.15A4.52 4.52 0 004.6 9.72a4.51 4.51 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43a4.52 4.52 0 01-2.04.08a4.52 4.52 0 004.22 3.14A9.06 9.06 0 012 19.54a12.79 12.79 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85c0-.2-.01-.42-.02-.63A9.2 9.2 0 0023 3z" />
              </svg>
            </a>

            <a
              className="text-[var(--primary-2)] hover:text-[var(--primary-2)] transition"
              href="#"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            <a
              className="text-[var(--primary-2)] hover:text-[var(--primary-2)] transition"
              href="#"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.003 2.667c-7.363 0-13.333 5.97-13.333 13.333c0 2.353.613 4.647 1.773 6.667L2.667 29.333l7.01-1.733c1.943 1.06 4.14 1.633 6.327 1.633h.001c7.363 0 13.333-5.97 13.333-13.333c0-3.556-1.387-6.897-3.907-9.417c-2.52-2.52-5.86-3.916-9.428-3.916zm7.727 19.733c-.327.92-1.88 1.773-2.607 1.88c-.667.1-1.527.14-2.467-.153c-.567-.18-1.293-.42-2.233-.82c-3.927-1.707-6.48-5.693-6.68-5.953c-.2-.267-1.587-2.113-1.587-4.027c0-1.913 1-2.853 1.353-3.247c.353-.393.78-.493 1.04-.493c.26 0 .52.003.747.013c.24.13.56-.087.873.667c.327.787 1.113 2.72 1.213 2.92c.1.2.167.447.033.713c-.127.273-.193.447-.38.687c-.193.233-.407.52-.58.7c-.193.193-.393.407-.167.8c.227.393 1.007 1.653 2.16 2.673c1.487 1.287 2.72 1.693 3.113 1.867c.393.173.62.147.853-.087c.233-.233.98-1.14 1.24-1.527c.26-.387.52-.327.873-.193c.353.133 2.227 1.053 2.613 1.247c.387.193.647.287.747.447c.1.16.1.927-.227 1.847z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
