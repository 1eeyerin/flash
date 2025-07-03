import { Card } from "./card";

export const CONFUSING: Card[] = [
  // 지계(ji계)
  { char: "じ", romaji: "ji", kor: "지", group: "ji계" },
  { char: "ぢ", romaji: "ji", kor: "지", group: "ji계" },
  { char: "ジ", romaji: "ji", kor: "지", group: "ji계" },
  // 즈계(zu계)
  { char: "ず", romaji: "zu", kor: "즈", group: "zu계" },
  { char: "づ", romaji: "zu", kor: "즈", group: "zu계" },
  { char: "ズ", romaji: "zu", kor: "즈", group: "zu계" },
  // 바/파계(ba/pa계)
  { char: "ば", romaji: "ba", kor: "바", group: "ba/pa계" },
  { char: "ぱ", romaji: "pa", kor: "파", group: "ba/pa계" },
  { char: "バ", romaji: "ba", kor: "바", group: "ba/pa계" },
  { char: "パ", romaji: "pa", kor: "파", group: "ba/pa계" },
  // 비/피계(bi/pi계)
  { char: "び", romaji: "bi", kor: "비", group: "bi/pi계" },
  { char: "ぴ", romaji: "pi", kor: "피", group: "bi/pi계" },
  { char: "ビ", romaji: "bi", kor: "비", group: "bi/pi계" },
  { char: "ピ", romaji: "pi", kor: "피", group: "bi/pi계" },
  // 부/푸계(bu/pu계)
  { char: "ぶ", romaji: "bu", kor: "부", group: "bu/pu계" },
  { char: "ぷ", romaji: "pu", kor: "푸", group: "bu/pu계" },
  { char: "ブ", romaji: "bu", kor: "부", group: "bu/pu계" },
  { char: "プ", romaji: "pu", kor: "푸", group: "bu/pu계" },
  // 베/페계(be/pe계)
  { char: "べ", romaji: "be", kor: "베", group: "be/pe계" },
  { char: "ぺ", romaji: "pe", kor: "페", group: "be/pe계" },
  { char: "ベ", romaji: "be", kor: "베", group: "be/pe계" },
  { char: "ペ", romaji: "pe", kor: "페", group: "be/pe계" },
  // 보/포계(bo/po계)
  { char: "ぼ", romaji: "bo", kor: "보", group: "bo/po계" },
  { char: "ぽ", romaji: "po", kor: "포", group: "bo/po계" },
  { char: "ボ", romaji: "bo", kor: "보", group: "bo/po계" },
  { char: "ポ", romaji: "po", kor: "포", group: "bo/po계" },
  // 가기구게고계(ga계)
  { char: "ガ", romaji: "ga", kor: "가", group: "ga계" },
  { char: "ギ", romaji: "gi", kor: "기", group: "ga계" },
  { char: "グ", romaji: "gu", kor: "구", group: "ga계" },
  { char: "ゲ", romaji: "ge", kor: "게", group: "ga계" },
  { char: "ゴ", romaji: "go", kor: "고", group: "ga계" },
  // 자지즈제조계(za계)
  { char: "ぜ", romaji: "ze", kor: "제", group: "za계" },
  { char: "ザ", romaji: "za", kor: "자", group: "za계" },
  { char: "ゼ", romaji: "ze", kor: "제", group: "za계" },
  { char: "ゾ", romaji: "zo", kor: "조", group: "za계" },
  // 다디두데도계(da계)
  { char: "だ", romaji: "da", kor: "다", group: "da계" },
  { char: "で", romaji: "de", kor: "데", group: "da계" },
  { char: "ダ", romaji: "da", kor: "다", group: "da계" },
  { char: "デ", romaji: "de", kor: "데", group: "da계" },
  { char: "ド", romaji: "do", kor: "도", group: "da계" },
  // 요음(youon) - 대표 3~4개씩
  { char: "しょ", romaji: "sho", kor: "쇼", group: "ju/ja/sho계" },
  { char: "じゅ", romaji: "ju", kor: "쥬", group: "ju/ja/sho계" },
  { char: "ちゃ", romaji: "cha", kor: "챠", group: "cha/kya/cho계" },
  { char: "きゃ", romaji: "kya", kor: "캬", group: "cha/kya/cho계" },
  { char: "みゅ", romaji: "myu", kor: "뮤", group: "mya/myu/myo계" },
  { char: "みょ", romaji: "myo", kor: "묘", group: "mya/myu/myo계" },
  { char: "りゃ", romaji: "rya", kor: "랴", group: "rya/ryu/ryo계" },
  { char: "りゅ", romaji: "ryu", kor: "류", group: "rya/ryu/ryo계" },
  { char: "びゃ", romaji: "bya", kor: "뱌", group: "bya/pyu/hyo계" },
  { char: "ぴゅ", romaji: "pyu", kor: "퓨", group: "bya/pyu/hyo계" },
  { char: "ひゃ", romaji: "hya", kor: "햐", group: "bya/pyu/hyo계" },
  { char: "ひゅ", romaji: "hyu", kor: "휴", group: "bya/pyu/hyo계" },
  // 정말 헷갈리는 것들 (무성음/유성음 구분)
  { char: "さ", romaji: "sa", kor: "사", group: "sa/za계" },
  { char: "ざ", romaji: "za", kor: "자", group: "sa/za계" },
  { char: "し", romaji: "shi", kor: "시", group: "shi/ji계" },
  { char: "じ", romaji: "ji", kor: "지", group: "shi/ji계" },
  { char: "す", romaji: "su", kor: "스", group: "su/zu계" },
  { char: "ず", romaji: "zu", kor: "즈", group: "su/zu계" },
];
