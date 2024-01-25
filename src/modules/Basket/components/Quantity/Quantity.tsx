import React from "react";
import classes from "./quantity.module.css";

interface IQuantity {
  quantity: number
}

export const Quantity = () => {
  return (
    <div className={classes.quantityContainer}>
      <div className={classes.quantity}>
        <button className={`${classes.QuantityBtn} ${classes.left}` }>-</button>
        <span>1</span>
        <button className={`${classes.QuantityBtn} ${classes.right}` }>+</button>
      </div>
    </div>
  );
};
