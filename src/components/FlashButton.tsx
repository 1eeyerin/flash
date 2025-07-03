"use client";

import { HIRAGANA_CARDS, HiraganaCard } from "@/constants/hiragana";
import { useFlashCard } from "@/hooks/useFlashCard";
import { FC } from "react";

const cardStyle =
  "w-[calc((220px/3)-5.3px)] aspect-[1/1.1] bg-white rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold cursor-pointer select-none relative transition-colors duration-200 border border-[#e5e5e5]";

const FlashButton: FC<{ card: HiraganaCard }> = ({ card }) => {
  const sameGroupCards = HIRAGANA_CARDS.filter((w) =>
    card.group === w.group ? w.romaji : null
  );

  const { next } = useFlashCard();

  const randomCards = sameGroupCards
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const handleClick = (romaji: string) => {
    if (card.romaji === romaji) {
      next();
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
            className={cardStyle}
          >
            {c.romaji}
          </button>
        );
      })}
    </div>
  );
};

export default FlashButton;
