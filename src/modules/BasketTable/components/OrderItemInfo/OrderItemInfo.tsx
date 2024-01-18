import classes from "./orderItemInfo.module.css";

interface IOrderItemInfoProps {
  title: string;
  code: string;
}

export const OrderItemInfo = ({ title, code }: IOrderItemInfoProps) => {
  return (
    <div className={classes.orderItemInfo}>
      <div className={classes.orderItemVendorCode}>арт. {code}</div>
      <div className={classes.orderItemTitle}>{title}</div>
    </div>
  );
};
