import React from 'react'
import classes from './titile.module.css'

interface ITitileProps {
    children: React.ReactNode
}

export const Titile = ({children}: ITitileProps) => {
  return (
    <h2 className={classes.title}>{children}</h2>
  )
}
