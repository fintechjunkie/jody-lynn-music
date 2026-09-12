import Image from "next/image";

export default function ArtistHome() {
  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />

      <section className="about-unified" id="about">
        <a className="corner-mark" href="/" aria-label="Return to entry"><span className="brand-mark">JL</span></a>
        <div className="about-title" aria-label="About the Artist">
          <span>ABOUT THE</span><span>ARTIST</span>
        </div>

        <div className="duality-stage">
          <div className="duality-copy light-copy">
            <h1>A LOT OF<br/>LIGHT.</h1>
            <p>YOU CAN’T APPRECIATE ALL THE BEAUTY IN THINGS</p>
          </div>
          <div className="duality-medallion" aria-hidden="true">
            <span>TWO<br/>SIDES</span>
          </div>
          <div className="duality-copy dark-copy">
            <h1>A LITTLE<br/>DARK.</h1>
            <p>WITHOUT SOME LIGHT <em>AND</em> SHADE.</p>
          </div>
        </div>

        <div className="box-statement">
          <div className="box-art" aria-hidden="true">
            <Image src="/jody-kaleidoscope.png" alt="" width={1536} height={1024} />
          </div>
          <p>THE ONLY BOX I’M CONFINED BY IS</p>
          <h2>THE DEVICE<br/><span>YOU’RE ON.</span></h2>
          <div className="box-foot">
            <p>That’s the last box you’ll ever see me in.</p>
            <p>Not one style. Not one mood. Not one genre.</p>
          </div>
        </div>

        <div className="about-story">
          <div><span className="tag violet">IN HER WORDS</span><h2>MY MUSIC IS A<br/>KALEIDOSCOPE.</h2></div>
          <div className="story-copy">
            <p>All the artists who shaped me, all the life I’ve lived, and all my fresh ideas collide into a colorful fusion of genres, moods, and styles.</p>
            <p>Music gives voice to the thoughts and feelings that lurk in the shadows—and brings them into the light.</p>
            <blockquote>“I hope my music makes you feel all the things. That’s what it’s all about.”</blockquote>
          </div>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="section-heading"><p>STEP INTO THE SOUND</p><h2>FIND JODY<br/>OUT THERE.</h2></div>

        <div className="media-grid">
          <article className="spotify-card">
            <div className="media-card-head"><span className="tag lime">LISTEN</span><h3>SPOTIFY</h3><a href="https://open.spotify.com/artist/6YLtlPHlSvadNAENGawZDk?si=2gc7oqdgT2q1a_bbopkIXw" target="_blank" rel="noreferrer">OPEN ↗</a></div>
            <iframe
              title="Jody Lynn on Spotify"
              src="https://open.spotify.com/embed/artist/6YLtlPHlSvadNAENGawZDk?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </article>

          <a className="graphic-card instagram-card" href="https://www.instagram.com/jodylynnmusic/" target="_blank" rel="noreferrer">
            <div className="graphic-lines" aria-hidden="true"><span>@JODYLYNNMUSIC</span><span>@JODYLYNNMUSIC</span><span>@JODYLYNNMUSIC</span></div>
            <div className="graphic-card-top"><span className="tag pink">FOLLOW</span><span>02</span></div>
            <div className="graphic-card-bottom"><p>BEHIND THE MUSIC</p><h3>INSTAGRAM</h3><strong>↗</strong></div>
          </a>

          <a className="graphic-card links-card" href="https://linktr.ee/jodylynnmusic" target="_blank" rel="noreferrer">
            <div className="linktree-orbit" aria-hidden="true"><span>ALL</span><span>THE</span><span>LINKS</span></div>
            <div className="graphic-card-top"><span className="tag blue">EXPLORE</span><span>03</span></div>
            <div className="graphic-card-bottom"><p>MUSIC / SOCIAL / MORE</p><h3>LINKTREE</h3><strong>↗</strong></div>
          </a>
        </div>
      </section>

      <footer><a href="/">JODY LYNN</a><p>ALL THE LIGHT. ALL THE SHADE.</p><p>© {new Date().getFullYear()}</p></footer>
    </main>
  );
}
