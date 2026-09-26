# Yeison Gonzalez · Portfolio

Portafolio personal bilingüe (ES/EN) construido con **Astro**, **React**, **TypeScript** y **Tailwind CSS**.

🔗 https://yeison-gonzalez.github.io/portfolio/

## Stack

- [Astro 7](https://astro.build): sitio estático, optimización de imágenes (`astro:assets`), i18n y sitemap
- [React 19](https://react.dev): islas interactivas (navbar, inventario del stack, mapa de carrera)
- [Tailwind CSS 4](https://tailwindcss.com): tokens de diseño (paleta LCD de Game Boy)
- [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) y [Silkscreen](https://fonts.google.com/specimen/Silkscreen): tipografía pixel
- Iconos pixel propios en `src/components/icons/PixelIcon.tsx`

El sistema visual (tokens, tipografía, componentes) está documentado en `DESIGN.md`.

## Desarrollo

Requiere Node.js ≥ 22.12 y [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev       # http://localhost:4321/portfolio/
pnpm build     # type-check + build en dist/
pnpm preview   # sirve el build
```

## Editar el contenido

Todo el contenido vive en `src/data` (cada texto tiene versión `es` y `en`):

| Archivo                   | Contenido                                                    |
| ------------------------- | ------------------------------------------------------------ |
| `src/data/profile.ts`     | Nombre, roles, bio, cifras, idiomas, contacto y "Qué aporto" |
| `src/data/skills.ts`      | Tecnologías por categoría (logos de devicon) y prácticas     |
| `src/data/experience.ts`  | Experiencia laboral por empresa y rol                        |
| `src/data/education.ts`   | Formación y certificaciones                                  |
| `src/data/projects.ts`    | Proyectos (estado, descripción, stack, links)                |
| `src/i18n/ui.ts`          | Textos de la interfaz (menú, títulos, botones)               |

### Publicar un proyecto terminado

Los proyectos empiezan con `status: 'building'` y una ilustración conceptual. Cuando uno esté listo:
copia su captura a `src/assets/images/projects/`, impórtala en `projects.ts` como `image`,
cambia `status` a `'live'` y agrega `url` / `repo`.

## Despliegue

Cada push a `main` publica el sitio con GitHub Actions (`.github/workflows/deploy.yml`).
La primera vez, activa **Settings → Pages → Source: GitHub Actions** en el repositorio.
