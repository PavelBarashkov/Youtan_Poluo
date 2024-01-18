import classes from "./orderItemColor.module.css";
import { hexToRgb } from "../../../../helpers/hexToRgb";

interface IOrderItemColorProps {
  color: string;
}

export const OrderItemColor = ({ color }: IOrderItemColorProps) => {
  return (
    <div
      className={classes.orderItemColor}
      style={{ backgroundColor: hexToRgb(`${color}`) }}
    ></div>
  );
};
