"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Enviando");

  const { resolvedTheme } = useTheme();

  // 🔥 Envío con animación "Enviando..."
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let dotCount = 0;
    const interval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      setLoadingText("Enviando" + ".".repeat(dotCount));
    }, 400);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.ok) {
        alert("Mensaje enviado correctamente");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.log(error);
      alert("No se pudo conectar con el servidor.");
    }

    setIsLoading(false);
    clearInterval(interval);
    setLoadingText("Enviando");
  };

  // Variants simples para entrada
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  // Clases unificadas para Inputs y Textarea
  const inputClasses = `
    bg-background dark:bg-neutral-900 
    border-2 border-border dark:border-neutral-700
    text-foreground dark:text-white 
    placeholder:text-gray-500 dark:placeholder:text-gray-300
    px-3 py-2.5 rounded-lg 
    w-full
    transition-all duration-300
    hover:border-gray-500 dark:hover:border-neutral-600
    hover:shadow-sm hover:scale-[1.02] focus:scale-[1.02] focus:border-blue-500
  `;

  return (
    <motion.section
      className="relative min-h-screen font-inter px-6 pt-32 pb-32"
      initial="hidden"
      animate="visible"
    >
      {/* TÍTULO */}
      <motion.div className="text-center mb-30" variants={fadeInUp} custom={0}>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 text-balance">
          Contáctanos
        </h1>

        <p className="text-lg text-muted-foreground text-balance max-w-1xl mx-auto">
          Si necesitas soporte, deseas colaborar o tienes preguntas sobre el
          sistema RALQ, nuestro equipo está disponible para ayudarte.
        </p>
      </motion.div>

      <div className="grid grid-cols-6 lg:grid-cols-2 gap-1 max-w-7xl mx-auto">
        {/* FORMULARIO */}
        <motion.div
          className="
            rounded-xl
            p-6
            w-full
            bg-[var(--card)]
            shadow-sm
            border border-[var(--primary-5)]
            dark:border-gray-800
          "
          variants={fadeInUp}
          custom={0.1}
        >
          <h1 className="text-3xl font-bold text-foreground mb-1">
            Formulario de contacto
          </h1>

          <p className="text-muted-foreground mb-9">
            Pregúntanos lo que necesites, estamos listos para responderte
          </p>

          <form onSubmit={handleSubmit} className="mt-2 space-y-5">
            <motion.div variants={fadeInUp} custom={0.2}>
              <Label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)]">
                Nombre completo
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                placeholder="Introduce tu nombre"
                onChange={(e) => setName(e.target.value)}
                required
                className={inputClasses}
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.3}>
              <Label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Introduce tu correo"
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClasses}
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.4}>
              <Label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">
                Mensaje
              </Label>
              <textarea
                id="message"
                value={message}
                placeholder="Introduce tu mensaje"
                onChange={(e) => setMessage(e.target.value)}
                required
                className={inputClasses}
                style={{ minHeight: "180px", resize: "vertical" }}
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.5}>
              <Button
                type="submit"
                disabled={isLoading}
                className="
                  w-full py-4 font-semibold rounded-lg transition-all duration-300 
                  mt-2 border-2 border-[var(--primary-2)]
                  bg-[var(--primary-2)] text-[var(--primary-foreground)]
                  flex items-center justify-center
                "
              >
                {isLoading ? loadingText : "Enviar mensaje"}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* EQUIPO */}
        <motion.div
          className="pl-20 md:pl-23 lg:pl-40"
          variants={fadeInUp}
          custom={0.6}
        >
          <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-10">
            Miembros del equipo
          </h3>

          <ul className="space-y-7.5 text-[var(--muted-foreground)]">
            {[
              { name: "Emir Polito Guevara", email: "emirpolitog@mail.com" },
              { name: "Irving Esteban Molina Méndez", email: "cristiandaniel@mail.com" },
              { name: "Cristian Daniel Barraza Hernández", email: "irvingesteban@mail.com" },
            ].map((member, i) => (
              <motion.li key={i} variants={fadeInUp} custom={0.7 + i * 0.1}>
                <p className="text-base font-medium text-[var(--foreground)]">{member.name}</p>
                <p className="text-sm opacity-90">{member.email}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
