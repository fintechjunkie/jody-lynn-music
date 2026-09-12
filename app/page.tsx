import Image from "next/image";

const edgeLine = "THERE ARE TWO SIDES OF ME • A LOT OF LIGHT • A LITTLE DARK • ";
const shadowLine = "MUSIC GIVES VOICE TO WHAT LURKS IN THE SHADOWS • ";
const lightLine = "AND BRINGS IT INTO THE LIGHT • ";

export default function Entry() {
  return (
    <main className="entry-shell">
      <div className="noise" aria-hidden="true" />

      <div className="edge-band edge-top" aria-hidden="true">
        <span>{edgeLine.repeat(5)}</span><span>{edgeLine.repeat(5)}</span>
      </div>
      <div className="edge-band edge-bottom" aria-hidden="true">
        <span>{edgeLine.repeat(5)}</span><span>{edgeLine.repeat(5)}</span>
      </div>
      <div className="slash-band slash-one" aria-hidden="true">
        <span>{shadowLine.repeat(4)}</span><span>{shadowLine.repeat(4)}</span>
      </div>
      <div className="slash-band slash-two" aria-hidden="true">
        <span>{lightLine.repeat(5)}</span><span>{lightLine.repeat(5)}</span>
      </div>

      <header className="entry-brand">
        <span className="brand-mark">JL</span><span>JODY LYNN</span>
        <span className="entry-note">ONE VOICE / EVERY COLOR</span>
      </header>

      <section className="portal-stage" aria-labelledby="entry-title">
        <p className="eyebrow">THE OFFICIAL ARTIST SITE</p>
        <h1 id="entry-title"><span>JODY</span> LYNN</h1>
        <a className="portal" href="/home" aria-label="Enter Jody Lynn's official site">
          <span className="portal-aura aura-one" aria-hidden="true" />
          <span className="portal-aura aura-two" aria-hidden="true" />
          <Image className="portal-ghost ghost-one" src="/jody-kaleidoscope.png" alt="" width={1536} height={1024} aria-hidden="true" />
          <Image className="portal-ghost ghost-two" src="/jody-kaleidoscope.png" alt="" width={1536} height={1024} aria-hidden="true" />
          <Image className="portal-art" src="/jody-kaleidoscope.png" alt="A luminous violet glass kaleidoscope" width={1536} height={1024} priority />
          <span className="portal-cta"><i>ENTER</i><b>THE KALEIDOSCOPE</b><strong>↗</strong></span>
        </a>
      </section>
    </main>
  );
}
