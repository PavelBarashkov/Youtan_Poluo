import React from "react";
import classes from "./orderItemQuantity.module.css";

export const OrderItemQuantity = () => {
  return (
    <div className={classes.orderItemQuantityContainer}>
      <div className={classes.orderItemQuantity}>
        <button className={classes.orderItemQuantityBtn}>-</button>
        <span>2</span>
        <button className={classes.orderItemQuantityBtn}>+</button>
      </div>
    </div>
  );
};
