import media from "../data/Media";

function MediaSection() {
  return (
    <section className="media-section" id="bilder" aria-labelledby="media-title">
      <div className="media-copy">
        <p className="eyebrow">Bilder</p>
        <h2 id="media-title">Tävlingsdag, träning och allt däremellan.</h2>
        <p>Ögonblick från startlinjen, vardagen och vägen mot nästa nivå.</p>
      </div>
      <div className="media-gallery" aria-label="Bildgalleri">
        {media.map((item) => (
          <figure
            className={`gallery-card${item.variant ? ` gallery-card--${item.variant}` : ""}`}
            key={`${item.label}-${item.src}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default MediaSection;
