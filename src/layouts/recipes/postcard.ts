import type { LayoutRecipe } from "../types";

export const postcard = {
  id: "postcard",
  surface: "light",
  namePlacement: {
    desktop: { top: "7%", left: "8%", width: "44%", rotate: -3, z: 8 },
    mobile: { top: "4%", left: "6%", width: "60%", rotate: -3, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "postcard",
      captionLayer: { position: "bottom" },
      placement: {
        desktop: {
          top: "15%",
          left: "6%",
          width: "58%",
          height: "43%",
          rotate: -4,
          z: 5,
        },
        mobile: {
          top: "14%",
          left: "5%",
          width: "82%",
          height: "38%",
          rotate: -4,
          z: 5,
        },
      },
    },
  ],
  message: {
    variant: "postcard",
    placement: {
      desktop: {
        bottom: "10%",
        right: "6%",
        width: "65%",
        height: "42%",
        rotate: 3,
        z: 6,
      },
      mobile: {
        bottom: "10%",
        right: "5%",
        width: "86%",
        height: "38%",
        rotate: 3,
        z: 6,
      },
    },
  },
  decorations: [
    {
      kind: "doodle",
      labelKey: "postcardDoodle",
      treatment: "paper-label",
      placement: {
        desktop: {
          bottom: "4%",
          left: "6%",
          width: "37%",
          rotate: -5,
          z: 9,
        },
        mobile: {
          bottom: "2.5%",
          left: "5%",
          width: "46%",
          rotate: -5,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
