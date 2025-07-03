"use client";

import type { ReactNode } from "react";
import BackButton from "@/components/BackButton";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 flex items-center z-30 bg-transparent">
      <BackButton className="ml-4 mt-2" />
    </div>
  );
};

export default function PlayLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#f9f9fa]">
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
