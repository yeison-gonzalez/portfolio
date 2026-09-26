import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import PixelIcon, { type PixelIconName } from './icons/PixelIcon';
import { tileLabel } from '@/lib/label';
import { useLcdLogos } from '@/lib/lcd';

export interface LevelSkill {
  name: string;
  logo?: string;
  /** Pixel glyph for labels without a brand logo. */
  icon: PixelIconName;
  /** Every CV role that used this skill, oldest first. */
  uses: { title: string; company: string; year: number }[];
}

export interface Level {
  id: string;
  /** "1-1", "2-3"… world = company, stage = role, oldest first. */
  code: string;
  world: string;
  company: string;
  title: string;
  period: string;
  duration: string;
  current: boolean;
  metrics: string[];
  highlights: string[];
  skills: LevelSkill[];
}

interface Props {
  levels: Level[];
  labels: {
    hint: string;
    prev: string;
    next: string;
    current: string;
    world: string;
    tabs: { achievements: string; skills: string; details: string };
    company: string;
    period: string;
    duration: string;
    milestones: string;
    achievementsCount: string;
    skillsCount: string;
    skillHint: string;
    usedIn: string;
    roleOne: string;
    roleMany: string;
    since: string;
  };
}

type Tab = 'achievements' | 'skills' | 'details';
const TABS: Tab[] = ['achievements', 'skills', 'details'];
const frame = (color: string, px = 3) =>
  `0 -${px}px 0 0 ${color}, 0 ${px}px 0 0 ${color}, -${px}px 0 0 0 ${color}, ${px}px 0 0 0 ${color}`;

