# Scrapbook Detail Polish

## Goal

Finish the remaining scrapbook details and enlarged-photo interaction so they feel personal, physical, and compositionally intentional alongside the approved rectangular stamp redesign.

## Approved Changes

### Raffel’s Event Ticket

Replace `ADMIT TWO / ONE PERFECT NIGHT` with:

```text
ROUND TRIP
MEL ⇄ SEMARANG
```

The new copy connects Raffel’s page to his promise that they will visit Patty in Semarang and that Patty should return to Melbourne.

### Velya’s Ticket Stub

Replace `86 · MELBOURNE / VALID FOREVER` with:

```text
BRODIE EXPRESS
RETURN: OCTOBER
```

The copy references Velya calling Patty “brodie” and saying they will see each other in October.

### Sticky-Note Doodle

Give `remember this bit! ↗` the same warm translucent paper-label backdrop already used by the other selected handwritten doodles. Preserve its handwritten type, imperfect rotation, and current placement.

### Things We’ll Miss Heart

Move the heart from the lower-right corner to the open lower-left area so it no longer overlaps the footer sentence. Keep it decorative, slightly rotated, and clear of the list on both desktop and mobile.

### Enlarged Photo Swipe

Replace the enlarged photo viewer’s static release-to-swap behavior with a live physical slide:

- The active photo follows the pointer one-to-one during a horizontal drag.
- The adjacent photo enters from the corresponding side and becomes increasingly visible as the drag progresses.
- Releasing beyond the swipe threshold settles the adjacent photo into place; releasing early returns the active photo to the center.
- Previous and next buttons use the same visible settling animation rather than changing the image instantly.
- The gallery continues wrapping from the last photo to the first and resets photo zoom after a completed change.
- A drag must not accidentally trigger the viewer’s tap-to-zoom action.

## Implementation

- Update the two ticket strings in the central scrapbook content object.
- Change the sticky-notes doodle treatment from `memory-callout` to the shared `paper-label` treatment.
- Adjust only the Things We’ll Miss heart positioning rules; do not move or rewrite the footer.
- Implement the rectangular stamp styling described in `2026-07-27-rectangular-stamp-redesign-design.md` in the same code change.
- Render the previous, active, and next enlarged photos as a horizontal track. Track pointer movement without a transition while dragging, then enable the settling transition on release. Commit the active index after a successful settle so the visual track never flashes or swaps statically.

No new asset, component, content field, accessibility behavior, or unit test is required; this enhances the existing photo-viewer interaction.

## Verification

Confirm from source that both ticket strings are replaced, the sticky doodle uses `paper-label`, the heart is positioned from the left rather than the right, and the shared stamp style uses the approved compact rectangular composition. Confirm that the photo viewer updates its track continuously on pointer movement, renders adjacent photographs, and commits photo changes only after the settling animation. The user will perform the final visual review.
