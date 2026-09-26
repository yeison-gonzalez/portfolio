import { useEffect, useState, type CSSProperties } from 'react';
import PixelIcon from './icons/PixelIcon';

interface NavLink {
  id: string;
  label: string;
}

interface Props {
  name: string;
  initials: string;
  homeHref: string;
  links: NavLink[];
  altLang: { href: string; code: string; label: string };
  cta: { href: string; label: string };
  labels: { menu: string; close: string; language: string };
}

export default function Navbar({ name, initials, homeHref, links, altLang, cta, labels }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Scrollspy: the menu cursor follows the section crossing the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ['home', ...links.map((link) => link.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const menuLinks = links.filter((link) => `#${link.id}` !== cta.href);

  return (
    <header className="bg-lcd-0 border-lcd-1 fixed inset-x-0 top-0 z-50 border-b-4">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <a href={homeHref} className="group flex items-center gap-3" aria-label={name}>
          <span className="bg-lcd-3 text-lcd-0 hud grid h-8 min-w-8 place-items-center px-1.5 text-xs">{initials}</span>
          <span className="hud text-lcd-3 hidden text-sm sm:block">{name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {menuLinks.map((link) => {
            const current = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`hud group flex items-center gap-2 px-2.5 py-2 text-xs ${
                    current ? 'text-lcd-3' : 'text-lcd-2 hover:text-lcd-3'
                  }`}
                  aria-current={current ? 'true' : undefined}
                >
                  <PixelIcon
                    name="cursor"
                    scale={2}
                    className={current ? 'animate-blink' : 'opacity-0 group-hover:opacity-100'}
                  />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={altLang.href}
            hrefLang={altLang.code}
            className="hud text-lcd-2 hover:text-lcd-3 grid h-9 place-items-center px-2 text-xs"
            aria-label={`${labels.language}: ${altLang.label}`}
          >
            {altLang.code}
          </a>
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            className="btn btn-a min-h-9 gap-2 py-1 pr-3 pl-1.5 text-xs"
            style={{ '--px': '3px' } as CSSProperties}
          >
            <span className="btn-cap size-6 text-[11px]">A</span>
            {cta.label}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="text-lcd-3 grid size-10 place-items-center lg:hidden"
            aria-label={open ? labels.close : labels.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <PixelIcon name={open ? 'close' : 'menu'} scale={3} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-page pb-6 lg:hidden">
          <ul className="bg-lcd-3 text-lcd-0 pixel-box mx-1 p-3" style={{ '--frame': 'var(--color-lcd-2)' } as CSSProperties}>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="hud group flex h-12 items-center gap-3 px-2 text-sm"
                >
                  <PixelIcon
                    name="cursor"
                    scale={2}
                    className={active === link.id ? '' : 'opacity-0 group-hover:opacity-100 group-focus:opacity-100'}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
