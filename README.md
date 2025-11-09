# CrabHacks 2024 Landing Page

a flat, beachy landing page for the largest hackathon in the dmv area. built with next.js, typescript, and a focus on clean, professional design.

## design philosophy

### flat design principles
- **no shadows** — completely flat design with no depth effects
- **no gradients** — solid colors only throughout
- **bold borders** — 2–3px solid borders define structure
- **clean typography** — space mono font family for a technical, modern feel
- **colorful yet professional** — beachy color palette that remains professional

### color palette
- **sand** (#F5E6D3) — primary background
- **ocean** (#5BB5D9) — primary accent, navigation
- **coral** (#FF8C7A) — call-to-action buttons
- **sky** (#B8E0F0) — hero section, highlights
- **teal** (#4A9B9C) — registration section, accents
- **white** (#FFFFFF) — cards, contrast
- **charcoal** (#2C3E50) — text, borders

## structure

### content management
all text content is stored in `app/copy.ts` for easy updates. this includes:
- event information (name, tagline, description)
- dates and location details
- statistics (participants, projects, sponsors, prizes)
- call-to-action text
- faq questions and answers
- sponsor list
- schedule
- hack tracks

### sections

1. **header** — sticky navigation with logo and links
2. **hero** — large title, tagline, key info cards (when/where/format), primary cta
3. **stats** — animated counters showing event scale
4. **highlights** — what participants get (food, swag, prizes, etc.)
5. **tracks** — hackathon categories/tracks
6. **schedule** — timeline of events
7. **about** — detailed description with multiple ctas
8. **sponsors** — infinite scrolling marquee
9. **faq** — accordion-style q&a
10. **register** — final call-to-action section
11. **footer** — contact info and easter egg

## components

### animated counter
`app/components/AnimatedCounter.tsx` — animates numbers from 0 to target value with easing. used for stats section.

### sponsor marquee
`app/components/SponsorMarquee.tsx` — infinite scrolling horizontal list of sponsors.

## typography

uses **space mono** font throughout for a technical, modern aesthetic. all text is lowercase to match the casual, friendly tone.

## easter eggs

1. **footer message** — "made with 🦀 for the dmv" — a subtle nod to the crab theme
2. **hover states** — track cards change color on hover
3. **sticky header** — navigation stays visible while scrolling
4. **animated stats** — numbers count up on page load
5. **marquee animation** — sponsors scroll infinitely

## responsive design

fully responsive with breakpoints at:
- **768px** — tablet adjustments
- **480px** — mobile optimizations

grid layouts automatically adjust to single columns on smaller screens.

## accessibility

- semantic html structure
- keyboard navigation support
- focus-visible states on all interactive elements
- aria-expanded on faq accordion
- proper heading hierarchy

## development

```bash
npm run dev
```

open [http://localhost:3000](http://localhost:3000) to view.

## customization

to update content, edit `app/copy.ts`. all text is centralized there.

to change colors, modify css variables in `app/globals.css`:

```css
:root {
  --sand: #F5E6D3;
  --ocean: #5BB5D9;
  --coral: #FF8C7A;
  /* etc */
}
```

all styles use the `crab-` prefix for easy identification and scoping.

## tech stack

- next.js 16
- react 19
- typescript
- tailwind css v4
- space mono font (google fonts)

## notes

- all text is lowercase for consistency
- no inline styles — everything uses css classes
- flat design only — no shadows or gradients
- beachy color palette maintains professionalism
- single-page design — everything on one scrollable page