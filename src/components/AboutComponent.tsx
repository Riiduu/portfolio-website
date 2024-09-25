// Images
import AboutImg from '../assets/project-assets/about-img.png';
import Background1 from '../assets/project-assets/lightbulb.png'
import Background2 from '../assets/project-assets/musicimg.png'
import Background3 from '../assets/project-assets/Vector 186.png'


const AboutComponent = () => {
    return (
        <div
            className="my-auto h-auto flex flex-col justify-center md:flex-row md:justify-between relative py-32 md:py-40 mx-4 md:mx-4 lg:mx-8 xl:mx-0 text-white">

            {/* Info container with 2 background elements */}
            <div className="relative md:w-1/2">
                {/* music img */}
                <img className="absolute right-0 sm:left-80 md:left-96" src={Background2} alt=""/>
                {/* lightublb img */}
                <img className="hidden md:absolute top-0" src={Background1} alt=""/>

                <h1 className="text-6xl mb-10">About <span className="text-[var(--color-3)] font-medium">me</span></h1>
                <p>
                    My name is <span className="text-[var(--color-3)]">Kristians Jelinsks</span>, a 19-year-old
                    developer with over 5 years of experience in web, mobile, and game development. I've been building
                    solo projects, primarily in web dev, with a strong focus on quality, innovation, and usability. I’m
                    highly skilled in adapting to new technologies and frameworks to stay current. <br/><br/>

                    Outside of coding, I play various musical instruments and enjoy diving into classic literature—the
                    older, the better. Along with technical expertise, I bring a solid background in business, giving me
                    a broader view to balance both development and strategic goals. <br/><br/>


                    I am passionate about delivering efficient, scalable solutions and thrive in both independent and
                    collaborative environments, ensuring that each project aligns with long-term objectives.
                </p>
            </div>

            {/* arrow img */}
            <img className="hidden lg:block lg:absolute lg:bottom-0 rotate-[145deg] left-96" src={Background3} alt=""/>

            {/* Img container */}
            <div className="my-5 md:my-0 md:w-1/2 h-auto flex justify-center items-center">
                <img className="h-auto md:w-full" src={AboutImg} alt=""/>

            </div>

        </div>
    )
}

export default AboutComponent