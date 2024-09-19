import './AboutComponent.css'

import AboutImg from '../../assets/project-assets/about-img.png';
import Background1 from '../../assets/project-assets/lightbulb.png'
import Background2 from '../../assets/project-assets/Vector 141.png'
import Background3 from '../../assets/project-assets/Vector 186.png'


const AboutComponent = () => {
    return (
        <div className="AboutComponent__container">
            <div className="AboutComponent__info_container">
                {/* music img */}
                <img className="AboutComponent__background_element2" src={Background2} alt=""/>
                {/* lightublb img */}
                <img className="AboutComponent__background_element1" src={Background1} alt=""/>

                <h1>About <span className="AboutComponent__info_span">me</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque beatae consequatur, culpa
                    dolores ducimus ex incidunt iure maiores maxime, necessitatibus quam quia rem sint sit tempora vel
                    voluptas! Animi. <br/> <br/>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi inventore, minima modi nihil nulla
                    omnis perferendis. Aliquid expedita nobis optio pariatur porro quam ratione sed vel. Aliquid fugiat
                    laboriosam perspiciatis.<br/> <br/>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis iusto quos suscipit
                    tenetur? Ab, adipisci aliquam animi autem consequuntur culpa eum hic minima molestiae mollitia quod
                    repellat repellendus voluptas.<br/> <br/>
                </p>
            </div>
            <div className="AboutComponent__img_container">
                <img src={AboutImg} alt=""/>
            </div>
            {/* arrow img */}
            <img className="AboutComponent__background_element3" src={Background3} alt=""/>
        </div>
    )
}

export default AboutComponent