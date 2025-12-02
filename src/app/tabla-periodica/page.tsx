"use client";

import { AnimatedHeaderMenu } from "@/components/headerMenu";
import  PeriodicTable from "@/components/PeriodicTable";
import Footer from "@/components/footer";

export default function TablaPerPage() {
  return (
    <div>
      <AnimatedHeaderMenu />
      <PeriodicTable />

      <Footer />
    </div>
  );
}
