export interface MessageCard {
  id: number;
  sentence: string;
  blank: string;
  options: string[];
  optionsPronunciation: string[];
  correct: string;
  kor: string;
  pronunciation: string;
}

export const MESSAGE_CARDS: MessageCard[] = [
  {
    id: 1,
    sentence: "おはようございます。今日は___ですね。",
    blank: "___",
    options: ["いい", "わるい", "あつい"],
    optionsPronunciation: ["ii", "warui", "atsui"],
    correct: "いい",
    kor: "좋은 아침입니다. 오늘은 좋은 날씨네요.",
    pronunciation: "Ohayou gozaimasu. Kyou wa ___ desu ne.",
  },
  {
    id: 2,
    sentence: "___に行きたいですか？",
    blank: "___",
    options: ["どこ", "いつ", "だれ"],
    optionsPronunciation: ["doko", "itsu", "dare"],
    correct: "どこ",
    kor: "어디에 가고 싶으신가요?",
    pronunciation: "___ ni ikitai desu ka?",
  },
  {
    id: 3,
    sentence: "私は___が好きです。",
    blank: "___",
    options: ["りんご", "みかん", "バナナ"],
    optionsPronunciation: ["ringo", "mikan", "banana"],
    correct: "りんご",
    kor: "저는 사과를 좋아합니다.",
    pronunciation: "Watashi wa ___ ga suki desu.",
  },
  {
    id: 4,
    sentence: "___は何時ですか？",
    blank: "___",
    options: ["今", "昨日", "明日"],
    optionsPronunciation: ["ima", "kinou", "ashita"],
    correct: "今",
    kor: "지금 몇 시인가요?",
    pronunciation: "___ wa nanji desu ka?",
  },
  {
    id: 5,
    sentence: "___で日本語を勉強しています。",
    blank: "___",
    options: ["家", "学校", "図書館"],
    optionsPronunciation: ["ie", "gakkou", "toshokan"],
    correct: "家",
    kor: "집에서 일본어를 공부하고 있습니다.",
    pronunciation: "___ de nihongo wo benkyou shiteimasu.",
  },
];
