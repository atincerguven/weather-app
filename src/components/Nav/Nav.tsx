import React from "react";
import { NavContainer } from "./styled";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <NavContainer>
      <Link to="/">Current Weather</Link>
      <Link to="forecast">16 days forecast</Link>
    </NavContainer>
  );
};

export default Footer;
