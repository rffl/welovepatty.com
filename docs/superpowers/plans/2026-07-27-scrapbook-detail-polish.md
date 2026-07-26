# Scrapbook Detail Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved rectangular stamps, personal ticket copy, doodle backdrop, unobstructed Things We’ll Miss footer, and finger-following enlarged-photo swipe.

**Architecture:** Keep static scrapbook content in the existing central content object and visual treatments in the existing recipe/material CSS system. Upgrade `PhotoViewer` from an active-image swap to a three-slot circular track (previous, active, next) whose transform follows pointer movement and commits the active index after its settling transition.

**Tech Stack:** React 19, TypeScript 6, Vite 6, CSS custom properties and transforms

---

## File Map

- Modify `src/content/scrapbook.ts`: replace the two decorative ticket labels.
- Modify `src/layouts/recipes/stickyNotes.ts`: opt the sticky-note doodle into the shared paper-label treatment.
- Modify `src/styles/materials.css`: replace circular stamp material styling with the approved compact rectangular library mark.
- Modify `src/styles/scrapbook.css`: move the Things We’ll Miss heart clear of its footer.
- Modify `src/components/PhotoViewer.tsx`: render and control the live three-photo swipe track.
- Modify `src/styles/accessibility.css`: style the photo track, slide transition, drag cursor, and active-slide zoom.

The user explicitly requested no unit tests. Do not create test files or perform browser self-review; the user will review the final interaction visually.

### Task 1: Personal Scrapbook Copy and Small Page Details

**Files:**
- Modify: `src/content/scrapbook.ts:84-95`
- Modify: `src/layouts/recipes/stickyNotes.ts:55-72`
- Modify: `src/styles/scrapbook.css:1894-1900`

- [ ] **Step 1: Replace Raffel’s and Velya’s ticket labels**

In `src/content/scrapbook.ts`, set the two central label values to the approved copy:

```ts
recipeDecorationLabels: {
  tramTicketPass: "BRODIE EXPRESS\nRETURN: OCTOBER",
  tramTicketDoodle: "ding ding ↗",
  stickyNotesDoodle: "remember this bit! ↗",
  coffeeReceiptDoodle: "more trips together ↗",
  airmailEnvelopeRoute: "MEL → YOU",
  filmNegativeDoodle: "keep the outtakes",
  diaryEntryDoodle: "Dear diary…",
  postcardDoodle: "wish you could stay",
  tornNotebookDoodle: "do not forget this",
  eventTicketAdmission: "ROUND TRIP\nMEL ⇄ SEMARANG",
  photoboothDoodle: "again! again!",
},
```

- [ ] **Step 2: Give “remember this bit!” the shared translucent paper label**

In `src/layouts/recipes/stickyNotes.ts`, change only the doodle treatment:

```ts
{
  kind: "doodle",
  labelKey: "stickyNotesDoodle",
  treatment: "paper-label",
  placement: {
    desktop: { top: "43%", left: "5%", width: "31%", rotate: -8, z: 8 },
    mobile: { top: "52%", left: "2%", width: "52%", rotate: -8, z: 8 },
  },
},
```

- [ ] **Step 3: Move the Things We’ll Miss heart into the empty lower-left space**

Replace its positioning block in `src/styles/scrapbook.css`:

```css
.things-we-miss-page__heart {
  right: auto;
  bottom: 2%;
  left: 5%;
  z-index: 12;
  width: 10%;
  --rotation: -8deg;
}
```

- [ ] **Step 4: Verify all three static changes from source**

Run:

```bash
rg -n -C 2 'BRODIE EXPRESS|ROUND TRIP|stickyNotesDoodle|things-we-miss-page__heart' src/content/scrapbook.ts src/layouts/recipes/stickyNotes.ts src/styles/scrapbook.css
```

Expected: both new ticket phrases appear, the sticky doodle uses `paper-label`, and the heart block uses `left: 5%` with `right: auto`.

- [ ] **Step 5: Commit the static polish**

```bash
git add src/content/scrapbook.ts src/layouts/recipes/stickyNotes.ts src/styles/scrapbook.css
git commit -m "fix: personalize scrapbook ephemera"
```

### Task 2: Compact Rectangular Rubber Stamps

**Files:**
- Modify: `src/styles/materials.css:361-376`

- [ ] **Step 1: Replace the shared circular stamp material**

Replace `.decoration--stamp` and add its line rules in `src/styles/materials.css`:

```css
.decoration--stamp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.12em;
  min-width: 4.4rem;
  min-height: 0;
  padding: 0.38rem 0.55rem;
  color: var(--color-postmark-red);
  border: 3px double currentColor;
  border-radius: 0.12rem;
  box-shadow:
    inset 0 0 0 1px rgb(164 75 67 / 16%),
    0.04rem 0.03rem 0 rgb(164 75 67 / 20%);
  font-family: var(--font-typewriter);
  font-size: 0.65rem;
  line-height: 0.92;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.78;
  filter: contrast(0.94);
  mix-blend-mode: multiply;
}

.decoration--stamp > span {
  display: block;
}

.decoration--stamp br {
  display: none;
}
```

