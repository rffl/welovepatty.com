import type { ScrapbookContent } from "../content/types";
import { Decoration } from "./Decoration";

type ThingsWeMissPageProps = {
  content: ScrapbookContent["thingsWeMiss"];
};

export function ThingsWeMissPage({ content }: ThingsWeMissPageProps) {
  return (
    <section className="things-we-miss-page paper-surface paper-surface--graph">
      <Decoration kind="tape" className="things-we-miss-page__tape" />
      <Decoration kind="heart" className="things-we-miss-page__heart" />

      <header className="things-we-miss-page__heading">
        <span>{content.eyebrow}</span>
        <h2>{content.title}</h2>
      </header>

      <ol className="things-we-miss-page__list">
        {content.items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>

      <p className="things-we-miss-page__footer">{content.footer}</p>
    </section>
  );
}
