# Rectangular Stamp Redesign

## Goal

Replace the scrapbook’s two remaining circular digital-looking stamps with compact rectangular rubber-stamp marks that feel physically pressed onto the page.

## Scope

The shared stamp treatment applies to:

- `PATTY / MELBOURNE` on the blue front cover.
- `BEST FRIENDS / FOR LIFE` on Nethanya’s letter page.

Their wording and page placement remain unchanged.

## Visual Design

- Use a compact rectangular silhouette with a slightly distressed double border.
- Stack the two text lines tightly as one composition; remove the large vertical gap created by the current fixed circular layout.
- Keep the existing faded postmark-red ink, multiply blending, and imperfect rotation so the marks feel hand-pressed rather than digitally precise.
- Keep the stamp transparent so the underlying cover or paper texture shows through.
- Preserve the same composition on mobile at a smaller scale instead of substituting a simplified design.

## Implementation

Update the shared `.decoration--stamp` material style from a centered circular grid to a tightly grouped vertical flex composition. Hide the trailing line-break elements inside stamps so each label line occupies exactly one compact row. Existing cover- and Nethanya-specific positioning rules continue to control size and placement.

No new image asset, component, content field, interaction, or accessibility behavior is required.

## Verification

Verify that both phrases render as two closely spaced lines on desktop and mobile, retain their existing wording and placement, and no longer inherit circular borders or excess vertical space.
