/** Soft-hyphenates long single words so pixel tile labels break cleanly ("Micro-frontends"). */
export function tileLabel(name: string): string {
  return name.replace(/\S{11,}/g, (word) => `${word.slice(0, 5)}\u00AD${word.slice(5)}`);
}
