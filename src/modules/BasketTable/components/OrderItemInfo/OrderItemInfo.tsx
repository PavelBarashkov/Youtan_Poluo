import classes from "./orderItemInfo.module.css";

export const OrderItemInfo = () => {
  return (
    <div className={classes.orderItemInfo}>
      <div className={classes.orderItemVendorCode}>арт. 164567</div>
      <div className={classes.orderItemTitle}>Костюмный классический</div>
    </div>
  );
};
