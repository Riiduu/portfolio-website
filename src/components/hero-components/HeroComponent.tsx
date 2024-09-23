import './HeroComponent.css'

import ArrowDown from '../../assets/project-assets/Vector 187.png';
import HeroImg from '../../assets/project-assets/hero-img.png';
import ButtonDown from '../../assets/project-assets/ButtonDown.png';
//import {useEffect} from "react";

const HeroComponent = (props: any) => {
    const routeToContact = () => {
        window.location.href = props.hireNav;
    }

    const routeToCV = () => {
        window.open("https://1drv.ms/w/s!AnMti7tFV1DuiuNbly_VUCkVUPkysA?e=QzRgmL", "_blank");
    }

    return (
        <div className="HeroComponent__container">
            {/* I use arch container*/}
            <div className="HeroComponent__container_left_box">
                <img src={ArrowDown} height="250px" alt=""/>
                <div className="HeroComponent__left_box_info">
                    <h1>I DON'T USE<br/><span className="HeroComponent__i_use_arch_btw">ARCH, btw</span></h1>
                    {/* Hire me & CV buttons */}
                    <div className="HeroComponent__info_buttons">
                        {/* Hire me button */}
                        <button onClick={routeToContact} className="HeroComponent__first_btn">Hire me</button>
                        {/* Download CV button */}
                        <button onClick={routeToCV} className="HeroComponent__second_btn">View CV <span
                            className="material-symbols-outlined">open_in_new</span></button>
                    </div>
                </div>

            </div>

            <a className="HeroComponent__read_more_button" href={props.readMoreButton}>
                <img className="HeroComponent__readmore" src={ButtonDown} alt=""/>
            </a>

            {/* image container*/}
            <div>
                <img src={HeroImg} alt=""/>

            </div>
        </div>
    )
}

export default HeroComponent