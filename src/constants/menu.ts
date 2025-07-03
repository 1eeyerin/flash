type Menus = {
  type: string;
  kor: string;
  url: string;
};

export const MENUS: Menus[] = [
  { type: "hiragana", kor: "히라가나", url: "/play/hiragana" },
  { type: "katakana", kor: "카타카나", url: "/play/katakana" },
];

export type { Menus };
