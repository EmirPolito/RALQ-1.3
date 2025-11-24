"use client";


import  { AnimatedHeaderMenu } from "@/components/headerMenu";
import "../globals.css";


export default function HeaderMenu({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <AnimatedHeaderMenu />
      {children}
    </>
  );
}
