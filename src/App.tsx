import './App.css'
import HeroComponent from "./components/hero-components/HeroComponent.tsx";
import Navbar from './components/Navbar.tsx'

function App() {
  return (
    <div className="App__container">
        <Navbar />
        <HeroComponent readMoreButton="#"/>
    </div>
  )
}

export default App
