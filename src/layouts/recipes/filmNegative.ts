import type { LayoutRecipe } from "../types";

export const filmNegative = {
  id: "film-negative",
  surface: "black",
  namePlacement: {
    desktop: { top: "6%", left: "7%", width: "44%", rotate: -2, z: 9 },
    mobile: { top: "4%", left: "7%", width: "61%", rotate: -2, z: 9 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "film",
      placement: {
        desktop: { top: "17%", left: "5%", width: "43%", height: "29%", rotate: -4, z: 5 },
        mobile: { top: "11%", left: "5%", width: "62%", height: "19%", rotate: -5, z: 5 },
      },
    },
    {
      photoIndex: 1,
      variant: "film",
      placement: {
        desktop: { top: "13%", right: "5%", width: "43%", height: "29%", rotate: 4, z: 6 },
        mobile: { top: "26%", right: "4%", width: "62%", height: "19%", rotate: 5, z: 6 },
      },
    },
    {
      photoIndex: 2,
      variant: "film",
      captionLayer: { position: "top" },
      placement: {
        desktop: { top: "40%", left: "28%", width: "44%", height: "27%", rotate: -1, z: 7 },
        mobile: { top: "41%", left: "9%", width: "62%", height: "19%", rotate: -1, z: 7 },
      },
    },
  ],
  message: {
    variant: "letter",
    placement: {
      desktop: { bottom: "6%", left: "11%", width: "78%", height: "37%", rotate: 1, z: 8 },
      mobile: { bottom: "8%", left: "8%", width: "84%", height: "38%", rotate: 1, z: 8 },
    },
  },
  decorations: [
    {
      kind: "film",
      placement: {
        desktop: { top: "48%", left: "4%", width: "29%", height: "6%", rotate: 7, z: 3 },
        mobile: { bottom: "2%", left: "4%", width: "30%", height: "3%", rotate: 7, z: 3 },
      },
    },
    {
      kind: "doodle",
      labelKey: "filmNegativeDoodle",
      treatment: "dark-label",
      placement: {
        desktop: { bottom: "8%", left: "4%", width: "30%", rotate: -7, z: 9 },
        mobile: { bottom: "2%", right: "3%", width: "44%", rotate: -7, z: 9 },
      },
    },
  ],
} as const satisfies LayoutRecipe;
