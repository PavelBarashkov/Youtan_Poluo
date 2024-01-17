import classes from "../styles/menu.module.css";

export const active = ({ isActive }: any) => {
  return isActive
    ? `${classes.customNavLink_active}`
    : `${classes.customNavLink}`;
};
