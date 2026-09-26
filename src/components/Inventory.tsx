import { useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import PixelIcon from './icons/PixelIcon';
import type { InventoryItem, Pocket } from '@/lib/gameData';
import { tileLabel } from '@/lib/label';
import { useLcdLogos } from '@/lib/lcd';

interface Props {
  items: InventoryItem[];
  pockets: Pocket[];
  labels: {
    hint: string;
    mainStack: string;
    mainHint: string;
    inventory: string;
    all: string;
    equipped: string;
    usedIn: string;
    roleOne: string;
    roleMany: string;
    since: string;
    projects: string;
    inProjects: string;
    inStack: string;
  };
}

const MAX_PIPS = 5;

const frame = (color: string) =>
  `0 -3px 0 0 ${color}, 0 3px 0 0 ${color}, -3px 0 0 0 ${color}, 3px 0 0 0 ${color}`;

/** Filled squares for the number of CV roles that used the item. */
function Pips({ count, className = '' }: { count: number; className?: string }) {
  return (
    <span className={`flex gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: MAX_PIPS }, (_, index) => (
        <span key={index} className={`size-[6px] bg-current ${index < count ? '' : 'opacity-20'}`} />
      ))}
    </span>
  );
}

/** A tool's logo rendered on the LCD, or a pixel icon for practices. */
function ItemArt({ item, art, size }: { item: InventoryItem; art: Record<string, string>; size: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'size-12 sm:size-14' : 'size-10 sm:size-12';
  if (!item.logo) return <PixelIcon name={item.icon ?? 'spark'} scale={size === 'lg' ? 6 : 5} className="text-lcd-1" />;
  const lcd = art[item.logo];
  return (
    <img
      src={lcd ?? item.logo}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      decoding="async"
      className={`${box} object-contain [image-rendering:pixelated] ${lcd ? '' : 'opacity-50 grayscale'}`}
    />
  );
}

/** The tech stack as a game: an equipped hotbar of key tools plus a full inventory in pockets. */
export default function Inventory({ items, pockets, labels }: Props) {
  // Most experience first: more CV roles, then the earliest first use; tools with no CV role go last
  // (project evidence before stack-only).
  const featured = useMemo(() => {
    const since = (item: InventoryItem) => (item.uses.length ? Math.min(...item.uses.map((use) => use.year)) : Infinity);
    return items
      .filter((item) => item.featured)
      .sort(
        (a, b) =>
          b.uses.length - a.uses.length || since(a) - since(b) || b.projects.length - a.projects.length,
      );
  }, [items]);
  const [selectedName, setSelectedName] = useState(
    () => items.reduce((best, item) => (item.uses.length > best.uses.length ? item : best), items[0]).name,
  );
  const [pocket, setPocket] = useState<string>('all');
  const hotbar = useRef<HTMLUListElement>(null);
  const grid = useRef<HTMLUListElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const art = useLcdLogos(items.map((item) => item.logo));

  const item = items.find((entry) => entry.name === selectedName) ?? items[0];
  const visible = pocket === 'all' ? items : items.filter((entry) => entry.pocket === pocket);
  const since = item.uses.length ? Math.min(...item.uses.map((use) => use.year)) : null;

  const pick = (name: string) => {
    setSelectedName(name);
    // On a single column the readout sits under the grid: bring it into view after a tap.
    if (window.matchMedia('(max-width: 1023px)').matches) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      requestAnimationFrame(() => panel.current?.scrollIntoView({ block: 'nearest', behavior }));
    }
  };

  const move = (event: KeyboardEvent<HTMLButtonElement>, list: InventoryItem[], index: number, container: HTMLElement | null) => {
    const cols = container ? getComputedStyle(container).gridTemplateColumns.split(' ').length : 1;
    const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = Math.min(list.length - 1, Math.max(0, index + step));
    setSelectedName(list[next].name);
    container?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus();
  };

  // Switching pockets keeps the readout inside the pocket: fall back to its most-used item.
  const choosePocket = (id: string) => {
    setPocket(id);
    const inPocket = id === 'all' ? items : items.filter((entry) => entry.pocket === id);
    if (!inPocket.some((entry) => entry.name === selectedName) && inPocket.length) {
      setSelectedName(inPocket.reduce((best, entry) => (entry.uses.length > best.uses.length ? entry : best), inPocket[0]).name);
    }
  };

  // Roving tabindex: the selected option, or the first one when the selection lives elsewhere.
  const tabStop = (list: InventoryItem[], index: number) =>
    list[index].name === item.name || (!list.some((entry) => entry.name === item.name) && index === 0) ? 0 : -1;

  return (
    <div className="space-y-16">
      {/* Main stack: the equipped hotbar */}
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="text-lcd-3 text-2xl font-bold md:text-3xl">{labels.mainStack}</h3>
          <p className="text-navy-ink text-[17px]">{labels.mainHint}</p>
        </div>
        <ul
          ref={hotbar}
          className="bg-navy-2 mt-5 grid grid-cols-3 gap-3 p-3 sm:grid-cols-5 lg:grid-cols-10"
          role="listbox"
          aria-label={labels.mainStack}
        >
          {featured.map((entry, index) => {
            const active = entry.name === item.name;
            return (
              <li key={entry.name} role="presentation" className="enter-slot" style={{ '--i': index } as CSSProperties}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  tabIndex={tabStop(featured, index)}
                  onClick={() => pick(entry.name)}
                  onKeyDown={(event) => move(event, featured, index, hotbar.current)}
                  className={`text-lcd-0 relative flex h-full w-full flex-col items-center gap-2 px-1 pt-3 pb-2.5 transition-transform duration-150 ease-[steps(2)] ${
                    active ? 'bg-lcd-3 -translate-y-1' : 'bg-lcd-3 hover:bg-[#dbe8b8]'
                  }`}
                  style={{ boxShadow: active ? frame('var(--color-magenta)') : 'none' }}
                >
                  <ItemArt item={entry} art={art} size="lg" />
                  <span className="hud line-clamp-2 max-w-full text-center text-[9px] leading-tight tracking-[0.02em] sm:text-[10px] sm:tracking-[0.06em]">{entry.name}</span>
                  {entry.uses.length > 0 ? (
                    <Pips count={entry.uses.length} className="text-lcd-0" />
                  ) : (
                    <span className="hud text-lcd-1 text-[11px] leading-tight">
                      {entry.projects.length ? labels.inProjects : labels.inStack}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Full inventory in pockets, with the shared readout */}
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        <div>
          <h3 className="text-lcd-3 text-2xl font-bold md:text-3xl">{labels.inventory}</h3>
          <div className="mt-5 flex flex-wrap gap-2" role="toolbar" aria-label={labels.inventory}>
            {[{ id: 'all', label: labels.all }, ...pockets].map((entry) => {
              const active = pocket === entry.id;
              return (
                <button
                  key={entry.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => choosePocket(entry.id)}
                  className={`hud flex items-center gap-1.5 px-2.5 py-2 text-[11px] ${
                    active ? 'bg-lcd-3 text-lcd-0' : 'bg-navy-2 text-lcd-3 hover:bg-lcd-1'
                  }`}
                >
                  {active && <PixelIcon name="cursor" scale={1} />}
                  {entry.label}
                </button>
              );
            })}
          </div>
          <p className="hud text-navy-ink mt-5 mb-4 flex items-center gap-2 text-[12px]">
            <PixelIcon name="cursor" scale={2} className="animate-blink text-lcd-2" />
            {labels.hint}
          </p>
          <ul ref={grid} className="grid grid-cols-4 gap-2 sm:gap-3 md:grid-cols-5" role="listbox" aria-label={labels.inventory}>
            {visible.map((entry, index) => {
              const active = entry.name === item.name;
              return (
                <li key={entry.name} role="presentation" className="enter-slot" style={{ '--i': index } as CSSProperties}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    tabIndex={tabStop(visible, index)}
                    onClick={() => pick(entry.name)}
                    onKeyDown={(event) => move(event, visible, index, grid.current)}
                    className="bg-lcd-3 text-lcd-0 relative flex aspect-square w-full flex-col items-center justify-center gap-1.5 p-1.5 hover:bg-[#dbe8b8] sm:gap-2 sm:p-2"
                    style={{ boxShadow: active ? frame('var(--color-magenta)') : 'none' }}
                  >
                    <ItemArt item={entry} art={art} size="md" />
                    <span className="hud line-clamp-2 max-w-full text-center text-[9px] leading-tight tracking-[0.02em] sm:text-[10px] sm:tracking-[0.06em] hyphens-auto">
                      {tileLabel(entry.name)}
                    </span>
                    {entry.featured && (
                      <PixelIcon name="star" scale={1} className="text-magenta absolute top-1.5 right-1.5" />
                    )}
                    {active && (
                      <PixelIcon name="cursor" scale={2} className="text-magenta absolute top-1/2 -left-3.5 -translate-y-1/2" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          ref={panel}
          className="bg-lcd-0 text-lcd-3 pixel-box min-h-[16rem] scroll-mb-6 self-start p-6 md:p-7 lg:sticky lg:top-24"
          style={{ '--frame': 'var(--color-lcd-3)' } as CSSProperties}
          aria-live="polite"
        >
          <div className="flex items-start gap-5">
            <span className="bg-lcd-3 grid size-20 shrink-0 place-items-center">
              <ItemArt item={item} art={art} size="lg" />
            </span>
            <div className="min-w-0">
              <p className="font-pixel text-3xl leading-none font-bold break-words">{item.name}</p>
              <p className="mt-3 flex flex-wrap items-center gap-2">
                <span className="hud text-lcd-2 text-[11px]">{item.pocketLabel}</span>
                {item.featured && (
                  <span className="hud bg-magenta text-lcd-3 flex items-center gap-1 px-1.5 py-0.5 text-[11px]">
                    <PixelIcon name="star" scale={1} />
                    {labels.equipped}
                  </span>
                )}
              </p>
              {item.uses.length > 0 && <Pips count={item.uses.length} className="text-lcd-2 mt-3" />}
            </div>
          </div>

          {item.uses.length > 0 ? (
            <>
              <p className="text-lcd-2 mt-6 text-lg">
                {labels.usedIn}{' '}
                <span className="text-lcd-3 font-bold tabular-nums">
                  {item.uses.length} {item.uses.length === 1 ? labels.roleOne : labels.roleMany}
                </span>{' '}
                · {labels.since} <span className="text-lcd-3 font-bold tabular-nums">{since}</span>
              </p>
              <ol className="mt-4 space-y-2">
                {item.uses.map((use) => (
                  <li key={`${use.company}-${use.title}`} className="flex items-baseline gap-3 text-[18px]">
                    <span className="hud text-lcd-2 w-10 shrink-0 text-[11px] tabular-nums">{use.year}</span>
                    <span>
                      {use.title} <span className="text-lcd-2">· {use.company}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <p className="mt-6 text-lg leading-relaxed">{item.description}</p>
          )}

          {item.projects.length > 0 && (
            <p className="border-lcd-1 mt-5 border-t-2 border-dashed pt-4 text-[18px]">
              <span className="hud text-lcd-2 mr-2 text-[11px]">{labels.projects}</span>
              {item.projects.join(', ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
