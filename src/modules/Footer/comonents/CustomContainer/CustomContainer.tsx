import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './customContainer.module.css'

interface ICustomContainerProps {
    children: React.ReactNode
}

export const CustomContainer = ({children}: ICustomContainerProps) => {
  return (
    <footer className={classes.footer} id='footer'>
        <Container>
            {children}
        </Container>
    </footer>
  )
}
