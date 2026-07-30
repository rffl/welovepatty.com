import type { LayoutRecipe } from "../types";

export const pressedFlower = {
  id: "pressed-flower",
  surface: "light",
  namePlacement: {
    desktop: { top: "6%", right: "9%", width: "44%", rotate: 2, z: 8 },
    mobile: { top: "4%", right: "6%", width: "58%", rotate: 2, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "polaroid",
      placement: {
        desktop: { top: "12%", left: "7%", width: "46%", height: "38%", rotate: -5, z: 5 },
        mobile: {
          top: "14%",
          left: "5%",
          width: "66%",
          height: "27%",
          rotate: -5,
          z: 5,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "snapshot",
      placement: {
        desktop: { top: "24%", right: "7%", width: "40%", height: "32%", rotate: 5, z: 6 },
        mobile: {
          top: "37%",
          right: "4%",
          width: "50%",
          height: "23%",
          rotate: 5,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "letter",
    placement: {
      desktop: { bottom: "6%", left: "12%", width: "74%", height: "40%", rotate: -1, z: 7 },
      mobile: {
        bottom: "10%",
        left: "8%",
        width: "84%",
        height: "38%",
        rotate: -1,
        z: 7,
      },
    },
  },
  decorations: [
    {
      kind: "flower",
      placement: {
        desktop: { top: "7%", left: "53%", width: "14%", height: "18%", rotate: 17, z: 9 },
        mobile: {
          top: "8%",
          left: "57%",
          width: "16%",
          height: "11%",
          rotate: 17,
          z: 9,
        },
      },
    },
    {
      kind: "flower",
      placement: {
        desktop: { bottom: "1%", right: "1%", width: "11%", height: "13%", rotate: -13, z: 8 },
        mobile: {
          bottom: "0.8%",
          right: "2%",
          width: "14%",
          height: "7%",
          rotate: -13,
          z: 8,
        },
      },
    },
    {
      kind: "tape",
      placement: {
        desktop: { top: "10%", left: "20%", width: "19%", rotate: 1, z: 10 },
        mobile: {
          top: "12%",
          left: "20%",
          width: "25%",
          rotate: 1,
          z: 10,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
