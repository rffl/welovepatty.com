import type {
  ContributionPhoto,
  PhotoFocalPoint,
  ScrapbookContent,
} from "./types";

function suppliedPhoto(
  friendName: string,
  fileName: string,
  focalPoint: PhotoFocalPoint = "center",
  flipHorizontal = false,
): ContributionPhoto {
  return {
    src: `/pictures/${friendName}/${fileName}`,
    alt: `${friendName} and Patty together in Melbourne`,
    focalPoint,
    flipHorizontal,
  };
}

function emptyPhoto(
  friendName: string,
  photoNumber: number,
): ContributionPhoto {
  return {
    src: null,
    alt: `Add photo ${photoNumber} of ${friendName} together with Patty`,
    focalPoint: "center",
  };
}

export const scrapbook = {
  title: "We Love You, Patty",
  subtitle: "Four years in Melbourne, and a lifetime of people who love you.",
  metadata: {
    description:
      "A handmade digital scrapbook celebrating Patty's four years in Melbourne.",
  },
  cover: {
    eyebrow: "Melbourne · 4 years",
    stamp: "PATTY\nMELBOURNE",
    insideMaker: "made by many hands",
    insideDedication: "for Patty, with love",
    insideFooter: "Melbourne · forever",
  },
  opening: {
    eyebrow: "Melbourne · four unforgettable years",
    title: "This city was better with you in it.",
    message:
      "Fifteen friends left you photographs, memories, wishes, and little pieces of Melbourne. Turn the pages slowly — this was made with all our love.",
    doodle: "turn slowly →",
    route: [
      "the first hello",
      "four years of us",
      "never really goodbye",
    ],
  },
  closing: {
    eyebrow: "Patty, one last thing…",
    title: "Never really goodbye.",
    message:
      "Melbourne will always carry traces of you, and every one of us carries a piece of the life we shared here. Wherever you go next, you take our love with you.",
    signature: "All of us, always",
    postscript: "P.S. Melbourne is still yours whenever you come home.",
  },
  thingsWeMiss: {
    eyebrow: "A very serious list",
    title: "Things we’ll miss about Patty",
    items: [
      "hobby singkatin kata random",
      "mam dpenyetz, yoi, dodee w patty",
      "bobo siang",
      "muka senyum terus 👍🏻😊👍🏻",
      "hal-hal random yang dia suka tb” ngmgin",
      "ASSSSBUNN pobeyi",
      "repeating indofood and doddee 24/7",
    ],
    footer: "the tiny Patty things that made Melbourne feel like ours ♥",
  },
  tableScatter: {
    tramTicket: "METCARD · 86",
    pencil: "Patty was here ♥",
  },
  recipeDecorationLabels: {
    tramTicketPass: "86 · MELBOURNE\nVALID FOREVER",
    tramTicketDoodle: "ding ding ↗",
    stickyNotesDoodle: "remember this bit! ↗",
    coffeeReceiptDoodle: "more trips together ↗",
    airmailEnvelopeRoute: "MEL → YOU",
    filmNegativeDoodle: "keep the outtakes",
    diaryEntryDoodle: "Dear diary…",
    postcardDoodle: "wish you could stay",
    tornNotebookDoodle: "do not forget this",
    eventTicketAdmission: "ADMIT TWO\nONE PERFECT NIGHT",
    photoboothDoodle: "again! again!",
  },
  contributions: [
    {
      id: "tiffany",
      friendName: "Tiffany",
      message:
        "So grateful to have u as a huuuuge part of what I can say are my best years so far. Still can’t believe how we got so close in such a short amount of time. But then again gak heran orang kyk kamu disayangg bgt sama orang2 sekitarr. Patty aku bakal selalu doain kamu the best, I hope you know how capable you are and how much I believe in you. I can’t wait to see where life takes u and I know our paths will cross again sooooon (as in no LDR soon). But until then eventhough were separated by distance ik our friendship will stay the same love u onik #FriendshipShouldBeFun",
      photos: [
        suppliedPhoto("Tiffany", "IMG_3187.jpg"),
        suppliedPhoto("Tiffany", "IMG_3188.jpg"),
        suppliedPhoto("Tiffany", "IMG_3189.jpg"),
        suppliedPhoto("Tiffany", "IMG_7803.jpg"),
        suppliedPhoto("Tiffany", "IMG_7813.jpg", "top"),
        suppliedPhoto("Tiffany", "IMG_8305.jpg"),
      ],
      layout: "map-foldout",
      accent: "tram-blue",
      melbourneDetail: "Best years, best people",
      location: "Melbourne",
      year: "2022–2026",
    },
    {
      id: "felicia",
      friendName: "Felicia",
      message:
        "hii patty, time really do fly by yaa, feels like wkt km ngmg mau for good kyk masi ada banyaaak waktu sm km. Melbourne won’t ever be the same without u, tp i’m rooting for youu and super excited for what the future holds for you back home. thankyou for being such a kind soul, i will forever ever be grateful for u love u and see u sooon 💛💛",
      photos: [
        suppliedPhoto(
          "Felicia",
          "40883ecf-41ac-47c0-9a17-40b0f1d33ba7.jpg",
          "top",
        ),
        suppliedPhoto(
          "Felicia",
          "8a9f3d36-4707-44dc-86aa-c9cc6080181d.jpg",
        ),
        suppliedPhoto(
          "Felicia",
          "96e75d4f-0ea7-4a57-9498-2340447ed2ed.jpg",
          "top",
        ),
      ],
      layout: "taped-polaroids",
      accent: "postmark-red",
      melbourneDetail: "Melbourne won’t ever be the same",
    },
    {
      id: "kayla",
      friendName: "Kayla",
      message:
        "woi patty kok cepet bgt tiba2 udah pulang?!?! gak nyangka makan dinner di seven star pocha for the first time malah jadi ke korea bareng 2 yrs later 🇰🇷🇰🇷 aku so grateful udah kenal kamu di melb 🍀 semoga ur new chapter di indo bakal jadi seseru itu and let go of semua worries kamu yaa. ur one of the best people i’ve met in melb (& my life!!) jadi trust me kamu bakal achieve so much in life and we’ll be on ur side through everything u do cayang ⭐️⭐️❤️ KETEMU LAGI OCTTT 😋😋",
      photos: [
        suppliedPhoto("Kayla", "IMG_1272.jpg", "top"),
        suppliedPhoto("Kayla", "IMG_1824.jpg", "center", true),
        suppliedPhoto("Kayla", "IMG_4889.jpg"),
      ],
      layout: "folded-letter",
      accent: "eucalyptus",
      melbourneDetail: "From Melbourne to Korea and beyond",
    },
    {
      id: "kathleen",
      friendName: "Kathleen",
      message:
        "hey lover 🩵 best of luck backhome yaa. safest flightt huhuu sorry i can’t send you off today. so sad that the day has comee and it’s time for you to go back home. wish we could’ve meet even sooner, but so grateful that i met u :) thank you for being the most thoughtful, caring, lovable, kindhearted girl ever. don’t worry of what’s coming in the future ya sayang! im sure you’ll do greaaat 🩵 know that God will always be alongside with you 🐰🩷 GRUMPI TOO! ily bb see you soon yaaaa GBU ALWAYS!",
      photos: [suppliedPhoto("Kathleen", "IMG_1743.jpg")],
      layout: "airmail-envelope",
      accent: "tram-blue",
      melbourneDetail: "Keep this letter close",
    },
    {
      id: "venezia",
      friendName: "Venezia",
      message:
        "Can’t believe u beneran pulang pattyy😭 It’s been a huge blessing to have a friend as considerate, kind and caring as u pakk!! Will miss your confusing storytelling and unique abbreviations so much (ayo gatty ngomong bener 2027). We’re all rooting for you from Melb, so all the best in indo yaa, may God continue to guide your path in life. Thankyou gatty udah mau jadi temennya bene, i love u king and will miss u loaaads❤️",
      photos: [
        suppliedPhoto("Venezia", "IMG_0464.jpg"),
        suppliedPhoto("Venezia", "IMG_0475.jpg", "top"),
        suppliedPhoto("Venezia", "IMG_1571.jpg"),
      ],
      layout: "torn-notebook",
      accent: "ticket-mustard",
      melbourneDetail: "From Bene, with love",
    },
    {
      id: "joceline",
      friendName: "Joceline",
      message:
        "patricia!! kind girl, good luck in indo 🤍 wish you could stay here longer but i know God has great plans for your future, and i cannot wait to see what the future has in store for you!! don’t worry too much yaa because everything will always work out. always pasti amin 🫶🏻 best wishes for you patty, jangan lose contact yaa, can’t wait to see you in october.",
      photos: [
        suppliedPhoto(
          "Joceline",
          "8662ca32-703f-4965-83be-96ee253b42f2.jpg",
          "top",
        ),
        suppliedPhoto(
          "Joceline",
          "8f4a5393-7457-4be5-8cc5-68bccc518cfc.jpg",
          "top",
        ),
        suppliedPhoto(
          "Joceline",
          "c482502a-3a91-4f9d-b452-193e95903be7.jpg",
        ),
      ],
      layout: "photobooth-strip",
      accent: "postmark-red",
      melbourneDetail: "See you in October",
    },
    {
      id: "velya",
      friendName: "Velya",
      message:
        "petiiiiii, safe flighttt and good luck in indo yaa, semoga di indo sukses”, semua nya lancar lancar yaa. agak kurang ngajar tiba-tiba pulang cmn kasih i 2 weeks notice, but it's okay i guess. i hope you achieve everything you’re striving for and I hope you find the happiness and peace you’ve been searching for. hidup dibawa santai aja bro, semua pasti ada jalan nya.\n\nwish you all the best peti, kalo aku chat tolong jawab cepet ya jangan di kacangin, jangan lupain saya. see you in october brodie, awas aja ga nyari.\n\nlove uuu, and God bless you 🤍",
      photos: [
        suppliedPhoto(
          "Velya",
          "E968006B-7035-4247-86CD-F3FB7A4940DB.jpg",
          "top",
        ),
        suppliedPhoto("Velya", "IMG_0254.jpg", "top"),
        suppliedPhoto("Velya", "IMG_5948.jpg", "top"),
      ],
      layout: "tram-ticket",
      accent: "tram-blue",
      melbourneDetail: "See you in October, brodie",
    },
    {
      id: "naomi",
      friendName: "Naomi",
      message:
        "paciiiii 🥹🥹🥹 will miss you lots! i believe God has a wonderful plan for you in Indonesia. trust in Him and continue doing your best. stay healthy and happy always. will forever cherish our memories together in Melbourne. we will go on more trips together in the future! let’s work hard until then. God bless you",
      photos: [
        suppliedPhoto(
          "Naomi",
          "0ba2d61d-7ea5-41e8-b3bc-fc2795c05ff2.jpg",
        ),
        suppliedPhoto(
          "Naomi",
          "914cf8c7-5870-446b-a867-572bae1b48d3.jpg",
          "top",
        ),
        suppliedPhoto("Naomi", "DSC03587.jpg"),
        suppliedPhoto("Naomi", "IMG_0667.jpg"),
        suppliedPhoto("Naomi", "IMG_2889.jpg"),
        suppliedPhoto("Naomi", "IMG_3825.jpg"),
        suppliedPhoto("Naomi", "IMG_4286.jpg"),
      ],
      layout: "coffee-receipt",
      accent: "ticket-mustard",
      melbourneDetail: "More trips are waiting",
    },
    {
      id: "keren",
      friendName: "Keren",
      message:
        "hi cipat!!!! wishing you all the best in your journey back to indo 😞 im very glad to have met you, our friend group won’t be the same without you ciii :( with God by your side, i know you can achieve everything you’ve been working towards and you can continue to stay healthy and happy as he has a plan set out for youuu. come back soon so we can go on another hiking trip!!!! and i hope we can visit you too in indoooo!! i will miss my sleepy buddy, God bless you always",
      photos: [
        suppliedPhoto(
          "Keren",
          "8c0c9d47-6944-42b3-adb3-6fbd4ea1c9d1.jpg",
        ),
        suppliedPhoto("Keren", "IMG_0104.jpg", "top"),
        suppliedPhoto("Keren", "IMG_4679.jpg", "top"),
        suppliedPhoto("Keren", "IMG_6432.jpg", "top"),
        suppliedPhoto(
          "Keren",
          "temp_image_09DB0B65-4637-48E1-AA30-C4C4B1EC89C6.jpg",
        ),
      ],
      layout: "postcard",
      accent: "postmark-red",
      melbourneDetail: "For my sleepy buddy",
    },
    {
      id: "chloe",
      friendName: "Chloe",
      message:
        "Hello cicii!! safe flight and semangat terus di Indo yaa. aku gatau mau bilang apa tapi, sehat sehat terus, makasih untuk 6 bulannya menjadi roomie, maaf ngerepotin cici😅. POKOKNYA ALL THE BEST FOR CICI, bakal kangen banget sama trip-trip kita nginep and hikingg. Lastly, Ci, always hold on tightly to God in every season of your life. God Bless you Ciii 🫶🏼",
      photos: [
        suppliedPhoto(
          "Chloe",
          "A4529596-B706-4B71-B4FC-CB31FCBD3120.jpg",
          "center",
          true,
        ),
        suppliedPhoto("Chloe", "IMG_0065.jpg"),
        suppliedPhoto("Chloe", "IMG_0769.jpg", "top"),
        suppliedPhoto("Chloe", "IMG_2023.jpg"),
      ],
      layout: "pressed-flower",
      accent: "eucalyptus",
      melbourneDetail: "Six months of roomie memories",
    },
    {
      id: "evelyn",
      friendName: "Evelyn",
      message: "",
      photos: [
        emptyPhoto("Evelyn", 1),
        emptyPhoto("Evelyn", 2),
        emptyPhoto("Evelyn", 3),
      ],
      layout: "film-negative",
      accent: "tram-blue",
      melbourneDetail: "",
    },
    {
      id: "haggai",
      friendName: "Haggai",
      message: "",
      photos: [
        suppliedPhoto(
          "Haggai",
          "408eeb2e-06ef-4dff-bbaf-b99bcc03717c.jpg",
        ),
        suppliedPhoto(
          "Haggai",
          "48e4b12c-cba2-4f29-ae43-c79ac6d1ac77.jpg",
        ),
        suppliedPhoto(
          "Haggai",
          "F61AF9E7-2610-4281-8389-5523DAB359E1.jpg",
          "top",
        ),
        suppliedPhoto("Haggai", "IMG_0228.jpg", "top"),
      ],
      layout: "sticky-notes",
      accent: "ticket-mustard",
      melbourneDetail: "",
    },
    {
      id: "raja",
      friendName: "Raja",
      message: "",
      photos: [emptyPhoto("Raja", 1), emptyPhoto("Raja", 2)],
      layout: "diary-entry",
      accent: "eucalyptus",
      melbourneDetail: "",
    },
    {
      id: "raffel",
      friendName: "Raffel",
      message:
        "PATTYY!!!!!!!!!!!! Patttttt aku merasa sedih kamu balik, karena dari awal aku expect kamu dan netaa akan bersama sama terus sampai visa kamu habis. Tapi setelah mendengar alasan dari kamu, aku berusaha untuk mengerti dan percaya kalau kamu tau yang terbaik. Terima kasih banyak udah mau jadi teman aku selama aku disini, sering makan bareng sama netaaaa, sering ngobrol bareng, hiking bareng, jemput netaa bareng, jalan jalan bareng, dan banyak hal bareng lainnya. All the best untuk semua plan kamu kedepannya, lancar untuk usaha dan bisnis dan pekerjaan yang akan kamu jalani, PLIS MAMPIR LAGI BALIK KE MELBOURNE, kita juga pasti akan kunjungin kamu ke semarang. Aku berdoa semua yang kamu buat akan berhasil, masa depan yang indah, penuh dengan damai sejahtera dan pengharapan, rancangan yang membawa kebaikan, hal yang kamu butuhkan semua disediakan Tuhan. PATTTTTTT semangat terus! God Bless!",
      photos: [
        suppliedPhoto("Raffel", "IMG_1081.jpg", "top"),
        suppliedPhoto("Raffel", "IMG_1950.jpg"),
        suppliedPhoto("Raffel", "IMG_1957.jpg", "top"),
      ],
      layout: "event-ticket",
      accent: "postmark-red",
      melbourneDetail: "All the Melbourne things together",
    },
    {
      id: "nethanya",
      friendName: "Nethanya",
      message:
        "Duoo, best friend, sister, twinnie, soulmate, that's what you are to me. The first time we really interacted was back in college, 2022. I was panicking, running to our college library to print the micro econ tutorial sheets, and you were already there, trying to print the same ones. We didn't really know each other back then, but we were both panicking enough that we decided to help each other out. When class started, little did we know we'd printed the wrong sheets. That's when I knew, you are my duo idiot. From then on, we became inseparable.\n\nI loveee loveee uuu. You leaving is my biggest heartbreak 💔. I told you once, if there were a time machine, I'd go back and redo it all over again with you. I watched you evolve from someone socially awkward, who didn't enjoy talking to people, into everyone’s favorite person. You've grown so much, I couldn't be more proud. I'm so excited to see more blessings come into your life ce.\n\nThank you so much for being my friend, for being the person I love the most, for making me confident enough to show love to the people I really care about, for encouraging me to be myself, for always giving me advice when you knew I needed it, for being there for me at my lowest, for standing up for me when I had no one else to count on, for being the first person I ever felt secure with, for being the person I'll never get tired of saying “I miss you” to, and thank you for choosing me to be your best friend.\n\nIii lovee lovee uuu nonnn 💗🐓. I love you, I love Semarang, and I miss you, you are the best. I'll miss taking care of you, cooking for you, and marahin you. 🫀 May only good things happen to you, and may you always remain part of my life.\n\nForever and always,\nNH",
      photos: [
        suppliedPhoto("Nethanya", "IMG_6871.jpg"),
        suppliedPhoto("Nethanya", "IMG_9620.jpg", "top"),
        suppliedPhoto("Nethanya", "IMG_6713.jpg", "top"),
      ],
      layout: "final-love-letter",
      accent: "tram-blue",
      feature: "best-friend",
      melbourneDetail: "Duo idiots since 2022 · best friends for life",
      location: "Melbourne",
      year: "2022–forever",
    },
  ],
} as const satisfies ScrapbookContent;
