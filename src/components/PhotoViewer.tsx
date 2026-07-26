import { useEffect, useId, useMemo, useRef, useState } from "react";
import type {
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
} from "react";

import type { ContributionPhoto } from "../content/types";

type SuppliedPhoto = ContributionPhoto & {
  readonly src: string;
};

type PhotoViewerProps = {
  readonly initialPhoto: ContributionPhoto;
  readonly onRequestClose: () => void;
  readonly open: boolean;
  readonly photos: readonly ContributionPhoto[];
  readonly title: string;
};

type PointerStart = {
  readonly id: number;
  readonly x: number;
  readonly y: number;
};

function hasPhotoSource(photo: ContributionPhoto): photo is SuppliedPhoto {
  return Boolean(photo.src);
}

export function PhotoViewer({
  initialPhoto,
  onRequestClose,
  open,
  photos,
  title,
}: PhotoViewerProps) {
  const availablePhotos = useMemo(
    () => photos.filter(hasPhotoSource),
    [photos],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pointerStartRef = useRef<PointerStart | null>(null);
  const suppressClickRef = useRef(false);
  const titleId = useId();
  const multiple = availablePhotos.length > 1;
  const activePhoto = availablePhotos[activeIndex] ?? availablePhotos[0];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && availablePhotos.length > 0) {
      const requestedIndex = availablePhotos.findIndex(
        (photo) => photo === initialPhoto || photo.src === initialPhoto.src,
      );

      setActiveIndex(requestedIndex >= 0 ? requestedIndex : 0);
      setZoomed(false);

      if (!dialog.open) {
        dialog.showModal();
        closeButtonRef.current?.focus();
      }

      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [availablePhotos, initialPhoto, open]);

  const changePhoto = (direction: -1 | 1) => {
    if (!multiple) {
      return;
    }

    setActiveIndex((index) => {
      const nextIndex = index + direction;

      if (nextIndex < 0) {
        return availablePhotos.length - 1;
      }

      return nextIndex % availablePhotos.length;
    });
    setZoomed(false);
  };

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      onRequestClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!multiple) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changePhoto(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      changePhoto(1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (!multiple || event.button !== 0) {
      return;
    }

    pointerStartRef.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
    suppressClickRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;

    if (!start || start.id !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    if (Math.abs(deltaX) >= 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      event.preventDefault();
      suppressClickRef.current = true;
      changePhoto(deltaX < 0 ? 1 : -1);
    }
  };

  const handlePhotoClick = () => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }

    setZoomed((current) => !current);
  };

  if (!activePhoto) {
    return null;
  }

  return (
    <dialog
      aria-labelledby={titleId}
      className="photo-viewer"
      onCancel={(event) => {
        event.preventDefault();
        onRequestClose();
      }}
      onClick={handleDialogClick}
      onClose={() => {
        if (open) {
          onRequestClose();
        }
      }}
      onKeyDown={handleKeyDown}
      ref={dialogRef}
    >
      <section className="photo-viewer__surface">
        <header className="photo-viewer__header">
          <div>
            <span>photographs from</span>
            <h2 id={titleId}>{title}</h2>
          </div>

          <button
            aria-label="Close enlarged photographs"
            className="photo-viewer__close"
            onClick={onRequestClose}
            ref={closeButtonRef}
            type="button"
          >
            Close ×
          </button>
        </header>

        <div
          className="photo-viewer__stage"
          data-single={!multiple || undefined}
        >
          {multiple ? (
            <button
              aria-label="Previous photograph"
              className="photo-viewer__arrow photo-viewer__arrow--previous"
              onClick={() => changePhoto(-1)}
              type="button"
            >
              ←
            </button>
          ) : null}

          <button
            aria-label={zoomed ? "Fit complete photograph" : "Zoom photograph"}
            className="photo-viewer__image-viewport"
            data-zoomed={zoomed || undefined}
            onClick={handlePhotoClick}
            onPointerCancel={() => {
              pointerStartRef.current = null;
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            type="button"
          >
            <span className="photo-viewer__photo">
              <img
                alt={activePhoto.alt}
                className={
                  activePhoto.flipHorizontal
                    ? "photo-viewer__image photo-viewer__image--flipped"
                    : "photo-viewer__image"
                }
                decoding="async"
                draggable={false}
                key={activePhoto.src}
                src={activePhoto.src}
              />
            </span>
          </button>

          {multiple ? (
            <button
              aria-label="Next photograph"
              className="photo-viewer__arrow photo-viewer__arrow--next"
              onClick={() => changePhoto(1)}
              type="button"
            >
              →
            </button>
          ) : null}
        </div>

        <footer className="photo-viewer__footer">
          <strong>
            {activeIndex + 1} / {availablePhotos.length}
          </strong>
          <span>
            {zoomed ? "tap to see the whole photo" : "tap photo to zoom"}
            {multiple ? " · swipe for more" : ""}
          </span>
        </footer>
      </section>
    </dialog>
  );
}
