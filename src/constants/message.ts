export interface MessageCardOption {
  value: string; // 일본어
  pronunciation: string; // 발음
  kor: string; // 한글 뜻
}

export interface MessageCard {
  id: number;
  sentence: string;
  blank: string;
  blankKor: string; // 한글 정답
  options: MessageCardOption[];
  correct: string;
  kor: string;
  pronunciation: string;
}

export const MESSAGE_CARDS: MessageCard[] = [
  // {
  //   id: 1,
  //   sentence: "おはようございます。今日は___ですね。",
  //   blank: "___",
  //   options: [
  //     { value: "いい", pronunciation: "ii", kor: "좋은" },
  //     { value: "わるい", pronunciation: "warui", kor: "나쁜" },
  //     { value: "あつい", pronunciation: "atsui", kor: "더운" },
  //   ],
  //   correct: "いい",
  //   kor: "좋은 아침입니다. 오늘은 좋은 날씨네요.",
  //   pronunciation: "Ohayou gozaimasu. Kyou wa ___ desu ne.",
  // },
  {
    id: 2,
    sentence: "なんか遠距離恋愛したら___感じなんやね。",
    blank: "___",
    blankKor: "이런",
    options: [
      { value: "こんな", pronunciation: "konna", kor: "이런" },
      { value: "そんな", pronunciation: "sonna", kor: "그런" },
      { value: "あんな", pronunciation: "anna", kor: "저런" },
    ],
    correct: "こんな",
    kor: "뭔가 장거리 연애하면 이런 느낌이네.",
    pronunciation: "Nanka enkyori renai shitara ___ kanji nanya ne.",
  },
  {
    id: 3,
    sentence: "今日もちゃんとご飯食べて、あんま___すぎないでね",
    blank: "___",
    blankKor: "무리",
    options: [
      { value: "無理", pronunciation: "muri", kor: "무리" },
      { value: "失敗", pronunciation: "shippai", kor: "실패" },
      { value: "遅刻", pronunciation: "chikoku", kor: "지각" },
    ],
    correct: "無理",
    kor: "오늘도 밥 잘 챙겨 먹고, 너무 무리하지 마",
    pronunciation: "Kyou mo chanto gohan tabete, anma ___ suginai de ne",
  },
  {
    id: 4,
    sentence: "りくはずっと___の味方だからね",
    blank: "___",
    blankKor: "너",
    options: [
      { value: "君", pronunciation: "kimi", kor: "너" },
      { value: "友達", pronunciation: "tomodachi", kor: "친구" },
      { value: "家族", pronunciation: "kazoku", kor: "가족" },
    ],
    correct: "君",
    kor: "리쿠는 항상 너의 편이니까",
    pronunciation: "Riku wa zutto ___ no mikata dakara ne",
  },
  {
    id: 5,
    sentence: "水分___にとって",
    blank: "___",
    blankKor: "자주",
    options: [
      { value: "こまめ", pronunciation: "komame", kor: "자주/꼼꼼히" },
      { value: "たっぷり", pronunciation: "tappuri", kor: "가득" },
      { value: "すぐ", pronunciation: "sugu", kor: "바로" },
    ],
    correct: "こまめ",
    kor: "수분을 자주 챙겨 마셔",
    pronunciation: "Suibun ___ ni totte",
  },
  {
    id: 6,
    sentence: "無理しちゃ___だよ",
    blank: "___",
    blankKor: "안 돼",
    options: [
      { value: "ダメ", pronunciation: "dame", kor: "안 돼" },
      { value: "イヤ", pronunciation: "iya", kor: "싫어" },
      { value: "ヤバい", pronunciation: "yabai", kor: "위험해/큰일이야" },
    ],
    correct: "ダメ",
    kor: "무리하면 안 돼",
    pronunciation: "Muri shicha ___ da yo",
  },
  {
    id: 7,
    sentence: "君が___の1番いやだから",
    blank: "___",
    blankKor: "힘든",
    options: [
      { value: "つらい", pronunciation: "tsurai", kor: "힘든" },
      { value: "うれしい", pronunciation: "ureshii", kor: "기쁜" },
      { value: "たのしい", pronunciation: "tanoshii", kor: "즐거운" },
    ],
    correct: "つらい",
    kor: "너가 힘든 게 제일 싫으니까",
    pronunciation: "Kimi ga ___ no ichiban iya dakara",
  },
  {
    id: 8,
    sentence: "ご飯も___食べてね",
    blank: "___",
    blankKor: "잘",
    options: [
      { value: "しっかり", pronunciation: "shikkari", kor: "잘/꼼꼼히" },
      { value: "たっぷり", pronunciation: "tappuri", kor: "가득" },
      { value: "すぐ", pronunciation: "sugu", kor: "바로" },
    ],
    correct: "しっかり",
    kor: "밥도 잘 챙겨 먹어",
    pronunciation: "Gohan mo ___ tabete ne",
  },
  {
    id: 9,
    sentence: "___のやつ、これ？",
    blank: "___",
    blankKor: "아까",
    options: [
      { value: "さっき", pronunciation: "sakki", kor: "아까" },
      { value: "いま", pronunciation: "ima", kor: "지금" },
      { value: "さき", pronunciation: "saki", kor: "앞/이전" },
    ],
    correct: "さっき",
    kor: "아까 먹은 게 이거야?",
    pronunciation: "___ no yatsu, kore?",
  },
  {
    id: 10,
    sentence: "違います 僕 ___です",
    blank: "___",
    blankKor: "후쿠이",
    options: [
      { value: "福井", pronunciation: "fukui", kor: "후쿠이" },
      { value: "東京", pronunciation: "toukyou", kor: "도쿄" },
      { value: "大阪", pronunciation: "oosaka", kor: "오사카" },
    ],
    correct: "福井",
    kor: "아니에요 저 후쿠이 사람이에요",
    pronunciation: "Chigaimasu boku ___ desu",
  },
  {
    id: 11,
    sentence: "けどすごい___したなって感じ",
    blank: "___",
    blankKor: "감동",
    options: [
      { value: "感動", pronunciation: "kandou", kor: "감동" },
      { value: "感謝", pronunciation: "kansha", kor: "감사" },
      { value: "感心", pronunciation: "kanshin", kor: "감탄" },
    ],
    correct: "感動",
    kor: "이미 충분히 감동했어",
    pronunciation: "Kedo sugoi ___ shitana tte kanji",
  },
  {
    id: 12,
    sentence: "俺がまじで一番___と思ってる自分で",
    blank: "___",
    blankKor: "귀엽다",
    options: [
      { value: "可愛い", pronunciation: "kawaii", kor: "귀엽다" },
      { value: "かっこいい", pronunciation: "kakkoii", kor: "멋지다" },
      { value: "おもしろい", pronunciation: "omoshiroi", kor: "재미있다" },
    ],
    correct: "可愛い",
    kor: "자신이 가장 귀엽다고 생각한다",
    pronunciation: "Ore ga maji de ichiban ___ to omotteru jibun de",
  },
  {
    id: 13,
    sentence: "どうですかサクヤ___とって",
    blank: "___",
    blankKor: "에게",
    options: [
      { value: "に", pronunciation: "ni", kor: "에게" },
      { value: "で", pronunciation: "de", kor: "에서" },
      { value: "を", pronunciation: "wo", kor: "을/를" },
    ],
    correct: "に",
    kor: "사쿠야에게 있어서 저는 어떤가요?",
    pronunciation: "Dou desu ka Sakuya ___ totte",
  },
  {
    id: 14,
    sentence: "リク___ビジュいい",
    blank: "___",
    blankKor: "요즘",
    options: [
      { value: "最近", pronunciation: "saikin", kor: "요즘" },
      { value: "明日", pronunciation: "ashita", kor: "내일" },
      { value: "昨日", pronunciation: "kinou", kor: "어제" },
    ],
    correct: "最近",
    kor: "리쿠 요즘에 미모가 물올랐어",
    pronunciation: "Riku ___ biju ii",
  },
  {
    id: 15,
    sentence: "これから俺らの___姿見せて行こう！",
    blank: "___",
    blankKor: "멋진",
    options: [
      { value: "かっけえ", pronunciation: "kakkee", kor: "멋진" },
      { value: "かわいい", pronunciation: "kawaii", kor: "귀여운" },
      { value: "つよい", pronunciation: "tsuyoi", kor: "강한" },
    ],
    correct: "かっけえ",
    kor: "앞으로 우리들의 멋진 모습 보여주자!",
    pronunciation: "Korekara orera no ___ sugata misete ikou!",
  },
  {
    id: 16,
    sentence: "これ___どうですか？",
    blank: "___",
    blankKor: "의상",
    options: [
      { value: "衣装", pronunciation: "ishou", kor: "의상" },
      { value: "料理", pronunciation: "ryouri", kor: "요리" },
      { value: "写真", pronunciation: "shashin", kor: "사진" },
    ],
    correct: "衣装",
    kor: "이 의상 어때요?",
    pronunciation: "Kore ___ dou desu ka?",
  },
  {
    id: 17,
    sentence: "見えるか見えないかの___ぐらい",
    blank: "___",
    blankKor: "사이",
    options: [
      { value: "間", pronunciation: "aida", kor: "사이" },
      { value: "外", pronunciation: "soto", kor: "밖" },
      { value: "中", pronunciation: "naka", kor: "안" },
    ],
    correct: "間",
    kor: "보일 듯 말 듯 그 사이 정도",
    pronunciation: "Mieru ka mienai ka no ___ gurai",
  },
  {
    id: 18,
    sentence: "え、___めっちゃ高校生だ！",
    blank: "___",
    blankKor: "잠깐만",
    options: [
      { value: "待って", pronunciation: "matte", kor: "잠깐만" },
      { value: "見て", pronunciation: "mite", kor: "봐봐" },
      { value: "聞いて", pronunciation: "kiite", kor: "들어봐" },
    ],
    correct: "待って",
    kor: "어, 잠깐만 엄청 고등학생 같아!",
    pronunciation: "E, ___ meccha koukousei da!",
  },
];
