"use client";

import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
const cards = [
  {
    title: "Realidad Aumentada",
    desc: "Cómo la RA transforma la visualización de moléculas y experimentos en 3D.",
    img: "img/4-img.jpg",
    slug: "visores-3d-quimica",
  },
  {
    title: "Instrumentos del laboratorio",
    desc: "Descubre modelos 3D de microscopios, matraces y otros equipos de laboratorio.",
    img: "img/5-img.jpg",
    slug: "instrumentos-laboratorio",
  },
  {
    title: "Estructuras moleculares",
    desc: "Explora cómo representamos moléculas en 3D para un aprendizaje visual y profundo.",
    img: "img/7-img.jpg",
    slug: "estructuras-moleculares",
  },
  {
    title: "Desde cualquier dispositivo",
    desc: "Accede a nuestras experiencias de RA desde tu móvil, tablet o computadora sin instalar apps.",
    img: "img/8-img.jpg",
    slug: "compatible-con-moviles",
  },
];



  return (
    <section className="w-full py-22">
      {/* Header */}
      <div className="text-center mb-30 mt-10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
          Blog
        </h1>

        <p className="text-lg text-muted-foreground max-w-1xl mx-auto">
          Noticias, guías, mejoras, avances del proyecto RALQ y explicaciones
          sobre nuestras tecnologías 3D y de realidad aumentada.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-19 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-37">
        {cards.map((card, i) => (
          <CardContainer key={i} className="w-full">
            <CardBody
              className="
                bg-background 
                border border-border 
                dark:border-white/20 
                rounded-2xl p-6 sm:p-8 lg:p-10 relative group/card 
                shadow-sm dark:shadow-none
                flex flex-col h-auto sm:h-[430px] lg:h-[520px]
              "
            >
              {/* Título */}
              <CardItem translateZ={50} className="text-2xl font-bold text-foreground">
                {card.title}
              </CardItem>

              {/* Descripción */}
              <CardItem
                as="p"
                translateZ={60}
                className="text-muted-foreground text-sm mt-1.5 flex-1"
              >
                {card.desc}
              </CardItem>

              {/* Imagen */}
              <CardItem translateZ={90} className="w-full mt-4 sm:mt-5 flex-shrink-0">
                <img
                  src={card.img}
                  alt="blog-image"
                  className="w-full h-48 sm:h-60 lg:h-65 object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
                />
              </CardItem>

              {/* BOTONES + TEXTO */}
              <div className="flex justify-between items-center mt-4 sm:mt-8">
                <CardItem translateZ={20} as="span" className="text-sm text-foreground opacity-70">
                  Leer más →
                </CardItem>

                <Link href={`/blog/${card.slug}`}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="
                      px-4 py-2 rounded-lg 
                      bg-foreground text-background 
                      dark:bg-white dark:text-black 
                      text-sm font-semibold cursor-pointer
                      transition-colors duration-200
                    "
                  >
                    Abrir
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
