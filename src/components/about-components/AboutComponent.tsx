// Styling
import './AboutComponent.css'

// Images
import AboutImg from '../../assets/project-assets/about-img.png';
import Background1 from '../../assets/project-assets/lightbulb.png'
import Background2 from '../../assets/project-assets/musicimg.png'
import Background3 from '../../assets/project-assets/Vector 186.png'


const AboutComponent = () => {
    return (
        <div className="AboutComponent__container">

            {/* Info container with 2 background elements */}
            <div className="AboutComponent__info_container">
                {/* music img */}
                <img className="AboutComponent__background_element2" src={Background2} alt=""/>
                {/* lightublb img */}
                <img className="AboutComponent__background_element1" src={Background1} alt=""/>

                <h1>About <span className="AboutComponent__info_span">me</span></h1>
                <p>
                    My name is Kristians Jelinsks, a 19-year-old developer with over 5 years of experience in web, mobile, and game development. I've been building solo projects, primarily in web dev, with a strong focus on quality, innovation, and usability. I’m highly skilled in adapting to new technologies and frameworks to stay current. <br/><br/>

                    Outside of coding, I play various musical instruments and enjoy diving into classic literature—the older, the better. Along with technical expertise, I bring a solid background in business, giving me a broader view to balance both development and strategic goals. <br/><br/>


                    I am passionate about delivering efficient, scalable solutions and thrive in both independent and collaborative environments, ensuring that each project aligns with long-term objectives.
                </p>
            </div>

            {/* Img container */}
            <div className="AboutComponent__img_container">
                <img src={AboutImg} alt=""/>
                {/* arrow img */}
                <img className="AboutComponent__background_element3" src={Background3} alt=""/>
            </div>

        </div>
    )
}

export default AboutComponent