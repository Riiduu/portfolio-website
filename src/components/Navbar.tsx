import {useState} from 'react';

const Navbar = (props: any) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="block py-10 mx-4 md:mx-4 lg:mx-8 xl:mx-0">
            <div className="flex flex-wrap justify-between items-center">
                <a href="/"
                   className="mr-4 block cursor-pointer py-auto text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                    Kristians Jelinsks
                </a>
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li className="flex items-center p-1 text-sm gap-x-2 text-white py-auto">
                            <a href={props.aboutNav} className="flex items-center">
                                About me
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2 text-white py-auto">
                            <a href={props.recentNav} className="flex items-center">
                                Recent works
                            </a>
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2 text-white py-auto">
                            <a href={props.contactNav} className="flex items-center">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className="relative my-auto ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button" onClick={handleNavToggle}>
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="white"
                             strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>
                </button>

                {/* Fixed Drop Menu */}
                <div
                    className={`fixed top-0 right-0 h-full z-20 bg-[#393E46] w-52 flex flex-col justify-start transition-transform duration-300 ease-in-out ${
                        navOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                    }`}>
                    <button
                        className="absolute top-11 right-4 h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button" onClick={handleNavToggle}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="white"
                                 strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                    </button>

                    <ul className="flex flex-col h-full justify-center items-end gap-4 px-4 font-medium text-xl text-white mt-20">
                        <li className="flex p-1 text-sm gap-x-2">
                            <a href={props.aboutNav} onClick={handleNavToggle} className="flex font-medium">
                                About me
                            </a>
                        </li>
                        <li className="flex p-1 text-sm gap-x-2">
                            <a href={props.recentNav} onClick={handleNavToggle} className="flex font-medium">
                                Recent works
                            </a>
                        </li>
                        <li className="flex p-1 text-sm gap-x-2">
                            <a href={props.contactNav} onClick={handleNavToggle} className="flex font-medium">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
