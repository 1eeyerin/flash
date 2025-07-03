import { motion } from "framer-motion";
import type { Card } from "../constants/card";
import type { FC } from "react";

export type FlashCardProps = {
  card: Card;
  isFlipped: boolean;
  flip: () => void;
};

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const cardStyle =
  "w-[220px] h-[300px] bg-white rounded-2xl shadow-xl flex items-center justify-center text-6xl font-bold cursor-pointer select-none relative transition-colors duration-200 border border-[#e5e5e5]";
const backStyle =
  "absolute inset-0 flex items-center justify-center text-3xl text-[#888] bg-[#f9f9fa] rounded-2xl";

const FlashCard: FC<FlashCardProps> = ({ card, isFlipped, flip }) => {
  return (
    <div className="perspective-[1200px]">
      <motion.div
        className={cardStyle + " " + (isFlipped ? "bg-[#f9f9fa]" : "bg-white")}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.4, 0.2, 0.2, 1] }}
        onClick={flip}
      >
        {/* 앞면 */}
        <div
          className="flex items-center justify-center w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          {card.char}
        </div>
        {/* 뒷면 */}
        <div
          className={backStyle}
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          {card.romaji}
        </div>
      </motion.div>
    </div>
  );
};

export default FlashCard;
