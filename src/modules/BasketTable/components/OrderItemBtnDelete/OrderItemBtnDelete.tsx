import classes from "./orderItemBtnDelete.module.css";
import { TiDeleteOutline } from "react-icons/ti";

export const OrderItemBtnDelete = () => {
  return (
    <button className={classes.orderItemBtnDelete}>
      <TiDeleteOutline />
    </button>
  );
};
