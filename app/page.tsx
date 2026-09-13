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
          <span className="plane-line">WELCOME TO</span>
        </div>
        <div className="room-plane plane-left" aria-hidden="true">
          <span className="plane-line plane-small">THE</span>
          <span className="plane-line">WILD</span>
        </div>
        <div className="room-plane plane-right" aria-hidden="true">
          <span className="plane-line">WORLD</span>
          <span className="plane-line plane-small">OF</span>
        </div>
        <div className="room-plane plane-bottom" aria-hidden="true">
          <span className="plane-line">JODY LYNN</span>
        </div>

        <a className="kaleidoscope-box" href="/home" aria-label="Enter Jody Lynn's official site">
          <span className="color-vortex" aria-hidden="true" />
          <span className="portal-copy">
            <small>ENTER THE</small>
            <strong>KALEIDOSCOPE</strong>
          </span>
        </a>
      </section>
    </main>
  );
}
