import React from 'react'
import classesSizeItem from './sizeItem.module.css';

export const SizeItem = ({size}: any) => {
  return (
    <div className={classesSizeItem.size_item}>{size}</div>
  )
}