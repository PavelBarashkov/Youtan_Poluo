import React from 'react'
import classes from "./orderItemPrice.module.css";
import { formatPrice } from '../../../../helpers/formatPrice';

export const OrderItemPrice = () => {
  return (
    <div className={classes.orderItemPrice}>{formatPrice(1000) } &#8381;</div>
  )
}
