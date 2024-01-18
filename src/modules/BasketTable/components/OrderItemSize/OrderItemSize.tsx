import classes from "./orderItemSize.module.css";

interface IOrderItemSizeProps {
  size: string;
}

export const OrderItemSize = ({ size }: IOrderItemSizeProps) => {
  return (
    <div className={classes.orderItemSizeContainer}>
      <div className={classes.orderItemSize}>{size}</div>
    </div>
  );
};
