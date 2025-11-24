"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () =>
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  const onMouseLeave = () =>
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");

  return (
    <a
      className={cn("relative group/pin cursor-pointer z-10", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0deg)" }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className={cn(
            "absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl transition duration-700 overflow-hidden",
            "bg-background text-foreground border border-border shadow-md dark:shadow-lg",
            className
          )}
        >
          <div className="relative z-20">{children}</div>
        </div>
      </div>

      {/* TEXTO Y EFECTO */}
      <PinPerspective title={title} />
    </a>
  );
};

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-20 transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">

        {/* TITULO */}
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background/70 backdrop-blur-sm py-0.5 px-4 ring-1 ring-border">
            <span className="relative z-20 text-xs font-bold text-foreground inline-block py-0.5">
              {title}
            </span>
<div className="bg-gradient-to-r from-black/0 via-black/70 to-black/0 dark:from-white/0 dark:via-white/70 dark:to-white/0"></div>
          </div>
        </div>

        {/* HALOS ANIMADOS */}
        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-primary/10 shadow-md"
            />
          ))}
        </div>

        {/* PARTICULAS */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-primary translate-y-[14px] w-1 h-1 rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-primary/70 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
          
        </>



        
      </div>
    </motion.div>
  );
};
