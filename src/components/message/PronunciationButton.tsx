"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface PronunciationButtonProps {
  pronunciation: string;
  className?: string;
}

const PronunciationButton = ({
  pronunciation,
  className = "",
}: PronunciationButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      // 기존 음성 정지
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = 0.8;
      utterance.pitch = 1;

      // 일본어 voice를 명시적으로 선택
      const voices = window.speechSynthesis.getVoices();
      let jaVoice = voices.find(
        (v) =>
          (v.lang === "ja-JP" || v.lang.startsWith("ja")) &&
          (v.name.toLowerCase().includes("female") ||
            v.name.toLowerCase().includes("woman") ||
            v.name.includes("女"))
      );
      if (!jaVoice) {
        // fallback: 일본어 음성 중 첫 번째
        jaVoice = voices.find(
          (v) => v.lang === "ja-JP" || v.lang.startsWith("ja")
        );
      }
      if (jaVoice) {
        utterance.voice = jaVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      speakText(pronunciation);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center p-1 rounded-full transition-all duration-200 hover:bg-gray-100 ${
        isPlaying ? "text-blue-600" : "text-gray-500"
      } ${className}`}
      title="발음 듣기"
    >
      {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
    </button>
  );
};

export default PronunciationButton;
