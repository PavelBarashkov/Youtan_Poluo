import { hexToRgb } from "../../../../helpers/hexToRgb";
import classes from "./orderItemColor.module.css";

export const OrderItemColor = () => {
  return (
    <div className={classes.orderItemColor} style={{backgroundColor: hexToRgb("#8B4513")}}></div>
  )
}
