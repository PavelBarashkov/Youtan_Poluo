import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title } from './components/Title/Title'
import { Input } from './components/Input/Input'

export const MakingAnOrder = () => {
  return (
    <Container style={{marginTop: 60}}>
        <Row>
            <Col>
                <div>
                    <Title/>
                    <form>
                        <Input placeholder='Ваше имя' error=''/>
                        <input/>
                        <input/>
                    </form>
                </div>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
  )
}
