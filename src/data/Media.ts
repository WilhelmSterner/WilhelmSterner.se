import afterPodium from "../../images/after-podium.jpg";
import competitionPicture from "../../images/competion_picture.jpeg";
import falunSkate from "../../images/falun-skate.JPG";
import falunSprintD from "../../images/falun-sprint-d.JPG";
import falunSprintU from "../../images/falun-sprint-u.JPG";
import inGoal from "../../images/in-goal.jpg";
import onPodium from "../../images/on-podium.jpg";
import u23_1 from "../../images/u23-1.JPG";
import u23_2 from "../../images/u23-2.JPG";
import u23_3 from "../../images/u23-3.JPG";
import ulricehamnInAction from "../../images/ulricehamn-in-action.jpg";

type MediaItem = {
  src: string;
  alt: string;
  label: string;
  variant?: "feature" | "tall" | "wide";
};

const media: MediaItem[] = [
  {
    src: onPodium,
    alt: "Wilhelm Sterner på prispallen efter tävling.",
    label: "Pallplats",
    variant: "feature",
  },
  {
    src: u23_2,
    alt: "Wilhelm Sterner under lopp i skogen på U23-nivå.",
    label: "U23VM",
    variant: "tall",
  },
  {
    src: ulricehamnInAction,
    alt: "Wilhelm Sterner i hög fart under tävling i Ulricehamn.",
    label: "I fart",
  },
  {
    src: falunSprintU,
    alt: "Wilhelm Sterner i sprintsammanhang i Falun.",
    label: "Falun sprint",
  },
  {
    src: inGoal,
    alt: "Wilhelm Sterner går i mål efter lopp.",
    label: "Målgång",
  },
  {
    src: falunSkate,
    alt: "Wilhelm Sterner i skateåkning under tävling.",
    label: "Skate",
  },
  {
    src: competitionPicture,
    alt: "Tävlingsbild på Wilhelm Sterner under lopp.",
    label: "Tävlingsdag",
    variant: "wide",
  },
  {
    src: afterPodium,
    alt: "Wilhelm Sterner efter prisutdelning.",
    label: "Efter pallen",
  },
  {
    src: u23_1,
    alt: "Wilhelm Sterner under U23-lopp.",
    label: "Masstart",
    variant: "wide",
  },
  {
    src: falunSprintD,
    alt: "Wilhelm Sterner under sprint i Falun.",
    label: "Dagsform",
  },
  {
    src: u23_3,
    alt: "Wilhelm Sterner i tävlingsmiljo pa U23-niva.",
    label: "Mot toppen",
    variant: "tall",
  },
];

export default media;
