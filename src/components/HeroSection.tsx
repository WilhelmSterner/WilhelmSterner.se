import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselCaption } from "react-bootstrap";
import onPodium from "../../images/on-podium.jpg";
import sm2 from "../../images/sm-2.JPG";
import u23_1 from "../../images/u23-1.JPG";

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
            <a className="text-link" href="mailto:wilhem.sterner@outlook.com">
              Kontakt
            </a>
          </div>
        </div>
        <figure
          className="hero-portrait"
          aria-label="Bildplats för Wilhelm Sterner"
        >
          <Carousel className="hero-carousel">
            <Carousel.Item>
              <img
                src={onPodium}
                alt="Wilhelm Sterner under tävling"
                className="hero-img"
              />
              <CarouselCaption className="carousel-caption">
                Pallplats i Ulricehamn
              </CarouselCaption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={sm2} alt="Wilhelm Sterner under SM-sprinten" className="hero-img" />
              <CarouselCaption className="carousel-caption">
                8e plats på SM sprinten
              </CarouselCaption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={u23_1} alt="Wilhelm Sterner under U23-VM" className="hero-img" />
              <CarouselCaption className="carousel-caption">
                20 km masstart på U23VM
              </CarouselCaption>
            </Carousel.Item>
          </Carousel>

          <figcaption>Bilder på året Höjdpunkter</figcaption>
        </figure>
      </section>
    </>
  );
}

export default HeroSection;
