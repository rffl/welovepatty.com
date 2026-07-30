import type { LayoutRecipe } from "../types";

export const mapFoldout = {
  id: "map-foldout",
  surface: "graph",
  namePlacement: {
    desktop: { top: "5%", left: "7%", width: "44%", rotate: -3, z: 8 },
    mobile: { top: "4%", left: "6%", width: "58%", rotate: -3, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "polaroid",
      placement: {
        desktop: { top: "11%", left: "5%", width: "48%", height: "34%", rotate: -5, z: 5 },
        mobile: {
          top: "11%",
          left: "4%",
          width: "64%",
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
        desktop: { top: "8%", right: "5%", width: "40%", height: "28%", rotate: 5, z: 4 },
        mobile: {
          top: "7%",
          right: "3%",
          width: "40%",
          height: "21%",
          rotate: 6,
          z: 7,
        },
      },
    },
    {
      photoIndex: 2,
      variant: "polaroid",
      placement: {
        desktop: { top: "30%", right: "7%", width: "42%", height: "28%", rotate: 4, z: 6 },
        mobile: {
          top: "34%",
          left: "14%",
          width: "70%",
          height: "26%",
          rotate: 4,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "notebook",
    placement: {
      desktop: { bottom: "6%", left: "9%", width: "74%", height: "40%", rotate: 2, z: 7 },
      mobile: {
        bottom: "6%",
        left: "7%",
        width: "80%",
        height: "38%",
        rotate: 2,
        z: 7,
      },
    },
  },
  decorations: [
    {
      kind: "tape",
      placement: {
        desktop: { top: "13%", left: "19%", width: "19%", rotate: 2, z: 9 },
        mobile: {
          top: "11%",
          left: "22%",
          width: "24%",
          rotate: 2,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
