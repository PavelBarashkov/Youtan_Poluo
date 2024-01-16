import classes from "./orderList.module.css";
import { OrderItem } from "../OrderItem/OrderItem";

export const OrderList = () => {
  return (
    <div className={classes.orderList}>
      {Array.from({ length: 2 }, (_, index) => (
        <OrderItem />
      ))}
    </div>
  );
};
