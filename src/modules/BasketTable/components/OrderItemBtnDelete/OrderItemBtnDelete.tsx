import classes from "./orderItemBtnDelete.module.css";
import { BsTrash } from "react-icons/bs";

export const OrderItemBtnDelete = () => {
  return (
    <div>
      <button className={classes.orderItemBtnDelete}>
        <BsTrash size={'20px'} color="gray"/>
      </button>
    </div>
  );
};
