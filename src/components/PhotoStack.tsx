import { useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";

import type { ContributionPhoto } from "../content/types";
import { PhotoFrame } from "./PhotoFrame";
import type { PhotoFrameVariant } from "./PhotoFrame";
import { PhotoViewer } from "./PhotoViewer";

type PhotoStackProps = {
  readonly photos: readonly [ContributionPhoto, ...ContributionPhoto[]];
  readonly variant: PhotoFrameVariant;
  readonly className?: string;
  readonly eager?: boolean;
  readonly galleryPhotos?: readonly ContributionPhoto[];
  readonly galleryTitle?: string;
};

export function PhotoStack({
  photos,
  variant,
  className,
  eager = false,
  galleryPhotos,
  galleryTitle = "This memory",
}: PhotoStackProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const thumbnail = photos[0];
  const completeGallery = galleryPhotos ?? photos;
  const gallerySize = completeGallery.filter((photo) => photo.src).length;
  const canOpen = Boolean(thumbnail.src) && gallerySize > 0;
  const multiple = gallerySize > 1;

  const openViewer = () => {
    if (canOpen) {
      setViewerOpen(true);
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!canOpen) {
      return;
    }

    event.stopPropagation();
    openViewer();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!canOpen || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openViewer();
  };

  return (
    <>
      <div
        aria-label={
          canOpen
            ? `Open ${gallerySize} photograph${gallerySize === 1 ? "" : "s"} from ${galleryTitle}`
            : undefined
        }
        className="photo-stack"
        data-multiple={multiple || undefined}
        data-openable={canOpen || undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={canOpen ? "button" : undefined}
        tabIndex={canOpen ? 0 : undefined}
      >
        <PhotoFrame
          className={className}
          eager={eager}
          photo={thumbnail}
          variant={variant}
        />

        {canOpen ? (
          <span aria-hidden="true" className="photo-stack__counter">
            {multiple ? `open all ${gallerySize}` : "open photo"} ↗
          </span>
        ) : null}
      </div>

      {canOpen ? (
        <PhotoViewer
          initialPhoto={thumbnail}
          onRequestClose={() => setViewerOpen(false)}
          open={viewerOpen}
          photos={completeGallery}
          title={galleryTitle}
        />
      ) : null}
    </>
  );
}
