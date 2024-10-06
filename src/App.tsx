import HeroComponent from "./components/HeroComponent.tsx";
import Navbar from './components/Navbar.tsx'
import AboutComponent from "./components/AboutComponent.tsx";
import RecentWorksComponent from "./components/RecentWorksComponent.tsx";
import ContactComponent from "./components/ContactComponent.tsx";


function App() {
    return (
        <div className="">
            <section className="max-w-screen-xl m-auto">
                <Navbar aboutNav="#about" recentNav="#recent-works" contactNav="#contact" hireNav="#contact"/>
            </section>
            <section id="hero"
                     className="flex flex-col max-w-screen-xl mx-auto justify-center"
                     style={{height: 'calc(100vh - 100px)'}}>
                <HeroComponent readMoreButton="#about" hireNav="#contact"/>
            </section>
            <section id="about" className="max-w-screen-xl mx-auto">
                <AboutComponent/>
            </section>
            <section id="recent-works"
                     className="bg-[url('./assets/project-assets/recent-works-bg.png')] bg-cover bg-center mx-auto my-40 py-20">
                <RecentWorksComponent/>
            </section>
            <section id="contact" className="max-w-screen-xl mx-auto my-40 py-28">
                <ContactComponent/>
            </section>

        </div>
    )
}

export default App
