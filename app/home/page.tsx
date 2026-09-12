import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "LISTEN", title: "SPOTIFY", note: "Songs, releases & the latest sound", href: "https://open.spotify.com/artist/6YLtlPHlSvadNAENGawZDk?si=2gc7oqdgT2q1a_bbopkIXw", color: "lime" },
  { label: "FOLLOW", title: "INSTAGRAM", note: "@jodylynnmusic", href: "https://www.instagram.com/jodylynnmusic/", color: "pink" },
  { label: "EXPLORE", title: "ALL LINKS", note: "Everything Jody, all in one place", href: "https://linktr.ee/jodylynnmusic", color: "blue" },
];

export default function ArtistHome() {
  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <nav className="main-nav" aria-label="Main navigation">
        <Link className="nav-logo" href="/"><span className="brand-mark">JL</span><span>JODY LYNN</span></Link>
        <div className="nav-links"><a href="#about">About</a><a href="#connect">Connect</a></div>
        <a className="nav-listen" href="https://open.spotify.com/artist/6YLtlPHlSvadNAENGawZDk?si=2gc7oqdgT2q1a_bbopkIXw" target="_blank" rel="noreferrer">LISTEN NOW ↗</a>
      </nav>

      <section className="about-hero" id="about">
        <div className="about-stamp"><span>ABOUT</span><span>THE ARTIST</span></div>
        <div className="split-word" aria-label="A lot of light. A little dark.">
          <span className="light-side">A LOT OF<br/>LIGHT.</span>
          <span className="dark-side">A LITTLE<br/>DARK.</span>
        </div>
        <div className="about-orbit" aria-hidden="true">EVERY COLOR • EVERY MOOD • EVERY FEELING •</div>
        <div className="about-intro">
          <p className="about-kicker">THERE ARE TWO SIDES OF ME.</p>
          <p>Because you can’t appreciate all the beauty in things without some light <em>and</em> shade.</p>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-art">
          <Image src="/jody-kaleidoscope.png" alt="Violet glass facets opening like a kaleidoscope" width={1536} height={1024} />
          <span className="art-index">01 / KALEIDOSCOPE</span>
        </div>
        <div className="manifesto-copy">
          <span className="tag violet">IN HER WORDS</span>
          <h1>NO ONE<br/>COLOR.</h1>
          <p>Jody Lynn’s music is a kaleidoscope: the artists who shaped her, the life she has lived, and fresh ideas colliding into a vivid fusion of genres, moods, and styles.</p>
          <p>Her songs move through the full range of what it means to feel human. They give voice to the thoughts that lurk in the shadows—and bring them into the light.</p>
          <p className="signature">“I hope my music makes you feel all the things. That’s what it’s all about.”</p>
        </div>
      </section>

      <section className="box-break">
        <p>THE ONLY BOX I’M CONFINED BY IS</p>
        <h2>THE DEVICE<br/>YOU’RE ON.</h2>
        <div className="genre-tags" aria-label="Jody's creative range">
          <span className="tag lime">LIGHT</span><span className="tag yellow">HEAT</span><span className="tag pink">HEART</span><span className="tag coral">EDGE</span><span className="tag violet">MYSTERY</span><span className="tag blue">OPEN SKY</span>
        </div>
        <p className="box-after">And that’s the last box you’ll ever see her in. Not one style. Not one mood. Not one genre.</p>
      </section>

      <section className="connect" id="connect">
        <div className="section-heading"><p>STEP INTO THE SOUND</p><h2>FIND JODY<br/>OUT THERE.</h2></div>
        <div className="link-grid">
          {links.map((item, i) => (
            <a className="link-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <div><span className={`tag ${item.color}`}>{item.label}</span><span className="card-number">0{i + 1}</span></div>
              <div><h3>{item.title}</h3><p>{item.note}</p></div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer><Link href="/">JODY LYNN</Link><p>ALL THE LIGHT. ALL THE SHADE.</p><p>© {new Date().getFullYear()}</p></footer>
    </main>
  );
}
