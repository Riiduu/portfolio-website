import HeroComponent from "./components/hero-components/HeroComponent.tsx";
import Navbar from './components/Navbar.tsx'
import AboutComponent from "./components/about-components/AboutComponent.tsx";
import RecentWorksComponent from "./components/recent-works-components/RecentWorksComponent.tsx";
import ContactComponent from "./components/contact-components/ContactComponent.tsx";

function App() {
  return (
      <div className="">
          <section className="max-w-screen-xl m-auto h-auto">
              <Navbar aboutNav="#about" recentNav="#recent-works" contactNav="#contact" hireNav="#contact"/>
          </section>
          <section id="hero" className="max-w-screen-xl m-auto">
              <HeroComponent readMoreButton="#about" hireNav="#contact"/>
          </section>
          <section id="about" className="max-w-screen-xl m-auto">
              <AboutComponent/>
          </section>
          <section id="recent-works" className="">
              <RecentWorksComponent/>
          </section>
          <section id="contact" className="max-w-screen-xl m-auto">
              <ContactComponent/>
          </section>

      </div>
  )
}

export default App
