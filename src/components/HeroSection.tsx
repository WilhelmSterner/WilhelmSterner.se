import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselCaption } from "react-bootstrap";
import onPodium from "../../images/on-podium.jpg";
import sm2 from "../../images/sm-2.JPG";
import u23_1 from "../../images/u23-1.JPG";

const slides = [
  {
    src: onPodium,
    alt: "Wilhelm Sterner på prispallen i Ulricehamn.",
    eyebrow: "Svenska Cupen",
    title: "Pallplats i Ulricehamn",
  },
  {
    src: sm2,
    alt: "Wilhelm Sterner under SM-sprinten.",
    eyebrow: "Mästerskap",
    title: "8e plats på SM-sprinten",
  },
  {
    src: u23_1,
    alt: "Wilhelm Sterner under 20 km masstart på U23-VM.",
    eyebrow: "Internationellt",
    title: "20 km masstart på U23-VM",
  },
];

function HeroSection() {
  return (
    <>
      <section className="hero-section" id="start" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Elitidrottare</p>
          <h1 id="hero-title">Wilhelm Sterner</h1>
          <p className="hero-lede">
            Fokus på resultat, utveckling och nästa tävlingsdag.
          </p>
          <div className="hero-actions" aria-label="Snabblänkar">
            <a className="button" href="#tavlingar">
              Kommande starter
            </a>
            <a className="text-link" href="mailto:wilhelm.sterner@outlook.com">
              Kontakt
            </a>
          </div>
        </div>
        <figure
          className="hero-portrait"
          aria-label="Bildplats för Wilhelm Sterner"
        >
          <Carousel
            className="hero-carousel"
            fade
            interval={5000}
            indicators={slides.length > 1}
          >
            {slides.map((slide) => (
              <Carousel.Item key={slide.title}>
                <div className="hero-slide">
                  <img src={slide.src} alt={slide.alt} className="hero-img" />
                  <div className="hero-slide-overlay" aria-hidden="true" />
                </div>
                <CarouselCaption className="carousel-caption">
                  <span className="carousel-eyebrow">{slide.eyebrow}</span>
                  <strong>{slide.title}</strong>
                </CarouselCaption>
              </Carousel.Item>
            ))}
          </Carousel>

          <figcaption>Höjdpunkter från säsongen</figcaption>
        </figure>
      </section>
    </>
  );
}

export default HeroSection;
