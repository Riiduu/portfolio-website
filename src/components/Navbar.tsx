import './Navbar.css'

const Navbar = (props: any) => {
    return (
        <div className="navbar__container">
            {/* Logo */}
            <div className="navbar__logo">
                <h1>Kristians Jelinsks</h1>
            </div>

            {/* Nav options */}
            <div className="navbar__nav_options">
                <a href={props.aboutNav}>About Me</a>
                <a href="#">Recent Works</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;