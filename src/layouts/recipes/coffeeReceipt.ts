import type { LayoutRecipe } from "../types";

export const coffeeReceipt = {
  id: "coffee-receipt",
  surface: "kraft",
  namePlacement: {
    desktop: { top: "6%", right: "8%", width: "45%", rotate: 4, z: 8 },
    mobile: { top: "4%", right: "6%", width: "58%", rotate: 3, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "polaroid",
      captionLayer: { position: "bottom" },
      placement: {
        desktop: {
          top: "11%",
          left: "6%",
          width: "48%",
          height: "39%",
          rotate: -6,
          z: 6,
        },
        mobile: {
          top: "13%",
          left: "4%",
          width: "62%",
          height: "25%",
          rotate: -6,
          z: 6,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "snapshot",
      captionLayer: { position: "bottom" },
      placement: {
        desktop: {
          top: "25%",
          right: "6%",
          width: "38%",
          height: "29%",
          rotate: 7,
          z: 5,
        },
        mobile: {
          top: "30%",
          right: "4%",
          width: "48%",
          height: "21%",
          rotate: 7,
          z: 5,
        },
      },
    },
    {
      photoIndex: 2,
      variant: "polaroid",
      captionLayer: { position: "bottom" },
      placement: {
        desktop: {
          bottom: "11%",
          left: "5%",
          width: "31%",
          height: "34%",
          rotate: 5,
          z: 4,
        },
        mobile: {
          top: "40%",
          left: "4%",
          width: "42%",
          height: "17%",
          rotate: 5,
          z: 4,
        },
      },
    },
  ],
  message: {
    variant: "receipt",
    placement: {
      desktop: {
        bottom: "6%",
        left: "27%",
        width: "49%",
        height: "48%",
        rotate: -1,
        z: 7,
      },
      mobile: {
        bottom: "8%",
        left: "14%",
        width: "72%",
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
        desktop: {
          bottom: "50%",
          left: "40%",
          width: "18%",
          rotate: 2,
          z: 10,
        },
        mobile: {
          top: "64%",
          left: "38%",
          width: "24%",
          rotate: 2,
          z: 10,
        },
      },
    },
    {
      kind: "doodle",
      labelKey: "coffeeReceiptDoodle",
      treatment: "paper-label",
      placement: {
        desktop: {
          bottom: "4%",
          right: "4%",
          width: "33%",
          rotate: -6,
          z: 9,
        },
        mobile: {
          bottom: "2.5%",
          right: "3%",
          width: "44%",
          rotate: -6,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
