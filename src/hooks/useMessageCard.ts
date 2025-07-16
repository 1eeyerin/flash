import { useState, useCallback, useEffect } from "react";
import { MessageCard } from "@/constants/message";

export const useMessageCard = (data: MessageCard[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledData, setShuffledData] = useState<MessageCard[]>([]);

  // 선택지 셔플 함수
  const shuffleOptions = useCallback((card: MessageCard): MessageCard => {
    const { options, optionsPronunciation } = card;

    // 선택지와 발음을 함께 셔플하기 위해 인덱스 배열 생성
    const indices = Array.from({ length: options.length }, (_, i) => i);
    const shuffledIndices = indices.sort(() => Math.random() - 0.5);

    // 셔플된 선택지와 발음 생성
    const shuffledOptions = shuffledIndices.map((i) => options[i]);
    const shuffledOptionsPronunciation = shuffledIndices.map(
      (i) => optionsPronunciation[i]
    );

    return {
      ...card,
      options: shuffledOptions,
      optionsPronunciation: shuffledOptionsPronunciation,
    };
  }, []);

  // 데이터 셔플
  const shuffle = useCallback(() => {
    const shuffled = [...data]
      .sort(() => Math.random() - 0.5) // 카드 순서 셔플
      .map(shuffleOptions); // 각 카드의 선택지 셔플
    setShuffledData(shuffled);
    setCurrentIndex(0);
  }, [data, shuffleOptions]);

  // 다음 카드로 이동
  const next = useCallback(() => {
    if (currentIndex < (shuffledData.length || data.length) - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, shuffledData.length, data.length]);

  // 이전 카드로 이동
  const prev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // 현재 카드
  const card =
    shuffledData.length > 0 ? shuffledData[currentIndex] : data[currentIndex];

  // 진행률
  const progress = currentIndex + 1;
  const total = shuffledData.length || data.length;

  // 초기 셔플
  useEffect(() => {
    if (data.length > 0) {
      shuffle();
    }
  }, [data, shuffle]);

  return {
    card,
    next,
    prev,
    shuffle,
    progress,
    total,
    currentIndex,
  };
};
