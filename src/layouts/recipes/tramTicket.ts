import type { LayoutRecipe } from "../types";

export const tramTicket = {
  id: "tram-ticket",
  surface: "graph",
  namePlacement: {
    desktop: { top: "6%", left: "8%", width: "42%", rotate: -3, z: 8 },
    mobile: { top: "4%", left: "6%", width: "58%", rotate: -3, z: 8 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "snapshot",
      placement: {
        desktop: {
          top: "15%",
          right: "7%",
          width: "49%",
          height: "36%",
          rotate: 6,
          z: 5,
        },
        mobile: {
          top: "20%",
          right: "4%",
          width: "66%",
          height: "25%",
          rotate: 6,
          z: 5,
        },
      },
    },
    {
      photoIndex: 1,
      variant: "polaroid",
      captionLayer: { position: "bottom" },
      placement: {
        desktop: {
          top: "28%",
          left: "7%",
          width: "41%",
          height: "34%",
          rotate: -7,
          z: 6,
        },
        mobile: {
          top: "42%",
          left: "4%",
          width: "52%",
          height: "20%",
          rotate: -7,
          z: 6,
        },
      },
    },
  ],
  message: {
    variant: "ticket",
    placement: {
      desktop: {
        bottom: "7%",
        left: "14%",
        width: "72%",
        height: "35%",
        rotate: 1,
        z: 7,
      },
      mobile: {
        bottom: "9%",
        left: "7%",
        width: "85%",
        height: "38%",
        rotate: 1,
        z: 7,
      },
    },
  },
  decorations: [
    {
      kind: "airmail",
      labelKey: "tramTicketPass",
      placement: {
        desktop: {
          top: "8%",
          left: "49%",
          width: "36%",
          height: "10%",
          rotate: -4,
          z: 9,
        },
        mobile: {
          top: "12%",
          right: "4%",
          width: "42%",
          height: "8%",
          rotate: -4,
          z: 9,
        },
      },
    },
    {
      kind: "doodle",
      labelKey: "tramTicketDoodle",
      treatment: "paper-label",
      placement: {
        desktop: {
          bottom: "3%",
          left: "5%",
          width: "26%",
          rotate: -6,
          z: 9,
        },
        mobile: {
          bottom: "2.5%",
          right: "3%",
          width: "46%",
          rotate: -6,
          z: 9,
        },
      },
    },
  ],
} as const satisfies LayoutRecipe;
