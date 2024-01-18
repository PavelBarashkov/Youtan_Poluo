import classes from "../../styles/menu.module.css";
import { Nav } from "react-bootstrap";
import { NavLinkCustom } from "../NavLinkCustom.tsx/NavLinkCustom";
import { BASKET_ROUTE, MAIN_ROUTE } from "../../../../routes/consts";
import { IconBasket } from "../../../../UI/IconBasket/IconBasket";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

export const NavGroupSecond = () => {
  const { menuCountOrder } = useSelector((state: RootState) => state.basket);

  return (
    <Nav className={`mo-auto ${classes.customNav}`}>
      <NavLinkCustom title={"Доставка и оплата"} toPage={MAIN_ROUTE} />
      <NavLinkCustom title={"FAQ"} toPage={MAIN_ROUTE} toId={"FAQ"} />
      <NavLinkCustom
        isActive={true}
        title={
          <>
            <IconBasket />
            {menuCountOrder > 0 && (
              <div className={classes.count}>{menuCountOrder}</div>
            )}
          </>
        }
        toPage={BASKET_ROUTE}
      />
    </Nav>
  );
};
