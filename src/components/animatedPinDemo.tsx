"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* TARJETA 1 */}
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
              Aceternity UI
            </h3>
            <p className="text-base m-0 p-0 font-normal text-muted-foreground">
              Customizable Tailwind CSS and Framer Motion Components.
            </p>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

        {/* TARJETA 2 */}
        <PinContainer title="/ejemplo2" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
              Componente 2
            </h3>
            <p className="text-base m-0 p-0 font-normal text-muted-foreground">
              Otra tarjeta con el mismo estilo 3D.
            </p>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600" />
          </div>
        </PinContainer>

        {/* TARJETA 3 */}
        <PinContainer title="/ejemplo3" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
              Componente 3
            </h3>
            <p className="text-base m-0 p-0 font-normal text-muted-foreground">
              Puedes poner cualquier contenido dentro.
            </p>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600" />
          </div>
        </PinContainer>

      </div>
    </div>
  );
}
