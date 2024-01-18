import React from "react";
import classes from "./orderItemQuantity.module.css";

interface IOrderItemQuantity {
  quantity: number
}

export const OrderItemQuantity = ({quantity}: IOrderItemQuantity) => {
  return (
    <div className={classes.orderItemQuantityContainer}>
      <div className={classes.orderItemQuantity}>
        <button className={classes.orderItemQuantityBtn}>-</button>
        <span>{quantity}</span>
        <button className={classes.orderItemQuantityBtn}>+</button>
      </div>
    </div>
  );
};
