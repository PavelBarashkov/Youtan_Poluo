import React from 'react'
import classes from './customContainer.module.css'
interface ICustomContainerProps {
    children: React.ReactNode
}

export const CustomContainer = ({children}: ICustomContainerProps) => {
  return (
    <section className={classes.container}>
        {children}
    </section> 
  )
}
