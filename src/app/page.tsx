"use client";

import FlashCard from "../components/FlashCard";
import FlashCardController from "../components/FlashCardController";
import { useFlashCard } from "../hooks/useFlashCard";

export default function HiraganaFlashCardPage() {
  const { card, isFlipped, next, prev, flip, shuffle, progress } =
    useFlashCard();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fa]">
      <h1 className="text-2xl font-bold mb-8 mt-8 text-[#212121] tracking-tight">
        히라가나 플래시카드
      </h1>
      <FlashCard card={card} isFlipped={isFlipped} onFlip={flip} />
      <FlashCardController
        onPrev={prev}
        onNext={next}
        onShuffle={shuffle}
        progress={progress}
      />
      <div className="mt-10 text-[#b0b0b0] text-xs">
        카드를 클릭하면 정답이 나와요!
      </div>
    </div>
  );
}
