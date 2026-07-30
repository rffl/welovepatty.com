import type { LayoutRecipe } from "../types";

export const tornNotebook = {
  id: "torn-notebook",
  surface: "paper",
  namePlacement: {
    desktop: { top: "6%", left: "12%", width: "42%", rotate: -1, z: 8 },
    mobile: { top: "4%", left: "11%", width: "58%", rotate: -1, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "polaroid",
      placement: {
        desktop: { top: "12%", right: "6%", width: "46%", height: "38%", rotate: 7, z: 5 },
        mobile: {
          top: "14%",
          right: "4%",
          width: "62%",
          height: "26%",
          rotate: 7,
          z: 5,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "snapshot",
      placement: {
        desktop: { top: "24%", left: "8%", width: "40%", height: "32%", rotate: -6, z: 6 },
        mobile: {
          top: "36%",
          left: "5%",
          width: "50%",
          height: "22%",
          rotate: -6,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "notebook",
    placement: {
      desktop: { bottom: "6%", left: "11%", width: "76%", height: "40%", rotate: 1, z: 7 },
      mobile: {
        bottom: "11%",
        left: "8%",
        width: "84%",
        height: "40%",
        rotate: 1,
        z: 7,
      },
    },
  },
  decorations: [
    {
      kind: "tape",
      placement: {
        desktop: { top: "10%", right: "17%", width: "19%", rotate: 4, z: 10 },
        mobile: {
          top: "12%",
          right: "16%",
          width: "23%",
          rotate: 4,
          z: 10,
        },
      },
    },
    {
      kind: "doodle",
      labelKey: "tornNotebookDoodle",
      treatment: "paper-label",
      placement: {
        desktop: { bottom: "2%", left: "5%", width: "29%", rotate: -8, z: 9 },
        mobile: {
          bottom: "2.5%",
          left: "5%",
          width: "52%",
          rotate: -8,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
