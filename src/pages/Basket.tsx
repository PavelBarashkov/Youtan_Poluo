import React from "react";
import { Container } from "react-bootstrap";
import { BasketTable as Table } from "../modules/BasketTable";
export const Basket = () => {
  return (
    <Container style={{ marginTop: 59 }}>
      <Table />
    </Container>
  );
};
