"use client";

import { useFlashCard } from "@/hooks/useFlashCard";
import { useParams } from "next/navigation";
import { HIRAGANAS } from "@/constants/hiragana";
import { KATAKANAS } from "@/constants/katakana";
import { MENUS } from "@/constants/menu";
import { CONFUSING } from "@/constants/confusing";
import FlashCardComponent from "@/components/play/FlashCardComponent";
import FlashButtons from "@/components/play/FlashButtons";
import AllDoneCard from "@/components/AllDoneCard";

const FlashCardPage = () => {
  const params = useParams();
  const { id } = params;
  let data;
  if (id === "hiragana") data = HIRAGANAS;
  if (id === "katakana") data = KATAKANAS;
  if (id === "confusing") data = CONFUSING;

  const { card, next, prev, shuffle, progress, total } = useFlashCard(
    data || []
  );
  const category = MENUS.find(({ type }) => id === type);

  const isAllDone = total === 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fa]">
      <h1 className="text-xl font-bold mb-6 mt-10 text-[#212121] tracking-tight">
        {category?.kor || ""} 플래시카드
      </h1>
      {isAllDone ? (
        <AllDoneCard />
      ) : (
        <>
          <FlashCardComponent card={card} />
          <FlashButtons card={card} onNext={next} data={data || []} />
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
