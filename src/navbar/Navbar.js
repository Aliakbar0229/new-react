import { NavLink } from "react-router-dom";
import logo from "../img/abilmente-magazine 1.png";
import { AiOutlineSearch } from "react-icons/ai";
import profil from "../img/close-up-portrait-pretty-smiling-girl_171337-11418 1 (2).png";
import { AiOutlineArrowDown } from "react-icons/ai";


function Navbar() {
    return (
        <div className="navbar">
            <p><NavLink to={"/"}><img src={logo} alt="" /></NavLink></p>
            <ul>
                <li><NavLink to="news">News</NavLink></li>
                <li><NavLink to="corsi">Corsi</NavLink></li>
                <li><NavLink to="tutorial">Tutorial</NavLink></li>
                <li><NavLink to="negozi">Negozi</NavLink></li>
            </ul>
            <ul className="search">
                <span><AiOutlineSearch /></span>
                {/* <hr /> */}
                <img src={profil} alt="" />
                <li><NavLink to="Bloger">Bloger</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;