# Real Contributions and Best-Friend Finale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Populate Patty’s scrapbook with the supplied material and add the approved Nethanya and communal finale pages.

**Architecture:** Keep `src/content/scrapbook.ts` as the replaceable content source. Extend the page model with featured-photo, featured-letter, and things-we-miss page kinds that render through ordinary physical pages, leaving page-turn motion untouched.

**Tech Stack:** React 19, TypeScript 6, Vite 6, Tailwind CSS 4 plus the existing component CSS layers.

---

### Task 1: Normalize and map supplied content

**Files:**
- Modify: `public/pictures/Tiffany /`
- Modify: `src/content/types.ts`
- Modify: `src/content/scrapbook.ts`

- [ ] Rename the Tiffany directory to remove its trailing space.
- [ ] Add the optional featured-contribution marker and communal section type.
- [ ] Replace all placeholder names, messages, and photos in the approved order.
- [ ] Keep Evelyn and Raja replaceable and blank; keep Haggai’s note blank.

### Task 2: Surface every supplied photo

**Files:**
- Create: `src/components/PhotoStack.tsx`
- Modify: `src/layouts/ContributionLayout.tsx`
- Modify: `src/styles/layouts.css`

- [ ] Partition every contribution’s photos across its existing recipe slots.
- [ ] Render multi-photo slots as tactile stacks with a small paper count.
- [ ] Preserve page swiping when a gesture begins over a photo stack.

### Task 3: Add Nethanya’s dedicated spread

**Files:**
- Create: `src/components/BestFriendPhotoPage.tsx`
- Create: `src/components/BestFriendLetterPage.tsx`
- Modify: `src/styles/scrapbook.css`

- [ ] Compose the three supplied photos as a layered keepsake page.
- [ ] Build the matching letter page with the full message in Reading View.
- [ ] Give desktop and mobile layouts equal visual richness.

### Task 4: Add the communal section

**Files:**
- Create: `src/components/ThingsWeMissPage.tsx`
- Modify: `src/styles/scrapbook.css`

- [ ] Render the seven supplied lines as mismatched handwritten paper scraps.
- [ ] Position it after Nethanya and before the farewell.

### Task 5: Extend physical page rendering

**Files:**
- Modify: `src/scrapbook/pageModel.ts`
- Modify: `src/scrapbook/SpreadRenderer.tsx`
- Modify: `src/scrapbook/useAdjacentImagePreload.ts`

- [ ] Expand featured Nethanya into two adjacent physical pages.
- [ ] Add the communal page kind and render all new page kinds.
- [ ] Preload photos for ordinary and featured pages without changing the turn engine.

### Task 6: Verify and commit

**Files:**
- Review all modified source and supplied assets.

- [ ] Confirm the content order and that all supplied photos are referenced exactly once.
- [ ] Run the existing TypeScript/Vite production build; do not add unit tests.
- [ ] Commit the completed integration.
