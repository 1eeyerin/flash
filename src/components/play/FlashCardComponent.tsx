"use client";

import { useState } from "react";
import FlashCard from "./FlashCard";
import { Card } from "@/constants/card";

type FlashCardComponent = {
  card: Card;
};

const FlashCardComponent = ({ card }: FlashCardComponent) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);

    setTimeout(() => {
      setIsFlipped(false);
    }, 500);
  };

  return <FlashCard card={card} isFlipped={isFlipped} flip={handleFlip} />;
};

export default FlashCardComponent;
