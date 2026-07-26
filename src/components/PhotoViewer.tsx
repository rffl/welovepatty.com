import { useEffect, useId, useMemo, useRef, useState } from "react";
import type {
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  TransitionEvent,
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

type PhotoDirection = -1 | 1;
type SettleDirection = PhotoDirection | 0;

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
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [settleDirection, setSettleDirection] =
    useState<SettleDirection | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dragOffsetRef = useRef(0);
  const pointerStartRef = useRef<PointerStart | null>(null);
  const suppressClickRef = useRef(false);
  const titleId = useId();
  const multiple = availablePhotos.length > 1;
  const activePhoto = availablePhotos[activeIndex] ?? availablePhotos[0];
  const canGoPrevious = activeIndex > 0;
  const canGoNext = activeIndex < availablePhotos.length - 1;

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
      dragOffsetRef.current = 0;
      pointerStartRef.current = null;
      suppressClickRef.current = false;
      setDragOffset(0);
      setDragging(false);
      setSettleDirection(null);
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

  const settlePhoto = (direction: PhotoDirection) => {
    const canMove = direction === -1 ? canGoPrevious : canGoNext;

    if (!multiple || !canMove || dragging || settleDirection !== null) {
      return;
    }

    setSettleDirection(direction);
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
      settlePhoto(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      settlePhoto(1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (
      !multiple ||
      event.button !== 0 ||
      dragging ||
      settleDirection !== null
    ) {
      return;
    }

    pointerStartRef.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
    dragOffsetRef.current = 0;
    suppressClickRef.current = false;
    setDragOffset(0);
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStartRef.current;

    if (!start || start.id !== event.pointerId) {
      return;
    }

    const rawOffset = event.clientX - start.x;
    const movingPastFirst = rawOffset > 0 && !canGoPrevious;
    const movingPastLast = rawOffset < 0 && !canGoNext;
    const nextOffset =
      movingPastFirst || movingPastLast ? rawOffset * 0.16 : rawOffset;
    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);

    if (Math.abs(nextOffset) >= 8) {
      suppressClickRef.current = true;
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;

    if (!start || start.id !== event.pointerId) {
      return;
    }

    const rawDeltaX = event.clientX - start.x;
    const deltaX = dragOffsetRef.current;
    const deltaY = event.clientY - start.y;
    const threshold = Math.min(84, Math.max(42, window.innerWidth * 0.14));
    const meaningfulDrag = Math.hypot(rawDeltaX, deltaY) >= 8;
    const requestedDirection: PhotoDirection = rawDeltaX < 0 ? 1 : -1;
    const canMove =
      requestedDirection === -1 ? canGoPrevious : canGoNext;
    const changesPhoto =
      canMove &&
      Math.abs(rawDeltaX) >= threshold &&
      Math.abs(rawDeltaX) > Math.abs(deltaY);

    dragOffsetRef.current = deltaX;
    setDragOffset(deltaX);
    setDragging(false);

    if (meaningfulDrag) {
      suppressClickRef.current = true;
    }

    if (changesPhoto) {
      event.preventDefault();
      setSettleDirection(requestedDirection);
    } else if (rawDeltaX !== 0) {
      setSettleDirection(0);
    }
  };

  const handlePointerCancel = () => {
    const wasDisplaced = dragOffsetRef.current !== 0;
    pointerStartRef.current = null;
    setDragging(false);

    if (wasDisplaced) {
      suppressClickRef.current = true;
      setSettleDirection(0);
    }
  };

  const handleTrackTransitionEnd = (
    event: TransitionEvent<HTMLSpanElement>,
  ) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform" ||
      settleDirection === null
    ) {
      return;
    }

    if (settleDirection !== 0) {
      setActiveIndex((index) => index + settleDirection);
      setZoomed(false);
    }

    dragOffsetRef.current = 0;
    setDragOffset(0);
    setSettleDirection(null);
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

  const trackTransform =
    settleDirection === -1
      ? "translate3d(0, 0, 0)"
      : settleDirection === 0
        ? "translate3d(-100%, 0, 0)"
        : settleDirection === 1
          ? "translate3d(-200%, 0, 0)"
          : `translate3d(calc(-100% + ${dragOffset}px), 0, 0)`;
  const trackPhotos = multiple
    ? [
        availablePhotos[activeIndex - 1] ?? null,
        activePhoto,
        availablePhotos[activeIndex + 1] ?? null,
      ]
    : [];

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
          {canGoPrevious ? (
            <button
              aria-label="Previous photograph"
              className="photo-viewer__arrow photo-viewer__arrow--previous"
              onClick={() => settlePhoto(-1)}
              type="button"
            >
              ←
            </button>
          ) : null}

          <button
            aria-label={zoomed ? "Fit complete photograph" : "Zoom photograph"}
            className="photo-viewer__image-viewport"
            data-dragging={dragging || undefined}
            data-zoomed={zoomed || undefined}
            onClick={handlePhotoClick}
            onPointerCancel={handlePointerCancel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            type="button"
          >
            {multiple ? (
              <span
                className="photo-viewer__track"
                data-settling={settleDirection !== null || undefined}
                onTransitionEnd={handleTrackTransitionEnd}
                style={{ transform: trackTransform }}
              >
                {trackPhotos.map((photo, slotIndex) => {
                  const isActive = slotIndex === 1;

                  if (!photo) {
                    return (
                      <span
                        aria-hidden="true"
                        className="photo-viewer__slide photo-viewer__slide--empty"
                        key={`empty-${slotIndex}`}
                      />
                    );
                  }

                  return (
                    <span
                      aria-hidden={!isActive || undefined}
                      className={
                        isActive
                          ? "photo-viewer__slide photo-viewer__slide--active"
                          : "photo-viewer__slide"
                      }
                      key={`${slotIndex}-${photo.src}`}
                    >
                      <span className="photo-viewer__photo">
                        <img
                          alt={isActive ? photo.alt : ""}
                          className={
                            photo.flipHorizontal
                              ? "photo-viewer__image photo-viewer__image--flipped"
                              : "photo-viewer__image"
                          }
                          decoding="async"
                          draggable={false}
                          src={photo.src}
                        />
                      </span>
                    </span>
                  );
                })}
              </span>
            ) : (
              <span className="photo-viewer__photo photo-viewer__slide--active">
                <img
                  alt={activePhoto.alt}
                  className={
                    activePhoto.flipHorizontal
                      ? "photo-viewer__image photo-viewer__image--flipped"
                      : "photo-viewer__image"
                  }
                  decoding="async"
                  draggable={false}
                  src={activePhoto.src}
                />
              </span>
            )}
          </button>

          {canGoNext ? (
            <button
              aria-label="Next photograph"
              className="photo-viewer__arrow photo-viewer__arrow--next"
              onClick={() => settlePhoto(1)}
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
