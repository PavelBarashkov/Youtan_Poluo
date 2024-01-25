import React from 'react'
import { OrderItem } from '../OrderItem/OrderItem'

export const OrderList = () => {
  return (
    <div>
        {Array.from({length: 4}, (_, index) => (
            <OrderItem/>
        ))}
    </div>
  )
}
