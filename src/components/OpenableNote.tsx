import { useState } from "react";

import { ReadingView } from "./ReadingView";

export type NoteVariant =
  | "letter"
  | "envelope"
  | "notebook"
  | "postcard"
  | "sticky"
  | "diary"
  | "receipt"
  | "ticket"
  | "love-letter";

type OpenableNoteProps = {
  readonly title: string;
  readonly message: string;
  readonly detail?: string;
  readonly variant: NoteVariant;
  readonly className?: string;
  readonly previewLength?: number;
};

const defaultPreviewLimit = 170;

/**
 * Count by grapheme cluster, not by UTF-16 unit. Several messages are written
 * with emoji, and slicing mid-surrogate leaves a replacement glyph in the
 * preview.
 */
function takeGraphemes(message: string, limit: number): string[] {
  if (typeof Intl.Segmenter === "function") {
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });
    const clusters: string[] = [];

    for (const { segment } of segmenter.segment(message)) {
      clusters.push(segment);

      if (clusters.length > limit) {
        break;
      }
    }

    return clusters;
  }

  return Array.from(message).slice(0, limit + 1);
}

function getPreview(message: string, limit: number) {
  const clusters = takeGraphemes(message, limit);

  if (clusters.length <= limit) {
    return message;
  }

  return `${clusters.slice(0, limit).join("").trimEnd()}…`;
}

export function OpenableNote({
  title,
  message,
  detail,
  variant,
  className = "",
  previewLength = defaultPreviewLimit,
}: OpenableNoteProps) {
  const [open, setOpen] = useState(false);
  const hasMessage = message.trim().length > 0;

  if (!hasMessage) {
    return (
      <div
        aria-hidden="true"
        className={`openable-note openable-note--${variant} openable-note--blank ${className}`.trim()}
      />
    );
  }

  const openNote = () => {
    setOpen(true);
  };

  const closeNote = () => {
    if (!open) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <button
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`Open ${title}'s full message`}
        className={`openable-note openable-note--${variant} ${className}`.trim()}
        onClick={openNote}
        type="button"
      >
        <span className="openable-note__eyebrow">A note from</span>
        <strong className="openable-note__name">{title}</strong>
        <span className="openable-note__preview">
          {getPreview(message, previewLength)}
        </span>
        <span aria-hidden="true" className="openable-note__hint">
          tap to open ↗
        </span>
      </button>

      <ReadingView
        detail={detail}
        message={message}
        onRequestClose={closeNote}
        open={open}
        title={title}
      />
    </>
  );
}
