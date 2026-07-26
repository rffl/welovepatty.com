# Photo Gallery and Page Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every supplied friend photograph browsable and enlargable while simplifying the specified contribution decorations.

**Architecture:** Add one focused `PhotoViewer` dialog controlled by each visible photo trigger, and pass each contribution’s complete photo collection into its existing `PhotoStack`. Keep all image paths and mirroring metadata in `src/content/scrapbook.ts`; recipes remain responsible only for physical placement.

**Tech Stack:** React 19, TypeScript, native `<dialog>`, pointer events, CSS

---

### Task 1: Lifted photo viewer

**Files:**
- Create: `src/components/PhotoViewer.tsx`
- Modify: `src/components/PhotoStack.tsx`
- Modify: `src/components/PhotoFrame.tsx`
- Modify: `src/styles/layouts.css`
- Modify: `src/styles/accessibility.css`

- [x] **Step 1:** Implement `PhotoViewer` as a modal physical-photo view that filters out placeholders, opens at the selected photograph, browses with buttons/arrow keys/horizontal pointer swipes, reports the current index, and toggles a closer zoom when the photograph is activated.
- [x] **Step 2:** Replace `PhotoStack`’s in-place cycling state with viewer-open state. Accept the friend’s complete gallery separately from the recipe slot’s thumbnail and open the viewer at the selected thumbnail.
- [x] **Step 3:** Center all thumbnail crops in `PhotoFrame` while retaining recorded horizontal mirroring corrections.
- [x] **Step 4:** Add physical viewer styling, full-image `contain` sizing, warm backdrop, responsive controls, zoom treatment, and gallery-trigger styling.

### Task 2: Connect every supplied photograph

**Files:**
- Modify: `src/layouts/ContributionLayout.tsx`
- Modify: `src/components/BestFriendPhotoPage.tsx`

- [x] **Step 1:** Pass `contribution.photos` to every recipe photo trigger so each visible photograph opens the complete friend gallery.
- [x] **Step 2:** Stop generating fallback photo slots when a recipe has more positions than the contribution has photographs; explicit empty-photo data for Evelyn and Raja remains visible.
- [x] **Step 3:** Use the same gallery trigger for each of Nethanya’s three visible photographs while preserving her dedicated page composition.

### Task 3: Simplify the approved contribution pages

**Files:**
- Modify: `src/layouts/recipes/mapFoldout.ts`
- Modify: `src/layouts/recipes/coffeeReceipt.ts`
- Modify: `src/layouts/recipes/foldedLetter.ts`
- Modify: `src/layouts/recipes/airmailEnvelope.ts`
- Modify: `src/layouts/recipes/postcard.ts`
- Modify: `src/layouts/recipes/eventTicket.ts`
- Modify: `src/layouts/recipes/finalLoveLetter.ts`
- Modify: `src/content/types.ts`
- Modify: `src/content/scrapbook.ts`

- [x] **Step 1:** Remove Tiffany’s map doodle and its unused central label.
- [x] **Step 2:** Replace Naomi’s receipt decoration with a third photo position and remove its unused order label.
- [x] **Step 3:** Remove stamp pieces from ordinary contribution recipes and delete their now-unused label keys, while leaving the cover, opening, and Nethanya-specific stamp components intact.
- [ ] **Step 4:** Commit the implementation without running unit tests, a production build, or browser review, as requested by the user.
