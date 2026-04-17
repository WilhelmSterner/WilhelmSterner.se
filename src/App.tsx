import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import NewsSection from "./components/NewsSection";
import ResultsSection from "./components/ResultsSection";
import MediaSection from "./components/MediaSection";
import ScheduleSection from "./components/ScheduleSection";
import SupportSection from "./components/SupportSection";
import GoalSection from "./components/GoalSection";

function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <IntroSection />
        <NewsSection />
        <ResultsSection />
        <ScheduleSection />
        <GoalSection />
        <MediaSection />
        <SupportSection />
      </main>
      <footer className="site-footer">
        <p>Wilhelm Sterner</p>
        <a href="mailto:wilhelm.sterner@outlook.com">
          wilhelm.sterner@outlook.com
        </a>
      </footer>
    </>
  );
}

export default App;
