"use client";

type MessageButtonsProps = {
  progress: number;
  total: number;
};

const MessageButtons = ({ progress, total }: MessageButtonsProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* 진행률 표시 */}
      <div className="mb-4 text-center">
        <div className="text-sm text-gray-500 mb-2">
          {progress} / {total}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(progress / total) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MessageButtons;
