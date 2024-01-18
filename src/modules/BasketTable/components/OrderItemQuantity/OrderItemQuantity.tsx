import React from "react";
import classes from "./orderItemQuantity.module.css";
import { useAppDispatch } from "../../../../app/hooks";
import { IProduct, addQuantity, reduceQuantity } from "../../../../sliceAll/basketSlice";

interface IOrderItemQuantity {
  quantity: number
  product: IProduct
}

export const OrderItemQuantity = ({quantity, product}: IOrderItemQuantity) => {
  const dispatch = useAppDispatch();


  return (
    <div className={classes.orderItemQuantityContainer}>
      <div className={classes.orderItemQuantity}>
        <button onClick={() => dispatch(reduceQuantity(product))} className={classes.orderItemQuantityBtn}>-</button>
        <span>{quantity}</span>
        <button  onClick={() => dispatch(addQuantity(product))} className={classes.orderItemQuantityBtn}>+</button>
      </div>
    </div>
  );
};
