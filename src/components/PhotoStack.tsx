import { useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";

import type { ContributionPhoto } from "../content/types";
import { PhotoFrame } from "./PhotoFrame";
import type { PhotoFrameVariant } from "./PhotoFrame";

type PhotoStackProps = {
  readonly photos: readonly [ContributionPhoto, ...ContributionPhoto[]];
  readonly variant: PhotoFrameVariant;
  readonly className?: string;
  readonly eager?: boolean;
};

export function PhotoStack({
  photos,
  variant,
  className,
  eager = false,
}: PhotoStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const multiple = photos.length > 1;
  const activePhoto = photos[activeIndex] ?? photos[0];

  const showNextPhoto = () => {
    if (multiple) {
      setActiveIndex((index) => (index + 1) % photos.length);
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!multiple) {
      return;
    }

    event.stopPropagation();
    showNextPhoto();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!multiple || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    showNextPhoto();
  };

  return (
    <div
      aria-label={
        multiple
          ? `Photo ${activeIndex + 1} of ${photos.length}. Tap to see the next photo.`
          : undefined
      }
      className="photo-stack"
      data-multiple={multiple || undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={multiple ? "button" : undefined}
      tabIndex={multiple ? 0 : undefined}
    >
      <PhotoFrame
        className={className}
        eager={eager}
        photo={activePhoto}
        variant={variant}
      />

      {multiple ? (
        <span aria-hidden="true" className="photo-stack__counter">
          {activeIndex + 1} / {photos.length} · tap
        </span>
      ) : null}
    </div>
  );
}
