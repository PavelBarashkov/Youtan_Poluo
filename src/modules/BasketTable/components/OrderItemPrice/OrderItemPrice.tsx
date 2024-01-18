import React from 'react'
import classes from "./orderItemPrice.module.css";
import { formatPrice } from '../../../../helpers/formatPrice';

interface IOrderItemPrice {
  price: number;
}

export const OrderItemPrice = ({price}: IOrderItemPrice) => {
  return (
    <div className={classes.orderItemPrice}>{formatPrice(price) } &#8381;</div>
  )
}
