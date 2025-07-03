"use client";

import { Card } from "@/constants/card";
import { HIRAGANAS } from "@/constants/hiragana";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type FlashButtonType = {
  card: Card;
  onNext: () => void;
};

const FlashButtons = ({ card, onNext }: FlashButtonType) => {
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
    const sameGroupCards = HIRAGANAS.filter((w) => {
      if (card.romaji === w.romaji) return;
      if (card.group !== w.group) return;
      return w.romaji;
    });
    const cards = sameGroupCards
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .concat(card)
      .sort(() => Math.random() - 0.5);
    setRandomCards(cards);
    setSelectedRomaji(null);
    setIsCorrect(null);
    setShakeRomaji(null);
  }, [card]);

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
