"use client";

import FlashButtons from "@/components/FlashButtons";
import { useFlashCard } from "@/hooks/useFlashCard";
import FlashCardComponent from "@/components/FlashCardComponent";
import { useParams } from "next/navigation";
import { HIRAGANAS } from "@/constants/hiragana";
import { KATAKANAS } from "@/constants/katakana";
import { MENUS } from "@/constants/menu";
import AllDoneCard from "@/components/AllDoneCard";

const FlashCardPage = () => {
  const params = useParams();
  const { id } = params;
  let data;
  if (id === "hiragana") data = HIRAGANAS;
  if (id === "katakana") data = KATAKANAS;

  const { card, next, prev, shuffle, progress, total } = useFlashCard(
    data || []
  );
  const category = MENUS.find(({ type }) => id === type);

  const isAllDone = total === 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fa]">
      <h1 className="text-2xl font-bold mb-8 mt-8 text-[#212121] tracking-tight">
        {category?.kor || ""} 플래시카드
      </h1>
      {isAllDone ? (
        <AllDoneCard />
      ) : (
        <>
          <FlashCardComponent card={card} />
          <FlashButtons card={card} onNext={next} />
        </>
      )}
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
};

export default FlashCardPage;
