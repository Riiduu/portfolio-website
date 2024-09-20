import './App.css'
import HeroComponent from "./components/hero-components/HeroComponent.tsx";
import Navbar from './components/Navbar.tsx'
import AboutComponent from "./components/about-components/AboutComponent.tsx";
import RecentWorksComponent from "./components/recent-works-components/RecentWorksComponent.tsx";
import ContactComponent from "./components/contact-components/ContactComponent.tsx";

function App() {
  return (
      <div className="App__container">
          <section className="section-container">
              <Navbar aboutNav="#about" recentNav="#recent-works" contactNav="#contact"/>
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
          <section id="contact" className="section-container">
              <ContactComponent />
          </section>

      </div>
  )
}

export default App
