import classes from "./orderItemBody.module.css";

interface IOrderItemBodyProps {
    children: React.ReactNode;
}

export const OrderItemBody = ({children}: IOrderItemBodyProps) => {
  return (
    <div className={classes.orderItemBody}>
        {children}
    </div>
  )
}
