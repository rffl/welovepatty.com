import { Fragment, useId } from "react";
import type { CSSProperties } from "react";

import { Decoration } from "../components/Decoration";
import { OpenableNote } from "../components/OpenableNote";
import { PhotoStack } from "../components/PhotoStack";
import type { ContributionPhoto } from "../content/types";
import type {
  Contribution,
  RecipeDecorationLabels,
} from "../content/types";
import type {
  LayoutRecipe,
  PiecePlacement,
  ResponsiveMode,
} from "./types";

type ContributionLayoutProps = {
  readonly contribution: Contribution;
  readonly decorationLabels: RecipeDecorationLabels;
  readonly recipe: LayoutRecipe;
  readonly mode: ResponsiveMode;
  readonly eagerPhotos?: boolean;
};

type PieceStyle = CSSProperties & {
  "--piece-rotation": string;
  "--rotation": string;
  "--piece-z": number;
};

function pieceStyle(
  placement: PiecePlacement,
  z = placement.z ?? 1,
): PieceStyle {
  const rotation = `${placement.rotate ?? 0}deg`;

  return {
    top: placement.top,
    right: placement.right,
    bottom: placement.bottom,
    left: placement.left,
    width: placement.width,
    height: placement.height,
    "--piece-rotation": rotation,
    "--rotation": rotation,
    "--piece-z": z,
  };
}

const surfaceClasses = {
  paper: "paper-surface",
  light: "paper-surface paper-surface--light",
  graph: "paper-surface paper-surface--graph",
  kraft: "paper-surface paper-surface--kraft",
  black: "paper-surface paper-surface--black",
} as const;

function photosForRecipeSlot(
  contribution: Contribution,
  slotIndex: number,
  photoIndex: number,
  slotCount: number,
): readonly [ContributionPhoto, ...ContributionPhoto[]] {
  const photos = contribution.photos.filter(
    (_, index) =>
      index === photoIndex ||
      (index >= slotCount && (index - slotCount) % slotCount === slotIndex),
  );

  if (photos.length > 0) {
    return photos as [ContributionPhoto, ...ContributionPhoto[]];
  }

  return [
    {
      src: null,
      alt: `Add another photo of ${contribution.friendName} with Patty`,
      focalPoint: "center",
    },
  ];
}

export function ContributionLayout({
  contribution,
  decorationLabels,
  recipe,
  mode,
  eagerPhotos = false,
}: ContributionLayoutProps) {
  const nameId = useId();

  return (
    <article
      aria-labelledby={nameId}
      className={`contribution-layout ${surfaceClasses[recipe.surface]}`}
      data-accent={contribution.accent}
      data-layout={recipe.id}
    >
      <div
        className="contribution-piece contribution-piece--name"
        style={pieceStyle(recipe.namePlacement[mode])}
      >
        <span className="contribution-name__from">from</span>
        <h2 className="contribution-name" id={nameId}>
          {contribution.friendName}
        </h2>
      </div>

      {recipe.photos.map((piece, index) => {
        const photos = photosForRecipeSlot(
          contribution,
          index,
          piece.photoIndex,
          recipe.photos.length,
        );
        const photo = photos[0];
        const placement = piece.placement[mode];
        const captionPosition = piece.captionLayer?.position;
        const liftedCaption = captionPosition ? photo.caption : undefined;
        const captionZ =
          Math.max(
            placement.z ?? 1,
            recipe.message.placement[mode].z ?? 1,
          ) + 1;

        return (
          <Fragment key={`${contribution.id}-photo-${index}`}>
            <div
              className="contribution-piece contribution-piece--photo"
              style={pieceStyle(placement)}
            >
              <PhotoStack
                className={
                  captionPosition
                    ? `photo-frame--caption-lifted photo-frame--caption-lifted-${captionPosition}`
                    : undefined
                }
                eager={eagerPhotos}
                photos={photos}
                variant={piece.variant}
              />
            </div>

            {liftedCaption && captionPosition ? (
              <div
                aria-hidden="true"
                className={`contribution-piece contribution-piece--lifted-caption contribution-piece--lifted-caption-${captionPosition} contribution-piece--lifted-caption-${piece.variant}`}
                style={pieceStyle(placement, captionZ)}
              >
                <span className="contribution-lifted-caption__strip">
                  {liftedCaption}
                </span>
              </div>
            ) : null}
          </Fragment>
        );
      })}

      <div
        className="contribution-piece contribution-piece--message"
        style={pieceStyle(recipe.message.placement[mode])}
      >
        <OpenableNote
          detail={contribution.melbourneDetail}
          message={contribution.message}
          title={contribution.friendName}
          variant={recipe.message.variant}
        />
      </div>

      {recipe.decorations.map((piece, index) => (
        <Decoration
          className={`contribution-piece contribution-piece--decoration${
            piece.treatment
              ? ` contribution-piece--decoration-${piece.treatment}`
              : ""
          }`}
          key={`${contribution.id}-decoration-${index}`}
          kind={piece.kind}
          label={piece.labelKey ? decorationLabels[piece.labelKey] : undefined}
          style={pieceStyle(piece.placement[mode])}
        />
      ))}
    </article>
  );
}
