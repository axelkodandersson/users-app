import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" end>
                Hem
            </NavLink>
            <NavLink to="/users">Användare</NavLink>
        </nav>
    );
};

export default Nav;
