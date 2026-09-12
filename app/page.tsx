import Image from "next/image";
import Link from "next/link";

const lyric = "THERE ARE TWO SIDES OF ME — A LOT OF LIGHT — A LITTLE DARK — ";

export default function Entry() {
  return (
    <main className="entry-shell">
      <div className="noise" aria-hidden="true" />
      <div className="lyric-rail lyric-top" aria-hidden="true"><span>{lyric.repeat(4)}</span></div>
      <div className="lyric-rail lyric-bottom" aria-hidden="true"><span>{lyric.repeat(4)}</span></div>
      <div className="lyric-side lyric-left" aria-hidden="true">{"MUSIC GIVES VOICE TO THE SHADOWS • ".repeat(3)}</div>
      <div className="lyric-side lyric-right" aria-hidden="true">{"AND BRINGS THEM INTO THE LIGHT • ".repeat(3)}</div>

      <header className="entry-brand">
        <span className="brand-mark">JL</span><span>JODY LYNN</span>
        <span className="entry-note">MUSIC / NO BOXES</span>
      </header>

      <section className="portal-stage" aria-labelledby="entry-title">
        <p className="eyebrow">THE OFFICIAL ARTIST SITE</p>
        <h1 id="entry-title">JODY <span>LYNN</span></h1>
        <Link className="portal" href="/home" aria-label="Enter Jody Lynn's official site">
          <span className="portal-ring" aria-hidden="true" />
          <Image src="/jody-kaleidoscope.png" alt="A luminous violet glass kaleidoscope" width={1536} height={1024} priority />
          <span className="portal-cta">ENTER THE KALEIDOSCOPE <b>↗</b></span>
        </Link>
      </section>
      <p className="entry-caption">ONE VOICE. EVERY COLOR.</p>
    </main>
  );
}
