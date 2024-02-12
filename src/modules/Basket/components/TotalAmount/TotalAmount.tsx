import React from 'react'
import classes from "./totalAmount.module.css"

export const TotalAmount = () => {
  return (
    <div className={classes.TotalAmount}>
        <div className={classes.TotalAmountHeader}>Итого к оплате</div>
        <div className={classes.TotalAmountBody}> 
            <div>
                Товаров на сумму
            </div>
            <div>
                32 980 &#8381;
            </div>
        </div>
        <button className={classes.TotalAmountBtn}>Оформить заказ</button>
    </div>
  )
}
