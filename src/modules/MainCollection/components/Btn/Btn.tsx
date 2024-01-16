import classes from './btn.module.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { STORE_ROUTE } from '../../../../routes/consts'

export const Btn = () => {
    const navigat = useNavigate();

    const handBtn = () => {
        navigat(STORE_ROUTE);
    }

    return (
        <Container>
            <button 
                onClick={handBtn}
                className={classes.btn}
            > 
                Вся коллекция 
            </button>
        </Container>

    )
}
