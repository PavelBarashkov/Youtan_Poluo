import React from 'react'
import { ColorItem } from '../../UI/ColourItem/ColourItem'
import classesColorList from './colorList.module.css'

export const ColorList = ({colors}: any) => {
  return (
    <>
        {colors && (
            <div className={classesColorList.container}>
                {colors.map((color: any) => (
                    <ColorItem  key={color} color={color}/>
                ))}
            </div>
        )}
    </>
  )
}