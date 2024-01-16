import React from 'react'
import classes from './customContainer.module.css'
import { Container } from 'react-bootstrap'
interface ICustomContainerProps {
    children: React.ReactNode
}

export const CustomContainer = ({children}: ICustomContainerProps) => {
  return (
    <Container className={classes.container}>
        {children}
    </Container>
  )
}
