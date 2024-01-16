import React from 'react'
import logo from '../../assets/img/лого-09.png'
import classes from './logo.module.css'

export const Logo = () => {
  return (
    <img 
        className={classes.logo}
        src={logo} 
        alt="Youtan poluo" 
    />
  )
}
