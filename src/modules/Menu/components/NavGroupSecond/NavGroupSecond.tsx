import classes from "../../styles/menu.module.css";
import { Nav } from "react-bootstrap";
import { NavLinkCustom } from "../NavLinkCustom.tsx/NavLinkCustom";
import { BASKET_ROUTE, MAIN_ROUTE } from "../../../../routes/consts";
import { IconBasket } from "../../../../UI/IconBasket/IconBasket";

export const NavGroupSecond = () => {
  return (
    <Nav className={`mo-auto ${classes.customNav}`}>
      <NavLinkCustom title={"Доставка и оплата"} toPage={MAIN_ROUTE} />
      <NavLinkCustom title={"FAQ"} toPage={MAIN_ROUTE} toId={"FAQ"} />
      <NavLinkCustom
        isActive={true}
        title={<IconBasket />}
        toPage={BASKET_ROUTE}
      />
    </Nav>
  );
};
