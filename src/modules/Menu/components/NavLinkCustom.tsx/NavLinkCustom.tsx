import { NavLink as Link } from "react-router-dom";
import { scrollToBrand } from "../../helpers/scrollTo";
import classes from "../../styles/menu.module.css";
import React from "react";

interface INavLinkCustomProps {
  title:  string | React.ReactNode;
  toPage: string;
  toId?: string;
}

export const NavLinkCustom = ({ title, toPage, toId }: INavLinkCustomProps) => {
  return (
    <Link
      className={classes.customNavLink}
      to={toPage}
      onClick={() => {
        if (!toId) {
          return;
        }
      
        scrollToBrand(toId);
        
      }}
    >
      {title}
    </Link>
  );
};
