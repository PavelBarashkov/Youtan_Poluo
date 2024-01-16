import React from 'react'
import { Spinner } from 'react-bootstrap'
import classes from './mySpinner.module.css'

export const MySpinner = () => {
  return (
    <Spinner animation="grow" className={classes.spinner}/>
  )
}
