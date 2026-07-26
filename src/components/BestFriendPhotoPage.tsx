import type { Contribution } from "../content/types";
import { Decoration } from "./Decoration";
import { PhotoStack } from "./PhotoStack";

type BestFriendPhotoPageProps = {
  contribution: Contribution;
};

export function BestFriendPhotoPage({
  contribution,
}: BestFriendPhotoPageProps) {
  const [tablePhoto, streetPhoto, closePhoto] = contribution.photos;

  return (
    <section className="best-friend-page best-friend-page--photos paper-surface paper-surface--light">
      <Decoration kind="tape" className="best-friend-page__tape-one" />
      <Decoration kind="tape" className="best-friend-page__tape-two" />
      <Decoration kind="heart" className="best-friend-page__heart" />

      <header className="best-friend-page__heading">
        <span>the most important chapter</span>
        <h2>{contribution.friendName} &amp; Patty</h2>
        <p>duo · best friend · sister · twinnie · soulmate</p>
      </header>

      {tablePhoto ? (
        <div className="best-friend-photo best-friend-photo--table">
          <PhotoStack
            eager
            galleryPhotos={contribution.photos}
            galleryTitle={contribution.friendName}
            photos={[tablePhoto]}
            variant="polaroid"
          />
        </div>
      ) : null}

      {streetPhoto ? (
        <div className="best-friend-photo best-friend-photo--street">
          <PhotoStack
            eager
            galleryPhotos={contribution.photos}
            galleryTitle={contribution.friendName}
            photos={[streetPhoto]}
            variant="snapshot"
          />
        </div>
      ) : null}

      {closePhoto ? (
        <div className="best-friend-photo best-friend-photo--close">
          <PhotoStack
            eager
            galleryPhotos={contribution.photos}
            galleryTitle={contribution.friendName}
            photos={[closePhoto]}
            variant="polaroid"
          />
        </div>
      ) : null}

      <div className="best-friend-page__thread" aria-hidden="true">
        <span>2022</span>
        <i />
        <b>forever</b>
      </div>

      <p className="best-friend-page__scribble">
        “That’s when I knew—you are my duo idiot.”
      </p>
    </section>
  );
}
