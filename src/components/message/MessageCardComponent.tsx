"use client";

import { useEffect, useState } from "react";
import type { MessageCard } from "@/constants/message";
import PronunciationButton from "./PronunciationButton";

type MessageCardComponentProps = {
  card: MessageCard;
  onNext: () => void;
  progress: number;
  total: number;
};

const MessageCardComponent = ({
  card,
  onNext,
  progress,
  total,
}: MessageCardComponentProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (idx: number) => {
    setSelectedIdx(idx);
    const correct = card.options[idx].value === card.correct;
    setIsCorrect(correct);
  };

  const renderSentence = () => {
    const parts = card.sentence.split(card.blank);
    return (
      <div className="text-center">
        <span className="text-lg">{parts[0]}</span>
        <span className="text-lg font-bold text-blue-600 mx-2">___</span>
        <span className="text-lg">{parts[1] || ""}</span>
      </div>
    );
  };

  useEffect(() => {
    setSelectedIdx(null);
    setIsCorrect(null);
  }, [card]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        {/* 문장 표시 */}
        <div className="mb-8">
          <div className="text-xl font-medium text-gray-800 mb-4">
            {renderSentence()}
          </div>
          <div className="text-sm text-gray-500 text-center mb-2">
            {card.kor}
          </div>
          <div className="text-xs text-gray-400 text-center italic flex items-center justify-center gap-1">
            {card.pronunciation}
            <PronunciationButton pronunciation={card.sentence} />
          </div>
        </div>

        {/* 선택지 */}
        <div className="space-y-3">
          {card.options.map((option, idx) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(idx)}
              disabled={isCorrect === true}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedIdx === null
                  ? "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  : selectedIdx === idx
                  ? option.value === card.correct
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-red-500 bg-red-50 text-red-700"
                  : isCorrect && option.value === card.correct
                  ? "border-green-500 bg-green-50 text-green-700"
                  : isCorrect
                  ? "border-gray-200 bg-gray-50 text-gray-500"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <div className="flex flex-col">
                <span className="font-medium text-lg">{option.value}</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm text-gray-500 italic">
                    {option.pronunciation}
                  </span>
                  <PronunciationButton pronunciation={option.value} />
                </div>
                {/* 선택 시 한글 뜻 노출 */}
                {selectedIdx === idx && (
                  <div className="mt-2 text-gray-500 font-semibold text-xs">
                    {option.kor}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* 결과 표시 */}
        {isCorrect && (
          <button
            onClick={onNext}
            disabled={progress >= total}
            className="w-full px-4 py-3 mt-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            다음 문제
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageCardComponent;
