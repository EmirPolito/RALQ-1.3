"use client";

import { AnimatedHeaderMenu }  from "@/components/headerMenu";


export default function MenuPage() {
  return (
    <div>
      {/* Header */}
      <AnimatedHeaderMenu />

      {/* Contenido principal */}
      <main className="pt-24 p-10 text-3xl">
        Bienvenido al menú
      </main>
    </div>
  );
}