The existing `.scrapbook-cover__stamp` and `.best-friend-letter__stamp` rules remain responsible for page-specific size, position, and rotation.

- [ ] **Step 2: Verify that the circular geometry is gone**

Run:

```bash
rg -n -A 35 '^\.decoration--stamp' src/styles/materials.css
```

Expected: the stamp uses flex column layout, a double rectangular border, tight `gap`, and hidden `<br>` elements; no `border-radius: 50%` or grid layout remains in that block.

- [ ] **Step 3: Commit the stamp redesign**

```bash
git add src/styles/materials.css
git commit -m "fix: redesign scrapbook ink stamps"
```

### Task 3: Finger-Following Enlarged-Photo Swipe

**Files:**
- Modify: `src/components/PhotoViewer.tsx:22-265`
- Modify: `src/styles/accessibility.css:305-368`

- [ ] **Step 1: Add circular-track state and helpers**

In `src/components/PhotoViewer.tsx`, introduce the direction types and wrapping helper after `PointerStart`:

```ts
type PhotoDirection = -1 | 1;
type SettleDirection = PhotoDirection | 0;

function wrapPhotoIndex(index: number, total: number) {
  return (index + total) % total;
}
```

Add these states beside `activeIndex` and `zoomed`:

```ts
const [dragOffset, setDragOffset] = useState(0);
const [dragging, setDragging] = useState(false);
const [settleDirection, setSettleDirection] =
  useState<SettleDirection | null>(null);
```

After `activePhoto`, derive the track and its transform:

```ts
const settling = settleDirection !== null;
const previousPhoto = activePhoto
  ? availablePhotos[
      wrapPhotoIndex(activeIndex - 1, availablePhotos.length)
    ] ?? activePhoto
  : undefined;
const nextPhoto = activePhoto
  ? availablePhotos[
      wrapPhotoIndex(activeIndex + 1, availablePhotos.length)
    ] ?? activePhoto
  : undefined;
const trackPhotos = activePhoto
  ? multiple
    ? [
        { photo: previousPhoto ?? activePhoto, slot: "previous" },
        { photo: activePhoto, slot: "active" },
        { photo: nextPhoto ?? activePhoto, slot: "next" },
      ]
    : [{ photo: activePhoto, slot: "active" }]
  : [];
const trackTransform = !multiple
  ? "translate3d(0, 0, 0)"
  : settleDirection === -1
    ? "translate3d(0, 0, 0)"
    : settleDirection === 1
      ? "translate3d(-200%, 0, 0)"
      : settleDirection === 0
        ? "translate3d(-100%, 0, 0)"
        : `translate3d(calc(-100% + ${dragOffset}px), 0, 0)`;
```

When the dialog opens, reset the track alongside zoom:

```ts
setActiveIndex(requestedIndex >= 0 ? requestedIndex : 0);
setZoomed(false);
setDragOffset(0);
setDragging(false);
setSettleDirection(null);
pointerStartRef.current = null;
```

- [ ] **Step 2: Replace instant photo changes with animated requests**

Replace `changePhoto` with:

```ts
const requestPhotoChange = (direction: PhotoDirection) => {
  if (!multiple || dragging || settling) {
    return;
  }

  setDragOffset(0);
  setSettleDirection(direction);
};

const finishPhotoTransition = () => {
  const direction = settleDirection;

  if (direction === null) {
    return;
  }

  if (direction !== 0) {
    setActiveIndex((index) =>
      wrapPhotoIndex(index + direction, availablePhotos.length),
    );
    setZoomed(false);
  }

  setDragOffset(0);
  setSettleDirection(null);
};
```

Update keyboard navigation to call `requestPhotoChange(-1)` and `requestPhotoChange(1)`.

- [ ] **Step 3: Make pointer movement update the track one-to-one**

Replace the pointer handlers with:

```ts
const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
  if (!multiple || event.button !== 0 || settling) {
    return;
  }

  pointerStartRef.current = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
  };
  suppressClickRef.current = false;
  setDragging(true);
  setDragOffset(0);
  event.currentTarget.setPointerCapture(event.pointerId);
};

const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
  const start = pointerStartRef.current;

  if (!start || start.id !== event.pointerId) {
    return;
  }

  const deltaX = event.clientX - start.x;

  if (Math.abs(deltaX) > 6) {
    suppressClickRef.current = true;
  }

  event.preventDefault();
  setDragOffset(deltaX);
};

const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
  const start = pointerStartRef.current;
  pointerStartRef.current = null;

  if (!start || start.id !== event.pointerId) {
    return;
  }

  const deltaX = event.clientX - start.x;
  const deltaY = event.clientY - start.y;
  const threshold = Math.min(
    84,
    Math.max(42, event.currentTarget.clientWidth * 0.14),
  );
  const completesSwipe =
    Math.abs(deltaX) >= threshold &&
    Math.abs(deltaX) > Math.abs(deltaY) * 1.05;

  setDragging(false);
  setDragOffset(deltaX);

  if (completesSwipe) {
    event.preventDefault();
    suppressClickRef.current = true;
    setSettleDirection(deltaX < 0 ? 1 : -1);
    return;
  }

  if (Math.abs(deltaX) >= 1) {
    setSettleDirection(0);
  } else {
    setDragOffset(0);
  }
};

const handlePointerCancel = () => {
  pointerStartRef.current = null;
  setDragging(false);

  if (Math.abs(dragOffset) >= 1) {
    suppressClickRef.current = true;
    setSettleDirection(0);
  } else {
    setDragOffset(0);
  }
};
```

