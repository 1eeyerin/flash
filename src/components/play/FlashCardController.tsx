import type { FC } from "react";

export type FlashCardControllerProps = {
  onPrev: () => void;
  onNext: () => void;
  onShuffle: () => void;
  progress: string;
};

const btnStyle =
  "rounded-full px-5 py-2 bg-[#f2f3f6] hover:bg-[#e9e9ee] text-[#222] font-semibold shadow-sm transition-colors border border-[#e5e5e5] active:scale-95";

const FlashCardController: FC<FlashCardControllerProps> = ({
  onPrev,
  onNext,
  onShuffle,
  progress,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="flex gap-3">
        <button className={btnStyle} onClick={onPrev} type="button">
          이전
        </button>
        <button className={btnStyle} onClick={onNext} type="button">
          다음
        </button>
        <button className={btnStyle} onClick={onShuffle} type="button">
          섞기
        </button>
      </div>
      <div className="text-[#888] text-sm mt-1">{progress}</div>
    </div>
  );
};

export default FlashCardController;
