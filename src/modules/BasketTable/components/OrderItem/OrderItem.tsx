import { OrderItemBody } from "../OrderItemBody/OrderItemBody";
import { OrderItemBtnDelete } from "../OrderItemBtnDelete/OrderItemBtnDelete";
import { OrderItemColor } from "../OrderItemColor/OrderItemColor";
import { OrderItemInfo } from "../OrderItemInfo/OrderItemInfo";
import { OrderItemPreview } from "../OrderItemPreview/OrderItemPreview";
import { OrderItemPrice } from "../OrderItemPrice/OrderItemPrice";
import { OrderItemQuantity } from "../OrderItemQuantity/OrderItemQuantity";
import { OrderItemSize } from "../OrderItemSize/OrderItemSize";
import classes from "./orderItem.module.css";

export const OrderItem = () => {
  return (
    <div className={classes.orderItem}>
      <OrderItemPreview />
      <OrderItemBody>
        <OrderItemInfo />
        <OrderItemColor />
        <OrderItemSize />
        <OrderItemQuantity />
        <OrderItemPrice />
        <OrderItemBtnDelete />
      </OrderItemBody>
    </div>
  );
};
