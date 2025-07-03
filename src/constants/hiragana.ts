type HiraganaCard = {
  char: string;
  romaji: string;
  group: string;
};

export const HIRAGANA_CARDS: HiraganaCard[] = [
  { char: "あ", romaji: "a", group: "a" },
  { char: "い", romaji: "i", group: "a" },
  { char: "う", romaji: "u", group: "a" },
  { char: "え", romaji: "e", group: "a" },
  { char: "お", romaji: "o", group: "a" },
  { char: "か", romaji: "ka", group: "ka" },
  { char: "き", romaji: "ki", group: "ka" },
  { char: "く", romaji: "ku", group: "ka" },
  { char: "け", romaji: "ke", group: "ka" },
  { char: "こ", romaji: "ko", group: "ka" },
  { char: "さ", romaji: "sa", group: "sa" },
  { char: "し", romaji: "shi", group: "sa" },
  { char: "す", romaji: "su", group: "sa" },
  { char: "せ", romaji: "se", group: "sa" },
  { char: "そ", romaji: "so", group: "sa" },
];

export type { HiraganaCard };
