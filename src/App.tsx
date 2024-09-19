import './App.css'
import HeroComponent from "./components/hero-components/HeroComponent.tsx";
import Navbar from './components/Navbar.tsx'
import AboutComponent from "./components/about-components/AboutComponent.tsx";
import RecentWorksComponent from "./components/recent-works-components/RecentWorksComponent.tsx";

function App() {
  return (
      <div className="App__container">
          <section className="section-container">
              <Navbar aboutNav="#about" recentNav="#recent-works"/>
          </section>
          <section className="section-container">
              <HeroComponent readMoreButton="#about"/>
          </section>
          <section id="about" className="section-container">
              <AboutComponent/>
          </section>
          <section id="recent-works" className="full-width">
              <RecentWorksComponent/>
          </section>

      </div>
  )
}

export default App
