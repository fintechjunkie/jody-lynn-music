export default function Entry() {
  return (
    <main className="entry-shell">
      <div className="noise" aria-hidden="true" />

      <header className="entry-brand">
        <span className="brand-mark">JL</span>
        <span>JODY LYNN</span>
        <span className="entry-note">THE OFFICIAL ARTIST SITE</span>
      </header>

      <section className="world-stage" aria-labelledby="entry-title">
        <h1 id="entry-title" className="sr-only">Welcome to the world of Jody Lynn</h1>
        <div className="world-frame" aria-hidden="true">
          <span className="frame-corner corner-one" />
          <span className="frame-corner corner-two" />
          <span className="frame-corner corner-three" />
          <span className="frame-corner corner-four" />
        </div>

        <div className="world-copy" aria-hidden="true">
          <span className="world-word word-welcome">WELCOME TO</span>
          <span className="world-word word-the">THE</span>
          <span className="world-word word-world">WORLD OF</span>
          <span className="world-word word-jody">JODY LYNN</span>
        </div>

        <div className="portal-wrap">
          <span className="portal-halo halo-one" aria-hidden="true" />
          <span className="portal-halo halo-two" aria-hidden="true" />
          <span className="portal-halo halo-three" aria-hidden="true" />
          <a className="type-portal" href="/home" aria-label="Enter Jody Lynn's official site">
            <span>ENTER THE</span>
            <strong>KALEIDOSCOPE</strong>
            <i>↗</i>
          </a>
        </div>

        <p className="entry-cycle-note" aria-hidden="true">WELCOME / DISAPPEAR / RETURN / REPEAT</p>
      </section>
    </main>
  );
}
