import ArrowDown from '../assets/project-assets/Vector 187.png';
import HeroImg from '../assets/project-assets/hero-img.png';
import ButtonDown from '../assets/project-assets/ButtonDown.png';
//import {useEffect} from "react";

const HeroComponent = (props: any) => {
    const routeToContact = () => {
        window.location.href = props.hireNav;
    }

    const routeToCV = () => {
        window.open("https://1drv.ms/w/s!AnMti7tFV1DuiuNbly_VUCkVUPkysA?e=QzRgmL", "_blank");
    }

    return (
        <div
            className="flex flex-row justify-center md:justify-between relative flex-wrap mx-4 md:mx-4 lg:mx-8 xl:mx-0"
            style={{minHeight: 'calc(100vh - 200px)'}}>
            {/* I use arch container*/}
            <div className="flex flex-row my-auto z-10 overflow-visible relative">
                <img className="mt-8 h-40 hidden lg:block" src={ArrowDown} alt=""/>
                <div className="mb-40">
                    <h1 className="text-7xl md:text-6xl text-center md:text-left font-bold text-white">I DON'T
                        USE<br/><span className="text-[var(--color-3)]">ARCH, btw</span></h1>
                    {/* Hire me & CV buttons */}
                    <div className="mt-8 space-x-5 flex flex-row justify-center md:justify-start">
                        {/* Hire me button */}
                        <button className="text-white bg-[var(--color-3)] py-2 px-10 rounded-3xl"
                                onClick={routeToContact}>Hire me
                        </button>
                        {/* Download CV button */}
                        <button onClick={routeToCV}
                                className="text-white bg-[#393E46] py-2 px-10 rounded-3xl flex flex-row justify-center">View
                            CV <span
                                className="ml-2 material-symbols-outlined">open_in_new</span></button>
                    </div>
                </div>

                <a className="absolute bottom-0 right-0 p-5 bg-[#393E46] hidden lg:block"
                   href={props.readMoreButton}>
                    <img className="h-6 w-6" src={ButtonDown} alt=""/>
                </a>
            </div>


            {/* image container*/}
            <div
                className="z-0 absolute w-full md:w-auto md:-translate-x-0 md:right-0 top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                <img className="opacity-30 md:opacity-100 m-auto" src={HeroImg} alt=""/>
            </div>
        </div>
    )
}

export default HeroComponent