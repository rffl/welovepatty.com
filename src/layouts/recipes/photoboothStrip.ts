import type { LayoutRecipe } from "../types";

export const photoboothStrip = {
  id: "photobooth-strip",
  surface: "kraft",
  namePlacement: {
    desktop: { top: "6%", right: "8%", width: "47%", rotate: 3, z: 8 },
    mobile: { top: "4%", left: "6%", width: "60%", rotate: -2, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "photobooth",
      placement: {
        desktop: { top: "16%", left: "9%", width: "26%", height: "24%", rotate: -4, z: 5 },
        mobile: {
          top: "11%",
          left: "4%",
          width: "44%",
          height: "22%",
          rotate: -6,
          z: 5,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "photobooth",
      placement: {
        desktop: { top: "16%", left: "37%", width: "26%", height: "24%", rotate: -2, z: 5 },
        mobile: {
          top: "25%",
          right: "4%",
          width: "44%",
          height: "22%",
          rotate: 3,
          z: 6,
        },
      },
    },
    {
      photoIndex: 2,
      variant: "photobooth",
      placement: {
        desktop: { top: "16%", right: "9%", width: "26%", height: "24%", rotate: 2, z: 5 },
        mobile: {
          top: "38%",
          left: "11%",
          width: "44%",
          height: "22%",
          rotate: -2,
          z: 5,
        },
      },
    },
  ],
  message: {
    variant: "letter",
    placement: {
      desktop: { bottom: "8%", left: "11%", width: "78%", height: "44%", rotate: 2, z: 6 },
      mobile: {
        bottom: "10%",
        left: "7%",
        width: "85%",
        height: "38%",
        rotate: -1,
        z: 7,
      },
    },
  },
  decorations: [
    {
      kind: "film",
      placement: {
        desktop: { top: "43%", left: "17%", width: "64%", height: "5%", rotate: -2, z: 8 },
        mobile: {
          top: "61%",
          left: "8%",
          width: "58%",
          height: "3.5%",
          rotate: -3,
          z: 6,
        },
      },
    },
    {
      kind: "doodle",
      labelKey: "photoboothDoodle",
      placement: {
        desktop: { top: "50%", right: "12%", width: "28%", rotate: 8, z: 9 },
        mobile: {
          bottom: "1.8%",
          right: "4%",
          width: "40%",
          rotate: 7,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
