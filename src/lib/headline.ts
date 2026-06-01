// CJK ideographs, kana, and full-width / CJK punctuation ranges.
const CJK_CHAR = /[぀-ヿ㐀-䶿一-鿿豈-﫿]/;
const CJK_PUNCT = /[　-〿＀-￯、。，；：？！－—「」『』（）]/;

/**
 * Returns the separator to render between two headline segments.
 *
 * Hero headlines are assembled from localized parts (lead + accent + tail).
 * Latin scripts (English, etc.), Devanagari, and Thai need a real space between
 * parts, but inserting an ASCII space between Chinese segments produces an ugly
 * gap — especially around CJK punctuation like "。". This collapses the space
 * for CJK boundaries while preserving it everywhere else.
 */
export function headlineGap(before?: string, after?: string): string {
  if (!before || !after) return "";
  const a = before[before.length - 1];
  const b = after[0];
  const aCJK = CJK_CHAR.test(a) || CJK_PUNCT.test(a);
  const bCJK = CJK_CHAR.test(b) || CJK_PUNCT.test(b);
  // Only collapse the space when BOTH sides sit in a CJK context — CJK text
  // sets its own spacing. When one side is Latin/digit, keep the ASCII space,
  // so e.g. an em-dash in an English headline reads "10 markets — without"
  // rather than the cramped "10 markets— without".
  if (aCJK && bCJK) return "";
  return " ";
}

/**
 * Whether a language's script needs a looser headline line-height.
 *
 * Hero headlines use very tight line-height (e.g. `leading-[1.05]`) which looks
 * balanced for Latin text — ascenders/descenders and x-height leave visual gaps
 * between lines. Scripts that stack marks vertically need more room:
 *   - CJK (zh/ja/ko): glyphs fill the full em box, so tight leading reads cramped.
 *   - Thai (th): above/below vowel signs and tone marks collide at tight leading.
 *   - Devanagari/Hindi (hi): upper matras and conjunct stacks need headroom.
 * Callers swap in a looser leading for these.
 */
export function needsLooseLeading(lang?: string): boolean {
  return !!lang && /^(zh|ja|ko|th|hi)/i.test(lang);
}
