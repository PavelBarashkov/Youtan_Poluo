import classes from "./orderItemPreview.module.css";
import { Link } from "react-router-dom";

interface IOrderItemPreviewProps {
  img: string;
}

export const OrderItemPreview = ({ img }: IOrderItemPreviewProps) => {
  return (
    <div className={classes.orderItemPreview}>
      <Link to={"!#"}>
        <img
          className={classes.orderItemPreviewImg}
          src={img}
          alt="Youtan Poluo"
        />
      </Link>
    </div>
  );
};
