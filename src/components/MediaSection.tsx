import media from "../data/Media";

function MediaSection() {
  return (
    <section className="media-section" id="bilder" aria-labelledby="media-title">
      <h2 className="media-title" id="media-title">
        Bilder
      </h2>
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
