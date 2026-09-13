const displayGlyphs = (text: string) =>
  Array.from(text).map((letter, index) => {
    const shape = /[AODR]/.test(letter) ? ` glyph-${letter.toLowerCase()}` : "";
    const space = letter === " " ? " display-space" : "";

    return (
      <span className={`display-glyph${shape}${space}`} key={`${letter}-${index}`}>
        {letter === " " ? "\u00a0" : letter}
      </span>
    );
  });

export default function Entry() {
  return (
    <main className="entry-shell">
      <div className="noise" aria-hidden="true" />

      <header className="entry-brand">
        <span className="brand-mark">JL</span>
        <span>JODY LYNN</span>
        <span className="entry-note">THE OFFICIAL ARTIST SITE</span>
      </header>

      <section className="type-room" aria-labelledby="entry-title">
        <h1 id="entry-title" className="sr-only">Welcome to the world of Jody Lynn</h1>

        <div className="room-plane plane-top" aria-hidden="true">
          <span className="plane-line line-welcome">{displayGlyphs("WELCOME")}</span>
          <span className="plane-line line-to-the">{displayGlyphs("TO THE")}</span>
        </div>
        <div className="room-plane plane-left" aria-hidden="true">
          <span className="plane-line">{displayGlyphs("WORLD")}</span>
        </div>
        <div className="room-plane plane-right" aria-hidden="true">
          <span className="plane-line">{displayGlyphs("OF")}</span>
        </div>
        <div className="room-plane plane-bottom" aria-hidden="true">
          <span className="plane-line">{displayGlyphs("JODY LYNN")}</span>
        </div>

        <a className="kaleidoscope-box" href="/home" aria-label="Enter Jody Lynn's official site">
          <span className="color-vortex" aria-hidden="true" />
          <span className="portal-copy">
            <small>ENTER THE</small>
            <strong>KALEIDOSCOPE</strong>
            <i aria-hidden="true">↗</i>
          </span>
        </a>
      </section>
    </main>
  );
}
