import React from 'react'
import classes from './infoBlock.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Titile } from '../../UI/Title/Title'

export const InfoBlock = () => {
  return ( 
    <Container>
        <section className={classes.container} id='info'>
            <div className={classes.header_info}>
                <Titile>О бренде</Titile>
                <p className={classes.header_info_text}>
                    Мы помогаем женщинам почувствовать свою естественную красоту, привлекательность, и проявить любовь к себе. 
                    Стать той самой исключительностью, которая цветёт в агрессивной городской среде и дарит свою красоту миру.
                </p>
            </div>
            <div className={classes.main_info}>
                <Titile>Почему тебе стоит иметь хотя бы одну нашу вещь?</Titile>
                <Row  className={classes.main_info_row} xs={1} md={3}>
                    <Col>
                        <h5  className={classes.main_info_titile} >Качество материалов</h5>
                        <p>Никакой синтетики и шитья на скорую руку. 
                            Красота в простоте, но простота — результат кропотливой работы и особого внимания к деталям.!
                        </p>
                    </Col>

                    <Col>
                        <h5 className={classes.main_info_titile} >Качество коммуникации</h5>
                        <p>Мы не масс-маркет. У нас нет скриптов для эффективных продаж, 
                            а индивидуальный подход — не слова из учебника по маркетингу. 
                            Искренность и эмпатия к клиентам — наша внутренняя потребность, 
                            ведь мы благодарны им за доверие и единомыслие в том, что считаем главным.
                        </p>
                    </Col>

                    <Col>
                        <h5 className={classes.main_info_titile} >Качество айдентики</h5>
                        <p>Мы не хотим быть очередным причесанным аккаунтом в пастельных тонах. 
                            Нам мало простой визуальной эстетики. Наши лукбуки — это произведения искусства, 
                            которые хочется рассматривать. Наши фото — это истории, героиней которых хочется быть.
                        </p>
                    </Col>
                </Row>
            </div>
        </section>
    </Container>
  )
}
