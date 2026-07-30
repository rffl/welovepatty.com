import type { LayoutRecipe } from "../types";

export const airmailEnvelope = {
  id: "airmail-envelope",
  surface: "light",
  namePlacement: {
    desktop: { top: "6%", right: "7%", width: "42%", rotate: 3, z: 9 },
    mobile: { top: "4%", right: "6%", width: "58%", rotate: 3, z: 9 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "postcard",
      placement: {
        desktop: { top: "14%", left: "14%", width: "58%", height: "42%", rotate: -5, z: 4 },
        mobile: {
          top: "14%",
          left: "4%",
          width: "80%",
          height: "38%",
          rotate: -5,
          z: 4,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "snapshot",
      placement: {
        desktop: { top: "26%", right: "5%", width: "36%", height: "28%", rotate: 7, z: 7 },
        mobile: {
          top: "36%",
          right: "4%",
          width: "46%",
          height: "20%",
          rotate: 7,
          z: 7,
        },
      },
    },
  ],
  message: {
    variant: "envelope",
    placement: {
      desktop: { bottom: "9%", left: "10%", width: "76%", height: "40%", rotate: 1, z: 6 },
      mobile: {
        bottom: "12%",
        left: "6%",
        width: "88%",
        height: "40%",
        rotate: 1,
        z: 6,
      },
    },
  },
  decorations: [
    {
      kind: "doodle",
      labelKey: "airmailEnvelopeRoute",
      placement: {
        desktop: { right: "3%", bottom: "2%", width: "26%", rotate: -5, z: 9 },
        mobile: {
          right: "4%",
          bottom: "3%",
          width: "40%",
          rotate: -5,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
