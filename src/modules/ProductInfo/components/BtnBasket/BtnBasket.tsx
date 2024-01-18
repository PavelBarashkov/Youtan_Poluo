import { useSelector } from "react-redux";
import classes from "./btnBasket.module.css";
import { RootState } from "../../../../app/store";
import { useAppDispatch } from "../../../../app/hooks";
import { addInBasket } from "../../../../sliceAll/basketSlice";

export const BtnBasket = () => {
  const dispatch = useAppDispatch();
  const { card, selected } = useSelector((state: RootState) => state.cardInfo);
  const data = {
    cardId: card.cardId,
    modelId: card.id,
    name: card.name,
    price: card.price,
    vendor_code: card.vendor_code,
    img: card.images[0],
    size: {
      id: selected.size.id,
      name: selected.size.name,
    },
    color: selected.color,
    quantity: 1
  };
  return (
    <button
      onClick={() => {
        dispatch(addInBasket(data));
      }}
      className={classes.btn}
    >
      В корзину
    </button>
  );
};
