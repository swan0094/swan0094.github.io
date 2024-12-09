import logo from "../images/logos_and_icons/Adelaide-Crows-Logo.png";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <a href="/" data-route="">
          <img src={logo} width="120px" alt="Adelaide FC Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/player_updates" end>
              Player Updates
            </NavLink>
          </li>
          <li>
            <NavLink to="/player_profile" end>
              Player Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/fan_engagement" end>
              Fan Engagement
            </NavLink>
          </li>
          <li>
            <NavLink to="/our_history" end>
              Our History
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact_us" end>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
