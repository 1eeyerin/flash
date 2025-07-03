"use client";

import { Card } from "@/constants/card";
import { HIRAGANAS } from "@/constants/hiragana";

type FlashButtonType = {
  card: Card;
  onNext: () => void;
};

const FlashButtons = ({ card, onNext }: FlashButtonType) => {
  const sameGroupCards = HIRAGANAS.filter((w) => {
    if (card.romaji === w.romaji) return;
    if (card.group !== w.group) return;

    return w.romaji;
  });

  const randomCards = sameGroupCards
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)
    .concat(card);

  const handleClick = (romaji: string) => {
    console.log("@@ romaji, card", romaji, card.romaji);
    if (card.romaji === romaji) {
      onNext();
      console.log("@@ 성공");
      return;
    }

    console.log("@@ 실패");
  };

  return (
    <div className="flex justify-center gap-2 mt-2">
      {randomCards.map((c) => {
        return (
          <button
            type="button"
            onClick={() => handleClick(c.romaji)}
            key={c.char}
            className="w-[calc((220px/3)-5.3px)] flex-col aspect-[1/1.1] bg-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold cursor-pointer select-none relative transition-colors duration-200 border border-[#e5e5e5] text-gray-500"
          >
            <span>{c.romaji}</span>
            <span className="text-xs text-gray-400">{c.kor}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FlashButtons;
