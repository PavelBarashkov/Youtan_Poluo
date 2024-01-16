import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import classesMenu from "../../styles/menu.module.css";
import { IconBasket } from "../../../../UI/IconBasket/IconBasket";
import { Logo } from "../../../../UI/Logo/Logo";
import { scrollToBrand } from "../../helpers/scrollTo";
import {
  BASKET_ROUTE,
  MAIN_ROUTE,
  STORE_ROUTE,
} from "../../../../routes/consts";

export const MenuForOtherPage = () => {
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

  const active = ({ isActive }: any) => {
    return isActive
      ? `${classesMenu.customNavLink} ${classesMenu.customNavLink_active}`
      : `${classesMenu.customNavLink}`;
  };

  if (sizeWindow < 1200) {
    return (
      <Navbar
        expand="xl"
        data-bs-theme="dark"
        expanded={isMenuOpen}
        className={
          isMenuOpen
            ? classesMenu.customNavbarMenuOpen
            : classesMenu.customNavbar
        }
      >
        <Container>
          <Navbar.Brand
            className={`p-0 ${classesMenu.logo}`}
            onClick={() => {
              toggleMenu();
              navigate(MAIN_ROUTE);
            }}
          >
            <Logo />
          </Navbar.Brand>

          <Navbar.Toggle onClick={toggleMenu} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={`d-flex  ${classesMenu.customContainerNav}`}>
              <Nav className={`d-flex  ${classesMenu.customContainerNav}`}>
                <NavLink
                  className={classesMenu.customNavLink}
                  to={STORE_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    navigate(STORE_ROUTE);
                  }}
                >
                  Магазин
                </NavLink>
                <NavLink
                  className={classesMenu.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    scrollToBrand("info");
                  }}
                >
                  О бренде
                </NavLink>
                <NavLink
                  className={classesMenu.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => {
                    toggleMenu();
                    scrollToBrand("footer");
                  }}
                >
                  Контакты
                </NavLink>

                <NavLink
                  className={classesMenu.customNavLink}
                  to={MAIN_ROUTE}
                  onClick={() => toggleMenu()}
                >
                  Доставка и оплата
                </NavLink>
                <NavLink
                  className={classesMenu.customNavLink}
                  to={""}
                  onClick={() => {
                    toggleMenu();
                    scrollToBrand("FAQ");
                  }}
                >
                  FAQ
                </NavLink>
                <NavLink
                  className={classesMenu.customNavLink}
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
      <Navbar className={classesMenu.customNavbar} data-bs-theme="dark">
        <Container className="d-flex justify-content-around">
          <Nav className={`mo-auto ${classesMenu.customNav}`}>
            <NavLink className={active} to={STORE_ROUTE}>
              Магазин
            </NavLink>
            <NavLink
              className={classesMenu.customNavLink}
              to={MAIN_ROUTE}
              onClick={() => scrollToBrand("info")}
            >
              О бренде
            </NavLink>
            <NavLink
              className={classesMenu.customNavLink}
              to={STORE_ROUTE}
              onClick={() => scrollToBrand("footer")}
            >
              Контакты
            </NavLink>
          </Nav>

          <Navbar.Brand
            className={`${classesMenu.logo}`}
            onClick={() => navigate(MAIN_ROUTE)}
          >
            <Logo />
          </Navbar.Brand>

          <Nav className={`mo-auto ${classesMenu.customNav}`}>
            <NavLink className={classesMenu.customNavLink} to={MAIN_ROUTE}>
              Доставка и оплата
            </NavLink>
            <NavLink
              className={classesMenu.customNavLink}
              to={BASKET_ROUTE}
              onClick={() => {
                scrollToBrand("FAQ");
              }}
            >
              FAQ
            </NavLink>
            <NavLink className={classesMenu.customNavLink} to={BASKET_ROUTE}>
              <IconBasket />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
