"use client";

import type { ReactNode } from "react";
import TopBar from "@/components/TopBar";

const MessageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-[#f9f9fa]">
      <TopBar />
      <div>{children}</div>
    </div>
  );
};

export default MessageLayout;
