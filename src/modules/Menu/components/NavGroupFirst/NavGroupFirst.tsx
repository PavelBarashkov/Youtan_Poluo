import classes from "../../styles/menu.module.css";
import { Nav } from "react-bootstrap";
import { MAIN_ROUTE, STORE_ROUTE } from "../../../../routes/consts";
import { NavLinkCustom } from "../NavLinkCustom.tsx/NavLinkCustom";

export const NavGroupFirst = () => {
  return (
    <Nav className={`mo-auto ${classes.customNav}`}>
      <NavLinkCustom isActive={true} title={"Магазин"} toPage={STORE_ROUTE} />
      <NavLinkCustom title={"О бренде"} toPage={MAIN_ROUTE} toId={"info"} />
      <NavLinkCustom title={"Контакты"} toPage={MAIN_ROUTE} toId={"footer"} />
    </Nav>
  );
};
