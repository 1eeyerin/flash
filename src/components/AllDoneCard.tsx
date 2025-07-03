"use client";

import { DotLottieReact } from "@/lib/dotlottie";
import BackButton from "@/components/BackButton";

const AllDoneCard = () => {
  return (
    <div className="text-center">
      <div className="w-[220px] h-[300px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-2xl font-bold select-none relative transition-colors duration-200 border-2 border-dashed border-[#e5e5e5]">
        <div className="h-[150px] overflow-hidden flex items-center justify-center">
          <DotLottieReact
            autoplay
            src="/lottie/finish.lottie"
            width="100%"
            height="100%"
            className="object-cover"
          />
        </div>
        <div className="text-[#b0b0b0] text-xs mb-4">모든 카드를 맞췄어요!</div>
      </div>
      <BackButton className="mt-6" />
    </div>
  );
};

export default AllDoneCard;
