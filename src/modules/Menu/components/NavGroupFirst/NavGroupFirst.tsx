import React from "react";
import { Nav } from "react-bootstrap";
import classes from "../../styles/menu.module.css";
import { NavLink } from "react-router-dom";
import { active } from "../../helpers/active";
import { MAIN_ROUTE, STORE_ROUTE } from "../../../../routes/consts";
import { NavLinkCustom } from "../NavLinkCustom.tsx/NavLinkCustom";

export const NavGroupFirst = () => {
  return (
    <Nav className={`mo-auto ${classes.customNav}`}>
      <NavLink className={active} to={STORE_ROUTE}>
        Магазин
      </NavLink>
      <NavLinkCustom title={"О бренде"} toPage={MAIN_ROUTE} toId={"info"} />
      <NavLinkCustom title={"Контакты"} toPage={MAIN_ROUTE} toId={"footer"} />
    </Nav>
  );
};
