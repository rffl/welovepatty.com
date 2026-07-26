import type { Contribution, ScrapbookContent } from "../content/types";

export type OpeningPage = {
  readonly id: "opening";
  readonly kind: "opening";
  readonly content: ScrapbookContent["opening"];
};

export type ContributionPage = {
  readonly id: string;
  readonly kind: "contribution";
  readonly contribution: Contribution;
};

export type BestFriendPhotoPage = {
  readonly id: string;
  readonly kind: "best-friend-photos";
  readonly contribution: Contribution;
};

export type BestFriendLetterPage = {
  readonly id: string;
  readonly kind: "best-friend-letter";
  readonly contribution: Contribution;
};

export type ThingsWeMissPage = {
  readonly id: "things-we-miss";
  readonly kind: "things-we-miss";
  readonly content: ScrapbookContent["thingsWeMiss"];
};

export type ClosingPage = {
  readonly id: "closing";
  readonly kind: "closing";
  readonly content: ScrapbookContent["closing"];
};

export type ScrapbookPage =
  | OpeningPage
  | ContributionPage
  | BestFriendPhotoPage
  | BestFriendLetterPage
  | ThingsWeMissPage
  | ClosingPage;

export type DesktopSpread = {
  readonly index: number;
  readonly pages:
    | readonly [ScrapbookPage]
    | readonly [ScrapbookPage, ScrapbookPage];
};

export function buildPages(content: ScrapbookContent): readonly ScrapbookPage[] {
  if (content.contributions.length !== 15) {
    throw new Error(
      `The scrapbook requires exactly 15 contributions; received ${content.contributions.length}.`,
    );
  }

  const ids = new Set(content.contributions.map((item) => item.id));

  if (ids.size !== content.contributions.length) {
    throw new Error("Every contribution id must be unique.");
  }

  if (
    content.contributions.some(
      (item) =>
        item.id === "opening" ||
        item.id === "things-we-miss" ||
        item.id === "closing",
    )
  ) {
    throw new Error(
      "Contribution ids cannot use reserved scrapbook page ids.",
    );
  }

  const featuredContributions = content.contributions.filter(
    (contribution) => contribution.feature === "best-friend",
  );

  if (featuredContributions.length !== 1) {
    throw new Error(
      `The scrapbook requires exactly one best-friend feature; received ${featuredContributions.length}.`,
    );
  }

  const contributionPages: ScrapbookPage[] = [];

  content.contributions.forEach((contribution) => {
    if (contribution.feature === "best-friend") {
      contributionPages.push(
        {
          id: `${contribution.id}-photos`,
          kind: "best-friend-photos",
          contribution,
        },
        {
          id: `${contribution.id}-letter`,
          kind: "best-friend-letter",
          contribution,
        },
      );
      return;
    }

    contributionPages.push({
      id: contribution.id,
      kind: "contribution",
      contribution,
    });
  });

  const pages: ScrapbookPage[] = [
    { id: "opening", kind: "opening", content: content.opening },
    ...contributionPages,
    {
      id: "things-we-miss",
      kind: "things-we-miss",
      content: content.thingsWeMiss,
    },
    { id: "closing", kind: "closing", content: content.closing },
  ];

  return pages;
}

export function buildDesktopSpreads(
  pages: readonly ScrapbookPage[],
): readonly DesktopSpread[] {
  const opening = pages[0];

  if (!opening || opening.kind !== "opening") {
    throw new Error("The first scrapbook page must be the opening page.");
  }

  const spreads: DesktopSpread[] = [{ index: 0, pages: [opening] }];
  const remaining = pages.slice(1);

  for (let index = 0; index < remaining.length; index += 2) {
    const left = remaining[index];
    const right = remaining[index + 1];

    if (!left) {
      break;
    }

    spreads.push({
      index: spreads.length,
      pages: right ? [left, right] : [left],
    });
  }

  return spreads;
}

export function desktopSpreadForPageIndex(pageIndex: number): number {
  assertNonNegativeSafeInteger(
    pageIndex,
    "Page index must be a non-negative safe integer.",
  );

  return pageIndex === 0 ? 0 : Math.ceil(pageIndex / 2);
}

export function firstPageIndexForDesktopSpread(spreadIndex: number): number {
  assertNonNegativeSafeInteger(
    spreadIndex,
    "Spread index must be a non-negative safe integer.",
  );

  return spreadIndex === 0 ? 0 : spreadIndex * 2 - 1;
}

function assertNonNegativeSafeInteger(value: number, message: string): void {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new RangeError(message);
  }
}
