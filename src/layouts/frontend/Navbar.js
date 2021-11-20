import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brand_logo from "../../assets/images/pharmasene-logo-300x138.png";

function NavbarFront() {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="border-bottom p-0"
            id="navbar_front"
        >
            <Container>
                <LinkContainer to="/" id="sn_navbar_brand_container">
                    <Image src={brand_logo} width="11.575%" />
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/pharmacies">Pharmacies</Nav.Link>
                        <Nav.Link href="/medicaments">Medicaments</Nav.Link>
                        <Nav.Link href="/classes-therapeutiques">
                            Classes thérapeutiques
                        </Nav.Link>
                        <Nav.Link href="/conseils">Conseils</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            href="https://www.pharmasene.com/"
                            className="text-success"
                        >
                            pharmasene.com
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarFront;
