import { Row } from "react-bootstrap";
import { CardItem } from "../CardItem/CardItem";

export const ListCard = ({ cards }: any) => {
  return (
    <Row className="g-4 d-flex ">
      {cards &&
        cards.map((card: any) => <CardItem key={card.modelId} card={card} />)}
    </Row>
  );
};
