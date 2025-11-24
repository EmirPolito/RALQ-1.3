"use client";

import { HeroParallaxDemo } from "@/components/heroParallaxDemo";
import { StickyScrollRevealDemo } from "@/components/stickyScrollDemo";
import { CardHoverEffectDemo } from "@/components/cardHoverEffectDemo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedPinDemo } from "@/components/animatedPinDemo";
import Footer from "@/components/footer";

function HomePage() {
  const testimonials = [
    {
      quote: "Excelente plataforma, aprendí muchísimo.",
      name: "Juan Pérez",
      title: "Estudiante de química",
    },
    {
      quote: "La RA está muy bien implementada.",
      name: "María Gómez",
      title: "Docente",
    },
    {
      quote: "Útil para estudiar desde casa.",
      name: "Carlos Ruiz",
      title: "Alumno de preparatoria",
    },
  ];

  return (
    <div>
      
      <HeroParallaxDemo />

      <div className="py-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>

      {/* <CardHoverEffectDemo /> */}
      <AnimatedPinDemo />
      <Footer />
    </div>
  );
}

export default HomePage;
