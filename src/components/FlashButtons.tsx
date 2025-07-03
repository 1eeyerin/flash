"use client";

import { Card } from "@/constants/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type FlashButtonType = {
  card: Card;
  onNext: () => void;
  data: Card[];
};

const FlashButtons = ({ card, onNext, data }: FlashButtonType) => {
  const [selectedRomaji, setSelectedRomaji] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shakeRomaji, setShakeRomaji] = useState<string | null>(null);
  const [randomCards, setRandomCards] = useState<Card[]>([]);

  const handleClick = (romaji: string) => {
    if (selectedRomaji !== null) return;

    setSelectedRomaji(romaji);

    if (card.romaji === romaji) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setShakeRomaji(romaji);
    }
  };

  useEffect(() => {
    // 1. 같은 그룹, 본인 제외
    const sameGroupCards = data.filter(
      (w) => card.group === w.group && card.romaji !== w.romaji
    );

    //TODO: 다시 해결방안 생각해보기
    // 2. romaji 기준으로 중복 제거
    const uniqueRomajiCards: Card[] = [];
    const seenRomaji = new Set<string>();

    for (const c of sameGroupCards) {
      if (!seenRomaji.has(c.romaji)) {
        uniqueRomajiCards.push(c);
        seenRomaji.add(c.romaji);
      }
    }

    // 3. 랜덤 2개 + 정답 카드
    const cards = uniqueRomajiCards
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .concat(card)
      .sort(() => Math.random() - 0.5);

    setRandomCards(cards);
    setSelectedRomaji(null);
    setIsCorrect(null);
    setShakeRomaji(null);
  }, [card, data]);

  useEffect(() => {
    if (isCorrect) {
      const timer = setTimeout(() => {
        setSelectedRomaji(null);
        setIsCorrect(null);
        onNext();
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isCorrect === false && shakeRomaji) {
      const timer = setTimeout(() => {
        setSelectedRomaji(null);
        setIsCorrect(null);
        setShakeRomaji(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isCorrect, shakeRomaji, onNext]);

  return (
    <div className="flex justify-center gap-2 mt-2">
      {randomCards.map((c) => {
        const isSelected = selectedRomaji === c.romaji;
        let bgColor = "bg-white";
        if (isSelected && isCorrect === true)
          bgColor = "bg-green-400 text-white";
        else if (isSelected && isCorrect === false)
          bgColor = "bg-red-400 text-white";
        const shake = shakeRomaji === c.romaji;

        return (
          <motion.button
            type="button"
            onClick={() => handleClick(c.romaji)}
            key={c.char}
            className={`w-[calc((220px/3)-5.3px)] flex-col aspect-[1/1.1] rounded-2xl shadow-xl flex items-center justify-center text-xl font-bold cursor-pointer select-none relative transition-colors duration-200 border border-[#e5e5e5] text-gray-500 ${bgColor}`}
            disabled={selectedRomaji !== null}
            animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
            transition={
              shake ? { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] } : {}
            }
            whileTap={{ scale: 0.95 }}
          >
            <span>{c.romaji}</span>
            <span className="text-xs opacity-60">{c.kor}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default FlashButtons;
