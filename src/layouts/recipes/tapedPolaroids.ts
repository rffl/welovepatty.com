import type { LayoutRecipe } from "../types";

export const tapedPolaroids = {
  id: "taped-polaroids",
  surface: "paper",
  namePlacement: {
    desktop: { top: "7%", right: "8%", width: "43%", rotate: 3, z: 8 },
    mobile: { top: "4%", right: "6%", width: "58%", rotate: 3, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "polaroid",
      placement: {
        desktop: { top: "11%", left: "6%", width: "50%", height: "38%", rotate: -7, z: 5 },
        mobile: {
          top: "14%",
          left: "5%",
          width: "68%",
          height: "28%",
          rotate: -7,
          z: 5,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "polaroid",
      placement: {
        desktop: { top: "22%", right: "6%", width: "42%", height: "34%", rotate: 6, z: 6 },
        mobile: {
          top: "36%",
          right: "4%",
          width: "54%",
          height: "24%",
          rotate: 6,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "letter",
    placement: {
      desktop: { bottom: "6%", left: "12%", width: "76%", height: "40%", rotate: -1, z: 7 },
      mobile: {
        bottom: "10%",
        left: "7%",
        width: "82%",
        height: "38%",
        rotate: -1,
        z: 7,
      },
    },
  },
  decorations: [
    {
      kind: "tape",
      placement: {
        desktop: { top: "9%", left: "20%", width: "22%", rotate: -2, z: 10 },
        mobile: {
          top: "12%",
          left: "22%",
          width: "26%",
          rotate: -2,
          z: 10,
        },
      },
    },
    {
      kind: "tape",
      placement: {
        desktop: { top: "19%", right: "16%", width: "19%", rotate: 9, z: 10 },
        mobile: {
          top: "34%",
          right: "12%",
          width: "22%",
          rotate: 9,
          z: 10,
        },
      },
    },
    {
      kind: "heart",
      placement: {
        desktop: { right: "4%", bottom: "1.5%", width: "10%", rotate: 7, z: 9 },
        mobile: {
          right: "4%",
          bottom: "2.5%",
          width: "13%",
          rotate: 7,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
