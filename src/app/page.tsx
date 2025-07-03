"use client";

import FlashButtons from "@/components/FlashButtons";
import FlashCardController from "../components/FlashCardController";
import { useFlashCard } from "../hooks/useFlashCard";
import FlashCardComponent from "@/components/FlashCardComponent";

export default function HiraganaFlashCardPage() {
  const { card, next, prev, shuffle, progress } = useFlashCard();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fa]">
      <h1 className="text-2xl font-bold mb-8 mt-8 text-[#212121] tracking-tight">
        히라가나 플래시카드
      </h1>
      <FlashCardComponent card={card} />
      <FlashButtons card={card} onNext={next} />
      {/* <FlashCardController
        onPrev={prev}
        onNext={next}
        onShuffle={shuffle}
        progress={progress}
      /> */}
      <div className="mt-10 text-[#b0b0b0] text-xs">
        카드를 클릭하면 정답이 나와요!
      </div>
    </div>
  );
}
