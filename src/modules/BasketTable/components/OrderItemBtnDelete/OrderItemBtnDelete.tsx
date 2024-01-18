import { useAppDispatch } from "../../../../app/hooks";
import { IProduct, deleteItem } from "../../../../sliceAll/basketSlice";
import classes from "./orderItemBtnDelete.module.css";
import { BsTrash } from "react-icons/bs";

interface IOrderItemBtnDeleteProps {
  product: IProduct
}

export const OrderItemBtnDelete = ({product}: IOrderItemBtnDeleteProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteItem(product))} className={classes.orderItemBtnDelete}>
        <BsTrash size={'20px'} color="gray"/>
      </button>
    </div>
  );
};
