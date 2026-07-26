# Photo Gallery and Page Cleanup Design

## Goal

Make every supplied photograph discoverable and comfortably viewable without crowding the handmade scrapbook pages, while removing page decorations that do not add personal meaning.

## Photo interaction

Every real photograph shown on a contribution page is a gallery trigger. Activating it lifts a large physical photograph above the scrapbook, matching the existing enlarged-letter interaction rather than introducing a conventional website lightbox.

The lifted viewer opens at the photograph that was selected and includes every supplied photograph for that friend. Previous and next controls, horizontal swiping, and a visible position counter make the complete collection discoverable on desktop and mobile. Moving to another photograph resets any enlarged zoom state. The viewer closes from its close control or the surrounding backdrop.

The first enlargement shows the complete, uncropped photograph. Activating that photograph again toggles a closer zoom. Page-turn gestures remain behind the modal viewer and do not compete with gallery swipes.

## Thumbnail treatment

Scrapbook thumbnails continue using a cover crop so the physical layouts remain intact, but their crop is centered with `object-position: center`. Mirroring corrections already recorded in the central content data apply in both thumbnails and the lifted viewer.

Each visible stack shows a short handwritten-style prompt indicating that all of the friend’s photographs can be opened. The existing tap-to-cycle behavior is replaced by opening the full gallery so photographs cannot remain hidden behind an unexplained stack interaction.

## Content cleanup

- Tiffany’s “we were here” doodle is removed.
- Kathleen’s page renders only her supplied photograph; the recipe does not invent a second placeholder.
- Naomi’s coffee receipt is replaced by a third photograph while all seven of her photographs remain available in her gallery.
- Decorative circular stamps are removed from ordinary contribution recipes, including `KEEP FOREVER`, `MELBOURNE VIC`, postcard, and event-ticket stamps.
- The cover stamp, opening-page stamp, and Nethanya’s meaningful `BEST FRIENDS FOR LIFE` stamp remain.

The contributor order, scrapbook page count, letters, and physical page-turn behavior do not change.

## Verification boundary

No unit tests, production build, or browser self-review will be added or run for this iteration, following the user’s request. The completed code will be committed for direct visual review.
