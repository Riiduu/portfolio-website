import './App.css'
import HeroComponent from "./components/hero-components/HeroComponent.tsx";
import Navbar from './components/Navbar.tsx'
import AboutComponent from "./components/about-components/AboutComponent.tsx";

function App() {
  return (
    <div className="App__container">
        <Navbar aboutNav="#about"/>
        <HeroComponent readMoreButton="#about"/>
        <section id="about">
            <AboutComponent />
        </section>

    </div>
  )
}

export default App
