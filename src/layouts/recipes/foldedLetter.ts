import type { LayoutRecipe } from "../types";

export const foldedLetter = {
  id: "folded-letter",
  surface: "kraft",
  namePlacement: {
    desktop: { top: "7%", left: "8%", width: "46%", rotate: -2, z: 8 },
    mobile: { top: "5%", left: "8%", width: "63%", rotate: -2, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "snapshot",
      placement: {
        desktop: {
          top: "11%",
          right: "7%",
          width: "39%",
          height: "31%",
          rotate: 6,
          z: 6,
        },
        mobile: {
          top: "15%",
          right: "6%",
          width: "54%",
          height: "21%",
          rotate: 6,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "letter",
    placement: {
      desktop: {
        top: "32%",
        left: "10%",
        width: "76%",
        height: "56%",
        rotate: -1,
        z: 5,
      },
      mobile: {
        top: "42%",
        left: "7%",
        width: "85%",
        height: "42%",
        rotate: -1,
        z: 5,
      },
    },
  },
  decorations: [
    {
      kind: "tape",
      placement: {
        desktop: {
          top: "29%",
          left: "41%",
          width: "21%",
          rotate: 1,
          z: 10,
        },
        mobile: {
          top: "40%",
          left: "38%",
          width: "25%",
          rotate: 1,
          z: 10,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
