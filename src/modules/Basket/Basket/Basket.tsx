import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { OrderList } from '../components/OrderList/OrderList'

export const Basket = () => {
  return (
    <Row  lg={3} className='d-flex justify-content-between'>
      <Col xs={12} lg={9} xl={7}>
        <OrderList />
      </Col>
      <Col xs={12} lg={3} xl={4}>
        <div>Виджут с общей стоимостью</div>
      </Col>
    </Row>
  )
}
