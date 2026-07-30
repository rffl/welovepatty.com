import type { LayoutRecipe } from "../types";

export const eventTicket = {
  id: "event-ticket",
  surface: "kraft",
  namePlacement: {
    desktop: { top: "6%", right: "8%", width: "44%", rotate: 3, z: 9 },
    mobile: { top: "4%", right: "5%", width: "52%", rotate: 3, z: 9 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "snapshot",
      placement: {
        desktop: { top: "12%", left: "6%", width: "48%", height: "36%", rotate: -6, z: 5 },
        mobile: { top: "13%", left: "5%", width: "66%", height: "26%", rotate: -6, z: 5 },
      },
    },
    {
      photoIndex: 1,
      variant: "polaroid",
      captionLayer: { position: "top" },
      placement: {
        desktop: { top: "24%", right: "6%", width: "40%", height: "32%", rotate: 7, z: 6 },
        mobile: { top: "36%", right: "4%", width: "52%", height: "24%", rotate: 7, z: 6 },
      },
    },
  ],
  message: {
    variant: "ticket",
    placement: {
      desktop: { bottom: "7%", left: "11%", width: "77%", height: "40%", rotate: -1, z: 7 },
      mobile: { bottom: "8%", left: "7%", width: "85%", height: "38%", rotate: -1, z: 7 },
    },
  },
  decorations: [
    {
      kind: "tag",
      labelKey: "eventTicketAdmission",
      placement: {
        desktop: { top: "3%", left: "3%", width: "30%", height: "9%", rotate: -4, z: 8 },
        mobile: { top: "2%", left: "3%", width: "36%", height: "9%", rotate: -4, z: 8 },
      },
    },
  ],
} as const satisfies LayoutRecipe;
