"use client";

import { useEffect, useState } from "react";
import { MessageCard } from "@/constants/message";

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
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    //if (selectedAnswer !== null) return; // 이미 답을 선택했으면 무시

    setSelectedAnswer(option);
    const correct = option === card.correct;
    setIsCorrect(correct);

    // if (correct) {
    //   setTimeout(() => {
    //     setShowAnswer(true);
    //     onAnswerSelected();
    //   }, 1000);
    // } else {
    //   setTimeout(() => {
    //     setShowAnswer(true);
    //     onAnswerSelected();
    //   }, 2000);
    // }
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
    setSelectedAnswer(null);
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
          <div className="text-xs text-gray-400 text-center italic">
            {card.pronunciation}
          </div>
        </div>

        {/* 선택지 */}
        <div className="space-y-3">
          {card.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={!!isCorrect}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedAnswer === null
                  ? "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  : selectedAnswer === option
                  ? option === card.correct
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-red-500 bg-red-50 text-red-700"
                  : isCorrect && option === card.correct
                  ? "border-green-500 bg-green-50 text-green-700"
                  : isCorrect
                  ? "border-gray-200 bg-gray-50 text-gray-500"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <div className="flex flex-col">
                <span className="font-medium text-lg">{option}</span>
                <span className="text-sm text-gray-500 mt-1 italic">
                  {card.optionsPronunciation[index]}
                </span>
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
