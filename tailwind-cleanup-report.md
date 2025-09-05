Tailwind cleanup report

Summary
- Found many occurrences of Tailwind-style utility classes across pages and components.
- This report highlights high-priority files to convert first (pages and major components).

Top targets (examples)
- src/pages/HomePage.tsx — homepage still contains utility classes on Buttons and wrappers
- src/pages/DreamTypesPage.tsx — many grid, text, spacing utilities (grid-cols-*, text-*, max-w-*, mx-auto)
- src/pages/DreamPrinciplesPage.tsx — cards and grids use utilities
- src/pages/DreamMeaningsPage.tsx — Tabs, grid, cards use utilities
- src/pages/DreamcorePage.tsx — gallery cards with group-hover utilities
- src/pages/AIChatPage.tsx — layout and Card utilities, large `h-[600px]` usage

Common utility patterns found
- layout: max-w-7xl, mx-auto, grid, gap-*, grid-cols-*, flex, items-center, justify-center
- spacing: p-*, px-*, py-*, mb-*, mt-*
- typography: text-*, leading-*, font sizes like text-5xl, text-xl
- color/opacity: text-white/90, bg-white/10, border-white/20
- interactivity: hover:*, group-hover:*, transition-*, duration-*
- arbitrary values: h-[600px], w-(--sidebar-width)

Recommended next steps
1) Confirm approach:
   - Option A: Produce a replacement plan + patch for each page converting utilities to module classes and adding module .module.scss files.
   - Option B: Keep shared component styles in `src/styles/_components.scss` and replace utility strings with those class names (less files to edit, more global classes).
   - Option C: Hybrid — pages use CSS Modules, shared UI primitives use global shared classes.
2) I suggest starting with pages (Home, DreamTypes, DreamPrinciples, DreamMeanings, Dreamcore, AIChat) in that order, converting each page in a separate commit/batch.
3) For arbitrary utilities (h-[600px], group-hover:scale-110), I'll translate them into explicit CSS rules in the module for accurate behavior.

If you approve, tell me which option (A/B/C) you want. If you say "continue", I'll start with Option C (hybrid) and convert the Home page first, update imports, add `HomePage.module.scss` (already done for new Home) and then move to DreamTypes.

Notes
- I will run `npm run build` after each page-batch to catch regressions.
- Large-scale automatic replacement can introduce visual regressions; I'll keep edits small and test frequently.

