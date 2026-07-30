import type { LayoutRecipe } from "../types";

export const stickyNotes = {
  id: "sticky-notes",
  surface: "graph",
  namePlacement: {
    desktop: { top: "6%", right: "7%", width: "43%", rotate: 4, z: 9 },
    mobile: { top: "4%", right: "6%", width: "59%", rotate: 4, z: 9 },
  },
  photos: [
    {
      photoIndex: 0,
      variant: "snapshot",
      placement: {
        desktop: { top: "11%", left: "6%", width: "48%", height: "35%", rotate: -6, z: 5 },
        mobile: { top: "12%", left: "5%", width: "66%", height: "27%", rotate: -6, z: 5 },
      },
    },
    {
      photoIndex: 1,
      variant: "polaroid",
      captionLayer: { position: "top" },
      placement: {
        desktop: { top: "22%", right: "6%", width: "40%", height: "31%", rotate: 7, z: 6 },
        mobile: { top: "32%", right: "4%", width: "52%", height: "24%", rotate: 7, z: 6 },
      },
    },
    {
      photoIndex: 2,
      variant: "snapshot",
      whenMessageEmpty: true,
      placement: {
        desktop: { bottom: "12%", left: "20%", width: "54%", height: "31%", rotate: 2, z: 8 },
        mobile: { bottom: "8%", left: "15%", width: "70%", height: "30%", rotate: 2, z: 8 },
      },
    },
  ],
  message: {
    variant: "sticky",
    placement: {
      desktop: { bottom: "7%", left: "14%", width: "64%", height: "42%", rotate: -3, z: 7 },
      mobile: { bottom: "9%", left: "8%", width: "84%", height: "38%", rotate: -3, z: 7 },
    },
  },
  decorations: [
    {
      kind: "tape",
      placement: {
        desktop: { top: "11%", left: "20%", width: "20%", rotate: -1, z: 10 },
        mobile: { top: "11%", left: "21%", width: "25%", rotate: -1, z: 10 },
      },
    },
    {
      kind: "heart",
      placement: {
        desktop: { bottom: "1.5%", right: "3%", width: "11%", rotate: 8, z: 9 },
        mobile: { bottom: "0.6%", right: "2.5%", width: "13%", rotate: 8, z: 9 },
      },
    },
    {
      kind: "doodle",
      labelKey: "stickyNotesDoodle",
      treatment: "memory-callout",
      placement: {
        desktop: { top: "43%", left: "5%", width: "31%", rotate: -8, z: 8 },
        mobile: { top: "56.5%", left: "4%", width: "50%", rotate: -8, z: 9 },
      },
    },
  ],
} as const satisfies LayoutRecipe;
