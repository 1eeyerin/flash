"use client";

import { useState } from "react";
import { Card } from "@/constants/card";

export type FlashCardState = {
  currentIndex: number;
  cards: Card[];
};


export const useFlashCard = (data: Card[]) => {
  const [state, setState] = useState<FlashCardState>(() => {
    return {
      currentIndex: Math.floor(Math.random() * data.length),
      cards: data,
    };
  });

  const next = () => {
    setState((s) => {
      const newCards = s.cards.filter((_, index) => index !== s.currentIndex);

      return {
        cards: newCards,
        currentIndex: Math.floor(Math.random() * newCards.length),
      };
    });
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
