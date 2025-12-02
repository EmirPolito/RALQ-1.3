"use client";

import { AnimatedHeader } from "@/components/animated-header";
import  PreguntasFrecuentes  from "@/components/preguntas-frec";
import Footer from "@/components/footer";

export default function BlogPage() {
  return (
    <div>
      <AnimatedHeader />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}
