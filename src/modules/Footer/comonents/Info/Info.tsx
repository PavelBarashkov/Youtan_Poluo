import { Col, Row } from 'react-bootstrap'
import { Logo } from '../Logo/Logo'
import classes from './info.module.css'

export const Info = () => {
  return (
    <Row xs={1} md={3} className={classes.row}> 
        <Col>
            <div className={classes.list_text}>
                <p className={classes.text}>Вся коллекция</p>
                <p className={classes.text}>O бренде</p>
                <p className={classes.text}>Контакты</p>
            </div>
        </Col>
        <Col>
            <div className={classes.list_text}>
                <p className={classes.text}>+7 (982) 491-42-79</p>
                <p className={classes.text}>Pav.Barashkov@yandex.ru</p>
            </div>
        </Col> 
        <Col>
            <div className={classes.list_text_logo}>
                <Logo/>
                <p style={{margin: 0}} >Мы в <a href="#!">INSTAGRAM</a></p>
            </div>
        </Col> 
    </Row>
  )
}
