import type { Contribution } from "../content/types";
import { Decoration } from "./Decoration";
import { OpenableNote } from "./OpenableNote";

type BestFriendLetterPageProps = {
  contribution: Contribution;
};

export function BestFriendLetterPage({
  contribution,
}: BestFriendLetterPageProps) {
  return (
    <section className="best-friend-page best-friend-page--letter paper-surface paper-surface--light">
      <Decoration kind="tape" className="best-friend-letter__tape" />
      <Decoration
        kind="stamp"
        label={"BEST FRIENDS\nFOR LIFE"}
        className="best-friend-letter__stamp"
      />
      <Decoration kind="heart" className="best-friend-letter__heart" />

      <header className="best-friend-letter__heading">
        <span>for Patty, from her person</span>
        <h2>Open when you miss your duo.</h2>
      </header>

      <div className="best-friend-letter__envelope">
        <OpenableNote
          detail={contribution.melbourneDetail}
          message={contribution.message}
          title={contribution.friendName}
          variant="love-letter"
        />
      </div>

      <div className="best-friend-letter__promise">
        <span>Melbourne</span>
        <i aria-hidden="true" />
        <span>Semarang</span>
      </div>

      <p className="best-friend-letter__signoff">
        Forever and always,
        <strong>NH</strong>
      </p>
    </section>
  );
}
