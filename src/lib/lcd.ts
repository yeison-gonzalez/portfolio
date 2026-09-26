import { useEffect, useState } from 'react';

/** The four LCD shades, darkest to lightest. */
const SHADES: [number, number, number][] = [
  [15, 56, 15],
  [48, 98, 48],
  [139, 172, 15],
  [202, 220, 159],
];

const cache = new Map<string, Promise<string | null>>();

/**
 * Renders a logo the way the handheld would: downsampled to a small grid and quantized to the
 * four LCD shades. The lightest shade drops out so the slot's own screen shows through.
 */
export function lcdLogo(src: string, size = 24): Promise<string | null> {
  const key = `${size}:${src}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const job = new Promise<string | null>((resolve) => {
    const image = new Image();
    image.onerror = () => resolve(null);
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) return resolve(null);
      const width = image.naturalWidth || 128;
      const height = image.naturalHeight || 128;
      const ratio = Math.min(size / width, size / height);
      const w = width * ratio;
      const h = height * ratio;
      context.drawImage(image, (size - w) / 2, (size - h) / 2, w, h);
      const pixels = context.getImageData(0, 0, size, size);
      const data = pixels.data;
      for (let i = 0; i < data.length; i += 4) {
        const lum = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
        const shade = lum < 0.3 ? 0 : lum < 0.6 ? 1 : lum < 0.86 ? 2 : 3;
        const lit = data[i + 3] > 60 && shade < 3;
        [data[i], data[i + 1], data[i + 2]] = SHADES[shade];
        data[i + 3] = lit ? 255 : 0;
      }
      context.putImageData(pixels, 0, 0);
      resolve(canvas.toDataURL());
    };
    image.src = src;
  });

  cache.set(key, job);
  return job;
}

/** LCD versions of a set of logos, keyed by their source URL (filled in once rendered). */
export function useLcdLogos(sources: (string | undefined)[]): Record<string, string> {
  const [art, setArt] = useState<Record<string, string>>({});
  const key = sources.join('|');

  useEffect(() => {
    let cancelled = false;
    const unique = [...new Set(sources.filter((src): src is string => Boolean(src)))];
    Promise.all(unique.map(async (src) => [src, await lcdLogo(src)] as const)).then((results) => {
      if (cancelled) return;
      setArt(Object.fromEntries(results.filter((entry): entry is readonly [string, string] => entry[1] !== null)));
    });
    return () => {
      cancelled = true;
    };
  }, [key]);

  return art;
}
