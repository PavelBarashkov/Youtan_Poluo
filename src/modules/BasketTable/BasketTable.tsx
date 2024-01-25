import { useSelector } from "react-redux";
import { OrderList } from "./components/OrderList/OrderList";
import { RootState } from "../../app/store";
import { Row, Col } from "react-bootstrap";

export const BasketTable = () => {
  const { basket } = useSelector((state: RootState) => state.basket);

  if (basket?.length === 0) {
    return <div>Корзина пуста </div>;
  }

  return (
    <Row className="d-flex justify-content-between">
      <Col xs={12} lg={7} xl={7}>
        <OrderList list={basket} />
      </Col>
      <Col lg={4} xl={3}>
      <div> Общая сумма</div>
      </Col>
    </Row>
    );
};
