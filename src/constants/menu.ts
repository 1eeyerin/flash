type Menus = {
  type: string;
  kor: string;
  url: string;
};

export const MENUS: Menus[] = [
  { type: "hiragana", kor: "히라가나", url: "/play/hiragana" },
  { type: "katakana", kor: "카타카나", url: "/play/katakana" },
  { type: "confusing", kor: "챌린지", url: "/play/confusing" },
  { type: "message", kor: "회화 연습", url: "/message/riku" },
];

export type { Menus };
