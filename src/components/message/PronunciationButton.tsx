"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { getPollyTTSUrl } from "@/lib/pollyTTS";

interface PronunciationButtonProps {
  pronunciation: string;
  className?: string;
}

const PronunciationButton = ({
  pronunciation,
  className = "",
}: PronunciationButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const speakText = async (text: string) => {
    setIsPlaying(true);
    const url = await getPollyTTSUrl(text, "ja-JP");
    if (!url) {
      setIsPlaying(false);
      return;
    }
    const audioEl = new Audio(url);
    setAudio(audioEl);
    audioEl.onended = () => setIsPlaying(false);
    audioEl.onerror = () => setIsPlaying(false);
    audioEl.play();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    if (isPlaying && audio) {
      audio.pause();
      audio.currentTime = 0;
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
