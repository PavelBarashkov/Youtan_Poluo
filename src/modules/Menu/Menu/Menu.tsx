import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../../routes/consts'
import { MenuForMainPage } from '../components/MenuForMainPage/MenuForMainPage'
import { MenuForOtherPage } from '../components/MenuForOtherPage/MenuForOtherPage'


export const Menu = () => {
    const location = useLocation();
    const isMain = location.pathname === MAIN_ROUTE;

    if (isMain) {
    return (
        <MenuForMainPage/>
    )
    }

    return (
        <MenuForOtherPage/>
    )

}