"use client";

import { useState } from "react";
import { HIRAGANA_CARDS, HiraganaCard } from "../constants/hiragana";

export type FlashCardState = {
  currentIndex: number;
  cards: HiraganaCard[];
};

const INITIAL_STATE: FlashCardState = {
  currentIndex: 0,
  cards: HIRAGANA_CARDS,
};

export const useFlashCard = () => {
  const [state, setState] = useState<FlashCardState>(INITIAL_STATE);

  const next = () => {
    setState((s) => ({
      ...s,
      currentIndex:
        s.currentIndex < s.cards.length - 1 ? s.currentIndex + 1 : 0,
    }));
  };

  const prev = () => {
    setState((s) => ({
      ...s,
      currentIndex:
        s.currentIndex > 0 ? s.currentIndex - 1 : s.cards.length - 1,
    }));
  };

  const shuffle = () => {
    const shuffled = [...state.cards].sort(() => Math.random() - 0.5);
    setState({ currentIndex: 0, cards: shuffled });
  };

  const progress = state.currentIndex + 1 + " / " + state.cards.length;

  return {
    card: state.cards[state.currentIndex],
    next,
    prev,
    shuffle,
    progress,
    currentIndex: state.currentIndex,
    total: state.cards.length,
  };
};
