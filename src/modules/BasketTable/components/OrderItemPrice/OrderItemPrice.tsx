import React from "react";
import classes from "./orderItemPrice.module.css";
import { formatPrice } from "../../../../helpers/formatPrice";
import { IProduct } from "../../../../sliceAll/basketSlice";

interface IOrderItemPrice {
  product: IProduct;
}

export const OrderItemPrice = ({ product }: IOrderItemPrice) => {
  const { price, quantity } = product;
  const priceOrder = price * quantity
  return (
    <div className={classes.orderItemPrice}>{formatPrice(priceOrder)} &#8381;</div>
  );
};
