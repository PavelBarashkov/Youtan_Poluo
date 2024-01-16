import classes from "./orderItemPreview.module.css";
import photo from "../../коричнеКост1.jpg";
import { Link } from "react-router-dom";

export const OrderItemPreview = () => {
  return (
    <div className={classes.orderItemPreview}>
      <Link to={'!#'}>
        <img className={classes.orderItemPreviewImg} src={photo} alt="" />
      </Link>
    </div>
    );
};
