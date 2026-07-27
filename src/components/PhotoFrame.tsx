import { useState } from "react";

import type { ContributionPhoto, PhotoFocalPoint } from "../content/types";

export type PhotoFrameVariant =
  | "polaroid"
  | "snapshot"
  | "photobooth"
  | "film"
  | "postcard";

type PhotoFrameProps = {
  readonly photo: ContributionPhoto;
  readonly variant?: PhotoFrameVariant;
  readonly className?: string;
  readonly eager?: boolean;
};

const namedFocalPositions: Record<string, string | undefined> = {
  top: "50% 0%",
  center: "50% 50%",
  bottom: "50% 100%",
  left: "0% 50%",
  right: "100% 50%",
  "top-left": "0% 0%",
  "top-right": "100% 0%",
  "bottom-left": "0% 100%",
  "bottom-right": "100% 100%",
};

function focalPosition(focalPoint: PhotoFocalPoint | undefined): string {
  if (!focalPoint) {
    return "50% 50%";
  }

  return namedFocalPositions[focalPoint] ?? focalPoint;
}

export function PhotoFrame({
  photo,
  variant = "polaroid",
  className = "",
  eager = false,
}: PhotoFrameProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const showImage = Boolean(photo.src) && failedSrc !== photo.src;

  return (
    <figure
      className={`photo-frame photo-frame--${variant} ${className}`.trim()}
    >
      <div className="photo-frame__image-wrap">
        {showImage ? (
          <img
            alt={photo.alt}
            decoding="async"
            key={photo.src}
            loading={eager ? "eager" : "lazy"}
            onError={() => setFailedSrc(photo.src)}
            src={photo.src ?? undefined}
            style={{
              objectPosition: focalPosition(photo.focalPoint),
              transform: photo.flipHorizontal ? "scaleX(-1)" : undefined,
            }}
          />
        ) : (
          <div
            aria-label={photo.alt}
            className="photo-frame__placeholder"
            role="img"
          >
            <span aria-hidden="true" className="photo-frame__placeholder-star">
              ✦
            </span>
            <strong>Photo goes here</strong>
            <small>Suggested photo: {photo.alt}</small>
          </div>
        )}
      </div>

      {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
    </figure>
  );
}
