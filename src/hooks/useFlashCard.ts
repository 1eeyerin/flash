"use client";

import { useState } from "react";
import { HIRAGANA_CARDS, HiraganaCard } from "../constants/hiragana";

export type FlashCardState = {
  currentIndex: number;
  isFlipped: boolean;
  cards: HiraganaCard[];
};

export const useFlashCard = () => {
  const [state, setState] = useState<FlashCardState>({
    currentIndex: 0,
    isFlipped: false,
    cards: HIRAGANA_CARDS,
  });

  const flip = () => setState((s) => ({ ...s, isFlipped: !s.isFlipped }));

  const next = () =>
    setState((s) => ({
      ...s,
      currentIndex:
        s.currentIndex < s.cards.length - 1 ? s.currentIndex + 1 : 0,
      isFlipped: false,
    }));

  const prev = () =>
    setState((s) => ({
      ...s,
      currentIndex:
        s.currentIndex > 0 ? s.currentIndex - 1 : s.cards.length - 1,
      isFlipped: false,
    }));

  const shuffle = () => {
    const shuffled = [...state.cards].sort(() => Math.random() - 0.5);
    setState({ currentIndex: 0, isFlipped: false, cards: shuffled });
  };

  const progress = state.currentIndex + 1 + " / " + state.cards.length;

  return {
    card: state.cards[state.currentIndex],
    isFlipped: state.isFlipped,
    next,
    prev,
    flip,
    shuffle,
    progress,
    currentIndex: state.currentIndex,
    total: state.cards.length,
  };
};
