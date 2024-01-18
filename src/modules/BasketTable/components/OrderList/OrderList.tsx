import classes from "./orderList.module.css";
import { OrderItem } from "../OrderItem/OrderItem";

export const OrderList = ({ list }: any) => {
  return (
    <div className={classes.orderList}>
      {list &&
        list.map((product: any) => (
          <OrderItem product={product} key={product.modelId} />
        ))}
    </div>
  );
};
