"use client";

import { useRouter } from "next/navigation";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type BackButtonProps = {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const DefaultIcon = (
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path
      d="M12.5 15l-5-5 5-5"
      stroke="#222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackButton = ({
  children = "뒤로가기",
  className,
  icon = DefaultIcon,
  ...props
}: BackButtonProps) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`rounded-full px-5 py-2 pl-3 bg-[#ffffff] text-xs hover:bg-[#e9e9ee] text-gray-500 font-semibold shadow-sm transition-colors border border-[#e5e5e5] active:scale-95 flex items-center gap-1 ${
        className || ""
      }`}
      aria-label="뒤로가기"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default BackButton;
