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
        desktop: {
          top: "17%",
          left: "8%",
          width: "49%",
          height: "38%",
          rotate: -5,
          z: 5,
        },
        mobile: {
          top: "13%",
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
        desktop: {
          top: "12%",
          right: "5%",
          width: "38%",
          height: "29%",
          rotate: 5,
          z: 4,
        },
        mobile: {
          top: "9%",
          right: "4%",
          width: "40%",
          height: "20%",
          rotate: 6,
          z: 4,
        },
      },
    },
    {
      photoIndex: 2,
      variant: "polaroid",
      placement: {
        desktop: {
          right: "7%",
          bottom: "9%",
          width: "37%",
          height: "29%",
          rotate: 4,
          z: 6,
        },
        mobile: {
          top: "36%",
          right: "5%",
          width: "52%",
          height: "21%",
          rotate: 4,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "notebook",
    placement: {
      desktop: {
        bottom: "7%",
        left: "8%",
        width: "51%",
        height: "34%",
        rotate: 2,
        z: 7,
      },
      mobile: {
        bottom: "9%",
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
        desktop: {
          top: "15%",
          left: "23%",
          width: "19%",
          rotate: 2,
          z: 9,
        },
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
