"use client";

import Link from "next/link";
import { MENUS } from "@/constants/menu";

export default function HiraganaFlashCardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fa]">
      <h1 className="text-2xl font-bold mb-8 mt-8 text-[#212121] tracking-tight">
        플래시카드
      </h1>
      <div className="flex flex-col gap-2">
        {MENUS.map((menu) => {
          return (
            <Link
              href={menu.url}
              key={menu.url}
              className="w-[220px] py-4 bg-white rounded-2xl shadow-xl flex items-center justify-center text-md font-bold cursor-pointer select-none relative transition-colors duration-200 border border-[#e5e5e5]"
            >
              {menu.kor}
            </Link>
          );
        })}
      </div>
      <div className="mt-10 text-[#b0b0b0] text-xs">
        카드를 클릭하면 정답이 나와요!
      </div>
    </div>
  );
}
