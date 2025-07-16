export interface MessageCardOption {
  value: string; // 일본어
  pronunciation: string; // 발음
  kor: string; // 한글 뜻
}

export interface MessageCard {
  id: number;
  sentence: string;
  blank: string;
  options: MessageCardOption[];
  correct: string;
  kor: string;
  pronunciation: string;
}

export const MESSAGE_CARDS: MessageCard[] = [
  {
    id: 1,
    sentence: "おはようございます。今日は___ですね。",
    blank: "___",
    options: [
      { value: "いい", pronunciation: "ii", kor: "좋은" },
      { value: "わるい", pronunciation: "warui", kor: "나쁜" },
      { value: "あつい", pronunciation: "atsui", kor: "더운" },
    ],
    correct: "いい",
    kor: "좋은 아침입니다. 오늘은 좋은 날씨네요.",
    pronunciation: "Ohayou gozaimasu. Kyou wa ___ desu ne.",
  },
  {
    id: 2,
    sentence: "___に行きたいですか？",
    blank: "___",
    options: [
      { value: "どこ", pronunciation: "doko", kor: "어디" },
      { value: "いつ", pronunciation: "itsu", kor: "언제" },
      { value: "だれ", pronunciation: "dare", kor: "누구" },
    ],
    correct: "どこ",
    kor: "어디에 가고 싶으신가요?",
    pronunciation: "___ ni ikitai desu ka?",
  },
  {
    id: 3,
    sentence: "私は___が好きです。",
    blank: "___",
    options: [
      { value: "りんご", pronunciation: "ringo", kor: "사과" },
      { value: "みかん", pronunciation: "mikan", kor: "무화과" },
      { value: "バナナ", pronunciation: "banana", kor: "바나나" },
    ],
    correct: "りんご",
    kor: "저는 사과를 좋아합니다.",
    pronunciation: "Watashi wa ___ ga suki desu.",
  },
  {
    id: 4,
    sentence: "___は何時ですか？",
    blank: "___",
    options: [
      { value: "今", pronunciation: "ima", kor: "지금" },
      { value: "昨日", pronunciation: "kinou", kor: "어제" },
      { value: "明日", pronunciation: "ashita", kor: "내일" },
    ],
    correct: "今",
    kor: "지금 몇 시인가요?",
    pronunciation: "___ wa nanji desu ka?",
  },
  {
    id: 5,
    sentence: "___で日本語を勉強しています。",
    blank: "___",
    options: [
      { value: "家", pronunciation: "ie", kor: "집" },
      { value: "学校", pronunciation: "gakkou", kor: "학교" },
      { value: "図書館", pronunciation: "toshokan", kor: "도서관" },
    ],
    correct: "家",
    kor: "집에서 일본어를 공부하고 있습니다.",
    pronunciation: "___ de nihongo wo benkyou shiteimasu.",
  },
];
