"use client";

import { AnimatedHeader } from "@/components/animated-header";
import  ThreeDCardDemo  from "@/components/contenido-blog";
import Footer from "@/components/footer";

export default function BlogPage2() {
  return (
    <div>
      <AnimatedHeader />
      
      {/* Quitar este y poner el real */}
      <ThreeDCardDemo />

      <Footer />
    </div>
  );
}
