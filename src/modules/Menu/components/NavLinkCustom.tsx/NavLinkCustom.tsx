import React from "react";
import classes from "../../styles/menu.module.css";
import { NavLink as Link } from "react-router-dom";
import { scrollToBrand } from "../../helpers/scrollTo";
import { active } from "../../helpers/active";

interface INavLinkCustomProps {
  title: string | React.ReactNode;
  toPage: string;
  toId?: string;
  isActive?: boolean;
}

export const NavLinkCustom = ({
  title,
  toPage,
  toId,
  isActive,
}: INavLinkCustomProps) => {
  return (
    <Link
      className={isActive ? active : classes.customNavLink}
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
