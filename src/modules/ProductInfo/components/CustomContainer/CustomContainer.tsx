import React from "react";
import { Container } from "react-bootstrap";
import classes from "./customcontainer.module.css";

interface ICustomContainerProps {
    children: React.ReactNode
}
export const CustomContainer = ({children}: ICustomContainerProps) => {
  return (
  <Container className={classes.container}>
    {children}
  </Container>)
}
