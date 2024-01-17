import classes from "../styles/menu.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BASKET_ROUTE, MAIN_ROUTE, STORE_ROUTE } from "../../../routes/consts";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Logo } from "../../../UI/Logo/Logo";
import { IconBasket } from "../../../UI/IconBasket/IconBasket";
import { scrollToBrand } from "../helpers/scrollTo";
import { NavGroupFirst } from "../components/NavGroupFirst/NavGroupFirst";
import { NavGroupSecond } from "../components/NavGroupSecond/NavGroupSecond";
import { active } from "../helpers/active";

export const Menu = () => {
  const location = useLocation();
  const isMain = location.pathname === MAIN_ROUTE;
  const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setSizeWindow(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlerBntLogo = () => {
    navigate(MAIN_ROUTE);
  };

  if (sizeWindow < 1200) {
    return (
      <Navbar
        expanded={isMenuOpen}
        expand="xl"
        className={
          isMenuOpen ? classes.customNavbarMenuOpen : classes.customNavbarMain
        }
        data-bs-theme="dark"
      >
        <Container className="">
          <Navbar.Brand
            className={`p-0 ${classes.logo}`}
            onClick={() => {
              toggleMenu();
              navigate(MAIN_ROUTE);
            }}
          >
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleMenu} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={`d-flex  ${classes.customContainerNav}`}>
              <Nav className={`d-flex  ${classes.customContainerNav}`}>
                <NavLink
                  className={active}
                  to={STORE_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    navigate(STORE_ROUTE);
                  }}
                >
                  Магазин
                </NavLink>
                <NavLink
                  className={classes.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    scrollToBrand("info");
                  }}
                >
                  О бренде
                </NavLink>
                <NavLink
                  className={classes.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    scrollToBrand("footer");
                  }}
                >
                  Контакты
                </NavLink>
                <NavLink
                  className={classes.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => toggleMenu()}
                >
                  Доставка и оплата
                </NavLink>
                <NavLink
                  className={classes.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    scrollToBrand("FAQ");
                  }}
                >
                  FAQ
                </NavLink>
                <NavLink
                  className={classes.customNavLink}
                  to={BASKET_ROUTE}
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  <IconBasket />
                </NavLink>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return (
    <>
      <Navbar
        className={isMain ? classes.customNavbarMain : classes.customNavbar}
        data-bs-theme="dark"
      >
        <Container className="d-flex justify-content-around">
          <NavGroupFirst />
          <Navbar.Brand
            className={`${classes.logo}`}
            onClick={() => handlerBntLogo()}
          >
            <Logo />
          </Navbar.Brand>
          <NavGroupSecond />
        </Container>
      </Navbar>
    </>
  );
};
