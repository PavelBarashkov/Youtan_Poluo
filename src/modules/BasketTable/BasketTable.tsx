import { useSelector } from "react-redux";
import { OrderList } from "./components/OrderList/OrderList";
import { RootState } from "../../app/store";

export const BasketTable = () => {
  const { basket } = useSelector((state: RootState) => state.basket);

  if (basket?.length === 0) {
    return <div>Корзина пуста </div>;
  }

  return <OrderList list={basket} />;
};
