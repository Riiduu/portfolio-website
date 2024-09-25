const Navbar = (props: any) => {
    return (
        <nav
            className="block py-10 mx-4 md:mx-4 lg:mx-8 xl:mx-0">
            <div className="flex flex-wrap justify-between">
                <a href="/"
                   className="mr-4 block cursor-pointer py-auto text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                    Kristians Jelinsks
                </a>
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li
                            className="flex items-center p-1 text-sm gap-x-2 text-white py-auto">


                            <a href={props.aboutNav} className="flex items-center">
                                About me
                            </a>
                        </li>
                        <li
                            className="flex items-center p-1 text-sm gap-x-2 text-white py-auto">


                            <a href={props.recentNav} className="flex items-center">
                                Recent works
                            </a>
                        </li>
                        <li
                            className="flex items-center p-1 text-sm gap-x-2 text-white py-auto">


                            <a href={props.contactNav} className="flex items-center">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className="relative my-auto ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button">
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="white" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;