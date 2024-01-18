import { Row, Col } from "react-bootstrap";
import { OrderItemBody } from "../OrderItemBody/OrderItemBody";
import { OrderItemBtnDelete } from "../OrderItemBtnDelete/OrderItemBtnDelete";
import { OrderItemColor } from "../OrderItemColor/OrderItemColor";
import { OrderItemInfo } from "../OrderItemInfo/OrderItemInfo";
import { OrderItemPreview } from "../OrderItemPreview/OrderItemPreview";
import { OrderItemPrice } from "../OrderItemPrice/OrderItemPrice";
import { OrderItemQuantity } from "../OrderItemQuantity/OrderItemQuantity";
import { OrderItemSize } from "../OrderItemSize/OrderItemSize";
import classes from "./orderItem.module.css";

export const OrderItem = ({ product }: any) => {
  return (
    <Row className={`g-2 ${classes.orderItem}`}>
      <Col xl={2} md={3} sm={12}>
        <div className={classes.orderItemContainerInfo}>
          <OrderItemPreview img={product.img} />
          <OrderItemInfo title={product.name} code={product.vendor_code} />
        </div>
      </Col>
      <Col xl={9} md={8} sm={12}>
        <OrderItemBody>
          <div className={classes.orderItemBody}>
            <OrderItemColor color={product.color.color} />
            <OrderItemSize size={product.size.name} />
            <OrderItemQuantity product={product} quantity={product.quantity} />
            <OrderItemPrice product={product}/>
            <OrderItemBtnDelete product={product}/>
          </div>
        </OrderItemBody>
      </Col>
    </Row>
  );
};
