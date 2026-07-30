import type { LayoutRecipe } from "../types";

export const foldedLetter = {
  id: "folded-letter",
  surface: "kraft",
  namePlacement: {
    desktop: { top: "7%", left: "8%", width: "46%", rotate: -2, z: 8 },
    mobile: { top: "4%", left: "7%", width: "62%", rotate: -2, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "snapshot",
      placement: {
        desktop: { top: "18%", left: "22%", width: "56%", height: "40%", rotate: 6, z: 6 },
        mobile: {
          top: "12%",
          right: "6%",
          width: "82%",
          height: "43%",
          rotate: 6,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "letter",
    placement: {
      desktop: { bottom: "6%", left: "10%", width: "78%", height: "42%", rotate: -1, z: 5 },
      mobile: {
        bottom: "9%",
        left: "6%",
        width: "88%",
        height: "40%",
        rotate: -1,
        z: 5,
      },
    },
  },
  decorations: [
    {
      kind: "tape",
      placement: {
        desktop: { top: "15%", left: "45%", width: "20%", rotate: 1, z: 10 },
        mobile: {
          top: "64%",
          left: "34%",
          width: "26%",
          rotate: 1,
          z: 10,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
