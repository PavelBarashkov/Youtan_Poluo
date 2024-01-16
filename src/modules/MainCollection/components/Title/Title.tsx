import React from 'react'
import classes from './title.module.css'

interface ITitleProps {
    children: React.ReactNode
}

export const Title = ({children}: ITitleProps) => {
  return (
    <h1 className={classes.title}>{children}</h1>
  )
}
