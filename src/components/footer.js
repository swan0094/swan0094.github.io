import { NavLink } from "react-router";

const Footer = () => {
  return (
    <p className="highlightable">
      © 2024 Adelaide Football Club | All rights reserved <br />
      <br />
      <NavLink to="/terms_and_conditions_and_privacy" end>
        Terms and Conditions
      </NavLink>
      |
      <NavLink to="/terms_and_conditions_and_privacy" end>
        Privay Policy
      </NavLink>
    </p>
  );
};

export default Footer;
