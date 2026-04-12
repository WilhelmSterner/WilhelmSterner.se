import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ResultsSection from "./components/ResultsSection";
import MediaSection from "./components/MediaSection";
import ScheduleSection from "./components/ScheduleSection";
import GoalSection from "./components/GoalSection";

function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <IntroSection />
        <ResultsSection />
        <MediaSection />
        <ScheduleSection />
        <GoalSection />
      </main>
      <footer className="site-footer">
        <p>Wilhelm Sterner</p>
        <a href="mailto:kontakt@wilhelmsterner.se">kontakt@wilhelmsterner.se</a>
      </footer>
    </>
  );
}

export default App;
