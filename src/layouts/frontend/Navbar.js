import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import brand_logo from "../../assets/images/senepharmax-logo-small.png";

function NavbarFront() {
    const [navBg, setNavBg] = useState("transparent");
    const [variant, setVariant] = useState("dark");
    const listenScrollEvent = () => {
        if (window.scrollY > 1) {
            setNavBg("light");
            setVariant("light");
        } else {
            setNavBg("transparent");
            setVariant("dark");
        }
    };

    const toggleNavEffect = (isHoveredOrClicked) => {
        if (isHoveredOrClicked) {
            setNavBg("light");
            setVariant("light");
        } else {
            if (window.scrollY <= 1) {
                setNavBg("transparent");
                setVariant("dark");
            }
        }
    };

    window.addEventListener("scroll", listenScrollEvent);
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg={navBg}
            variant={variant}
            className="fixed-top border-bottom"
            onMouseEnter={() => toggleNavEffect(true)}
            onMouseLeave={() => toggleNavEffect(false)}
            onClick={() => toggleNavEffect(true)}
            id="navbar_front"
        >
            <Container fluid>
                <LinkContainer to="/" className="mr-5">
                    <Image src={brand_logo} width="10%" />
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/pharmacies">Pharmacies</Nav.Link>
                        <Nav.Link href="/medicaments">Medicaments</Nav.Link>
                        <Nav.Link href="#classes-therapeutiques">
                            Classes thérapeutiques
                        </Nav.Link>
                        <Nav.Link href="#conseils">Conseils</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarFront;