/** The career as a level map: walk the path, open a level's card to read achievements, skills and details. */
export default function CareerMap({ levels, labels }: Props) {
  const [selected, setSelected] = useState(levels.length - 1);
  const [tab, setTab] = useState<Tab>('achievements');
  const [skill, setSkill] = useState<string | null>(levels[levels.length - 1]?.skills[0]?.name ?? null);
  const nodes = useRef<(HTMLButtonElement | null)[]>([]);
  const tabButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const art = useLcdLogos(levels.flatMap((level) => level.skills.map((entry) => entry.logo)));
  const level = levels[selected];
  const progress = levels.length > 1 ? selected / (levels.length - 1) : 1;

  const go = (index: number, focus = false) => {
    const next = Math.min(levels.length - 1, Math.max(0, index));
    setSelected(next);
    setSkill(levels[next].skills[0]?.name ?? null);
    if (focus) nodes.current[next]?.focus();
  };

  const onNodeKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    go(index + step, true);
  };

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + TABS.length) % TABS.length;
    setTab(TABS[next]);
    tabButtons.current[next]?.focus();
  };

  const picked = level.skills.find((entry) => entry.name === skill);

  return (
    <div>
      <p className="hud text-lcd-3 mb-6 flex items-center gap-2 text-[12px]">
        <PixelIcon name="cursor" scale={2} className="animate-blink" />
        {labels.hint}
      </p>

      {/* The map */}
      <div className="bg-lcd-0 pixel-box relative px-5 pt-10 pb-6 sm:px-10 md:pt-14 md:pb-8" style={{ '--frame': 'var(--color-lcd-3)' } as CSSProperties}>
        <div className="relative">
          {/* Path: dotted track with the walked part filled */}
          <div className="absolute top-1/2 right-[6%] left-[6%] h-2 -translate-y-1/2" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{ background: 'repeating-linear-gradient(to right, var(--color-lcd-1) 0 8px, transparent 8px 14px)' }}
            />
            <div
              className="bg-lcd-2 absolute inset-y-0 left-0 transition-[width] duration-500 ease-[steps(8)]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <ol className="relative flex items-center justify-between" role="tablist" aria-label={labels.hint}>
            {levels.map((entry, index) => {
              const active = index === selected;
              const reached = index <= selected;
              const newWorld = index === 0 || levels[index - 1].world !== entry.world;
              return (
                <li key={entry.id} role="presentation" className="enter-node relative flex flex-col items-center" style={{ '--i': index } as CSSProperties}>
                  {newWorld && (
                    <span
                      className={`hud text-lcd-2 absolute -top-11 hidden text-[11px] whitespace-nowrap md:block ${index === 0 ? 'left-0' : ''}`}
                    >
                      {labels.world} {entry.code.split('-')[0]} · {entry.world}
                    </span>
                  )}
                  {active && <PixelIcon name="down" scale={3} className="text-magenta animate-hop absolute -top-6" />}
                  <button
                    ref={(el) => {
                      nodes.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`level-tab-${entry.id}`}
                    aria-controls={`level-panel-${entry.id}`}
                    aria-selected={active}
                    aria-label={`${entry.code} · ${entry.title}`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => go(index)}
                    onKeyDown={(event) => onNodeKey(event, index)}
                    className={`hud relative grid size-12 place-items-center text-[12px] sm:size-14 sm:text-xs ${
                      active ? 'bg-magenta text-lcd-3' : reached ? 'bg-lcd-2 text-lcd-0' : 'bg-lcd-1 text-lcd-3'
                    }`}
                    style={{ boxShadow: frame('var(--color-lcd-3)') }}
                  >
                    {entry.current ? <PixelIcon name="star" scale={3} /> : entry.code}
                  </button>
                  <span
                    className={`hud absolute top-full mt-3 hidden w-28 text-center text-[11px] leading-tight md:block ${
                      active ? 'text-lcd-3' : 'text-lcd-2'
                    }`}
                  >
                    {entry.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="hidden h-14 md:block" aria-hidden="true" />
      </div>

      {/* Level cards: all rendered for crawlers, only the selected one shown */}
      <div className="mt-10">
        {levels.map((entry) => (
          <article
            key={entry.id}
            id={`level-panel-${entry.id}`}
            role="tabpanel"
            aria-labelledby={`level-tab-${entry.id}`}
            hidden={entry.id !== level.id}
            className="bg-lcd-3 text-lcd-0 pixel-box"
            style={{ '--frame': 'var(--color-lcd-0)' } as CSSProperties}
          >
            {/* Card header */}
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4 p-6 pb-0 md:p-9 md:pb-0">
              <div>
                <h3 className="text-3xl font-bold md:text-4xl">
                  {entry.title}
                  {entry.current && (
                    <span className="hud bg-lcd-0 text-lcd-3 ml-3 inline-block px-2 py-1 align-middle text-[11px]">
                      {labels.current}
                    </span>
                  )}
                </h3>
                <p className="hud text-lcd-1 mt-3 text-[12px]">
                  {labels.world} {entry.code} · {entry.world} · <span className="tabular-nums">{entry.period}</span>
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(selected - 1)}
                  disabled={selected === 0}
                  aria-label={labels.prev}
                  className="bg-lcd-0 text-lcd-3 grid size-11 place-items-center disabled:opacity-30"
                >
                  <PixelIcon name="cursorLeft" scale={3} />
                </button>
                <button
                  type="button"
                  onClick={() => go(selected + 1)}
                  disabled={selected === levels.length - 1}
                  aria-label={labels.next}
                  className="bg-lcd-0 text-lcd-3 grid size-11 place-items-center disabled:opacity-30"
                >
                  <PixelIcon name="cursor" scale={3} />
                </button>
              </div>
            </div>

            {/* Card tabs */}
            <div className="border-lcd-0 mt-6 flex border-b-4 px-6 md:px-9" role="tablist" aria-label={entry.title}>
              {TABS.map((id, index) => {
                const active = tab === id;
                return (
                  <button
                    key={id}
                    ref={(el) => {
                      if (entry.id === level.id) tabButtons.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`level-${entry.id}-tab-${id}`}
                    aria-controls={`level-${entry.id}-${id}`}
                    aria-selected={active}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setTab(id)}
                    onKeyDown={(event) => onTabKey(event, index)}
                    className={`hud flex items-center gap-1.5 px-3 py-2.5 text-[11px] sm:px-4 sm:text-[12px] ${
                      active ? 'bg-lcd-0 text-lcd-3' : 'text-lcd-1 hover:text-lcd-0'
                    }`}
                  >
                    {active && <PixelIcon name="cursor" scale={1} />}
                    {labels.tabs[id]}
                    {id === 'skills' && <span className="tabular-nums opacity-70">{entry.skills.length}</span>}
                  </button>
                );
              })}
            </div>

            <div className="p-6 md:p-9">
              {/* Achievements */}
              <div role="tabpanel" id={`level-${entry.id}-achievements`} aria-labelledby={`level-${entry.id}-tab-achievements`} hidden={tab !== 'achievements'}>
                {entry.metrics.length > 0 && (
                  <ul className="mb-6 flex flex-wrap gap-3">
                    {entry.metrics.map((metric) => (
                      <li key={metric} className="bg-lcd-0 text-lcd-3 flex items-center gap-2 px-3 py-1.5 text-[16px]">
                        <PixelIcon name="star" scale={2} className="text-lcd-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="max-w-[70ch] space-y-3 text-lg leading-relaxed">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <PixelIcon name="cursor" scale={2} className="text-lcd-1 mt-[0.45em] shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills used in the role, as LCD equipment slots */}
              <div role="tabpanel" id={`level-${entry.id}-skills`} aria-labelledby={`level-${entry.id}-tab-skills`} hidden={tab !== 'skills'}>
                <p className="hud text-lcd-1 mb-5 flex items-center gap-2 text-[12px]">
                  <PixelIcon name="cursor" scale={2} className="animate-blink" />
                  {labels.skillHint}
                </p>
                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                  <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4">
                    {entry.skills.map((entrySkill) => {
                      const active = skill === entrySkill.name;
                      return (
                        <li key={entrySkill.name}>
                          <button
                            type="button"
                            aria-pressed={active}
                            onClick={() => setSkill(entrySkill.name)}
                            className="bg-lcd-3 relative flex aspect-square w-full flex-col items-center justify-center gap-1.5 p-1.5 hover:bg-[#dbe8b8]"
                            style={{ boxShadow: frame(active ? 'var(--color-magenta)' : 'var(--color-lcd-0)') }}
                          >
                            {entrySkill.logo ? (
                              <img
                                src={art[entrySkill.logo] ?? entrySkill.logo}
                                alt=""
                                width={40}
                                height={40}
                                loading="lazy"
                                className={`size-10 object-contain [image-rendering:pixelated] ${art[entrySkill.logo] ? '' : 'opacity-50 grayscale'}`}
                              />
                            ) : (
                              <PixelIcon name={entrySkill.icon} scale={4} className="text-lcd-1" />
                            )}
                            <span className="hud line-clamp-2 max-w-full text-center text-[9px] leading-tight tracking-[0.02em] sm:text-[10px] sm:tracking-[0.06em] hyphens-auto">
                              {tileLabel(entrySkill.name)}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="bg-lcd-0 text-lcd-3 min-h-40 self-start p-5" aria-live="polite">
                    {picked && entry.id === level.id && (
                      <>
                        <p className="font-pixel text-2xl font-bold">{picked.name}</p>
                        <p className="text-lcd-2 mt-2 text-[18px]">
                          {labels.usedIn}{' '}
                          <span className="text-lcd-3 font-bold tabular-nums">
                            {picked.uses.length} {picked.uses.length === 1 ? labels.roleOne : labels.roleMany}
                          </span>
                          {picked.uses.length > 0 && (
                            <>
                              {' '}
                              · {labels.since}{' '}
                              <span className="text-lcd-3 font-bold tabular-nums">
                                {Math.min(...picked.uses.map((use) => use.year))}
                              </span>
                            </>
                          )}
                        </p>
                        <ol className="border-lcd-1 mt-4 space-y-1.5 border-t-2 border-dashed pt-3">
                          {picked.uses.map((use) => (
                            <li
                              key={`${use.company}-${use.title}`}
                              className={`flex items-baseline gap-3 text-[17px] ${use.title === entry.title ? 'text-lcd-3' : 'text-lcd-2'}`}
                            >
                              <span className="hud w-9 shrink-0 text-[11px] tabular-nums">{use.year}</span>
                              <span>
                                {use.title} · {use.company}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Details: the role's data sheet */}
              <div role="tabpanel" id={`level-${entry.id}-details`} aria-labelledby={`level-${entry.id}-tab-details`} hidden={tab !== 'details'}>
                <dl className="grid gap-x-10 sm:grid-cols-2">
                  {[
                    { label: labels.company, value: entry.company },
                    { label: labels.period, value: entry.period },
                    { label: labels.duration, value: entry.duration },
                    { label: labels.achievementsCount, value: String(entry.highlights.length) },
                    { label: labels.skillsCount, value: String(entry.skills.length) },
                    ...(entry.metrics.length ? [{ label: labels.milestones, value: entry.metrics.join(' · ') }] : []),
                  ].map(({ label, value }) => (
                    <div key={label} className="border-lcd-2 border-b-2 border-dashed py-4">
                      <dt className="hud text-lcd-1 text-[11px]">{label}</dt>
                      <dd className="mt-1 text-xl font-semibold tabular-nums">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
