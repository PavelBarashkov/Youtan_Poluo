import React from "react";
import { Container } from "react-bootstrap";
import { Basket as BasketModule } from "../modules/Basket";

export const Basket = () => {
  return (
    <Container style={{ marginTop: 59 }}>
      <h3 style={{ textAlign: "center" }}>Корзина</h3>
      <BasketModule />
      {/* <Table /> */}
      {/* <Cdek/> */}
    </Container>
  );
};
