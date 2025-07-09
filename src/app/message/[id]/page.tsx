"use client";

import { useMessageCard } from "@/hooks/useMessageCard";
import { useParams } from "next/navigation";
import { MESSAGE_CARDS } from "@/constants/message";
import { MENUS } from "@/constants/menu";
import AllDoneCard from "@/components/AllDoneCard";
import MessageCardComponent from "@/components/message/MessageCardComponent";
import MessageButtons from "@/components/message/MessageButtons";

const MessagePage = () => {
  const params = useParams();
  const { id } = params;

  const data = MESSAGE_CARDS;

  const { card, next, progress, total } = useMessageCard(data);
  const category = MENUS.find(({ type }) => id === type);

  const isAllDone = total === 0;

  const handleAnswerSelected = () => {
    // 답변 선택 완료
  };

  const handleNext = () => {
    next();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9fa]">
      <h1 className="text-xl font-bold mb-6 mt-10 text-[#212121] tracking-tight">
        {category?.kor || ""} 회화 연습
      </h1>
      {isAllDone ? (
        <AllDoneCard />
      ) : (
        <>
          <MessageCardComponent
            card={card}
            onAnswerSelected={handleAnswerSelected}
            onNext={handleNext}
            progress={progress}
            total={total}
          />
          <MessageButtons progress={progress} total={total} />
        </>
      )}
      <div className="mt-10 text-[#b0b0b0] text-xs">
        빈칸에 들어갈 단어를 선택해보세요!
      </div>
    </div>
  );
};

export default MessagePage;
