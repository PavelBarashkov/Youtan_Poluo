import { formatPrice } from "../../../../helpers/formatPrice";
import classes from "./price.module.css";

interface IPriceProps {
  price: number;
}

export const Price = ({ price }: IPriceProps) => {
  if (!price) {
    return <div></div>;
  }

  return <div className={classes.price}>{formatPrice(price)} &#8381;</div>;
};