- [ ] **Step 4: Render previous, active, and next photographs in one track**

In the viewport button, add `data-dragging`, `onPointerMove`, and the cancel handler. Replace the single photo with this track:

```tsx
<button
  aria-label={zoomed ? "Fit complete photograph" : "Zoom photograph"}
  className="photo-viewer__image-viewport"
  data-dragging={dragging || undefined}
  data-zoomed={zoomed || undefined}
  onClick={handlePhotoClick}
  onPointerCancel={handlePointerCancel}
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  type="button"
>
  <span
    className="photo-viewer__track"
    data-settling={settling || undefined}
    onTransitionEnd={(event) => {
      if (
        event.currentTarget === event.target &&
        event.propertyName === "transform"
      ) {
        finishPhotoTransition();
      }
    }}
    style={{ transform: trackTransform }}
  >
    {trackPhotos.map(({ photo, slot }) => (
      <span
        className={
          slot === "active"
            ? "photo-viewer__slide photo-viewer__slide--active"
            : "photo-viewer__slide"
        }
        key={`${slot}-${photo.src}`}
      >
        <span className="photo-viewer__photo">
          <img
            alt={photo.alt}
            className={
              photo.flipHorizontal
                ? "photo-viewer__image photo-viewer__image--flipped"
                : "photo-viewer__image"
            }
            decoding="async"
            draggable={false}
            src={photo.src}
          />
        </span>
      </span>
    ))}
  </span>
</button>
```

Update both arrow buttons to call `requestPhotoChange`, preserving their existing direction.

- [ ] **Step 5: Style the physical slide and settling motion**

Add after `.photo-viewer__image-viewport[data-zoomed]` in `src/styles/accessibility.css`:

```css
.photo-viewer__image-viewport[data-dragging] {
  cursor: grabbing;
}

.photo-viewer__track {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  will-change: transform;
}

.photo-viewer__track[data-settling] {
  transition: transform 360ms cubic-bezier(0.22, 0.75, 0.24, 1);
}

.photo-viewer__slide {
  display: grid;
  flex: 0 0 100%;
  min-width: 0;
  min-height: 0;
  place-items: center;
}
```

Add `pointer-events: none` to `.photo-viewer__photo`. Narrow the two existing zoom selectors so only the centered slide zooms:

```css
.photo-viewer__image-viewport[data-zoomed]
  .photo-viewer__slide--active
  .photo-viewer__image {
  transform: scale(1.45);
}

.photo-viewer__image-viewport[data-zoomed]
  .photo-viewer__slide--active
  .photo-viewer__image--flipped {
  transform: scale(1.45) scaleX(-1);
}
```

- [ ] **Step 6: Verify the interaction wiring from source**

Run:

```bash
rg -n -C 3 'onPointerMove|dragOffset|trackPhotos|data-settling|finishPhotoTransition|photo-viewer__track|photo-viewer__slide--active' src/components/PhotoViewer.tsx src/styles/accessibility.css
```

Expected: pointer movement updates `dragOffset`, three photos render in the track, transition completion commits the index, and only the active slide receives zoom styling.

- [ ] **Step 7: Commit the photo-viewer motion**

```bash
git add src/components/PhotoViewer.tsx src/styles/accessibility.css
git commit -m "feat: animate enlarged photo swipes"
```

### Task 4: Final Source Verification

**Files:**
- Verify only; no additional files expected.

- [ ] **Step 1: Check patch formatting**

Run:

```bash
git diff --check HEAD~3..HEAD
```

Expected: exit code 0 with no output.

- [ ] **Step 2: Confirm obsolete copy and circular stamp geometry are absent**

Run:

```bash
rg -n 'ADMIT TWO|ONE PERFECT NIGHT|86 · MELBOURNE|VALID FOREVER|border-radius: 50%' src/content/scrapbook.ts src/styles/materials.css
```

Expected: no matches. The command exits with code 1 because all obsolete values are absent.

- [ ] **Step 3: Confirm all approved replacement details are present**

Run:

```bash
rg -n 'ROUND TRIP|MEL ⇄ SEMARANG|BRODIE EXPRESS|RETURN: OCTOBER|treatment: "paper-label"|left: 5%|photo-viewer__track' src/content/scrapbook.ts src/layouts/recipes/stickyNotes.ts src/styles/scrapbook.css src/components/PhotoViewer.tsx src/styles/accessibility.css
```

Expected: each approved ticket line, backdrop treatment, left-positioned heart, and photo track appears.

- [ ] **Step 4: Confirm the working tree is clean**

Run:

```bash
git status --short
```

Expected: no output. Per the user’s request, do not run unit tests, a final build, or browser self-review; hand the committed implementation to the user for visual review.
