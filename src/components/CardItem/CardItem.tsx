import React from "react";
import { Card, Carousel, Col } from "react-bootstrap";
import classesCardItem from "./cardItem.module.css";
import { ColorList } from "../ColorList/ColorList";
import { SizeList } from "../SizeList/SizeList";
import { AllSizes } from "../../helpers/AllSizes";
import "./CardItem.css";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../routes/consts";
import { CarouselListImg } from "../CarouselListImg/CarouselListImg";
import { formatPrice } from "../../modules/ProductInfo/helpers/formatPrice";

export const CardItem = ({ card }: any) => {
  const sizes = AllSizes(card.sizes);
  const navigate = useNavigate();

  return (
    <Col lg={4} sm={6} className={classesCardItem.col}>
      <Card
        className={classesCardItem.card}
      >
        <Card.Header className={classesCardItem.header}>
          <CarouselListImg
            images={card.imgs}
            onClick={() => navigate(`${PRODUCT_ROUTE}/${card.modelId}`)}
          />
        </Card.Header>
        <Card.Body
          className={classesCardItem.body}
          onClick={() => navigate(`${PRODUCT_ROUTE}/${card.modelId}`)}
        >
          <Card.Title className={classesCardItem.title}>
            {card?.name}
          </Card.Title>
          <Card.Text className={classesCardItem.price}>
            {formatPrice(card?.price)} &#8381;
          </Card.Text>
          <div className={classesCardItem.card_info}>
            <ColorList colors={card.colors} />
            <SizeList sizes={sizes} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
