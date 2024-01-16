import React from 'react'
import img from '../../../../assets/img/ютан полуо зел-09.png'
import classes from './logo.module.css'

export const Logo = () => {
  return (
    <img className={classes.img} src={img} alt="Youtan Poluo" />
  )
}
