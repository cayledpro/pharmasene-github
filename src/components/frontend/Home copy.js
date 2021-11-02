import React, { useState } from "react";
import Header from "../../layouts/frontend/Header";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import PharmaciesList from "./Pharmacies/PharmaciesList";
import MedicamentsList from "./Medicaments/MedicamentsList";
import { GiHospitalCross } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaPills } from "react-icons/fa";
import { SiTeamspeak } from "react-icons/si";

const CardService = ({ selectedCard }) => {
    const infos = [
        {
            title: "Pharmacies",
            description:
                "Retrouvez la cartographie de toutes les officines du Sénégal et les pharmacies de garde.",
            link: "/pharmacies",
        },
        {
            title: "Médicaments",
            description:
                "Informez vous sur le prix des médicaments, les classes thérapeutiques et les descriptions.",
            link: "/medicaments",
        },
        {
            title: "Classes thérapeutiques",
            description:
                "Maecenas nec turpis mollis felis fringilla ultricies id sed urna. Nulla quis mi sapien.",
            link: "/classes-therapeutiques",
        },
        {
            title: "Conseils",
            description:
                "Faites-nous confiance et discutez avec nos experts pour des conseils sur mesure.",
            link: "/conseils",
        },
    ];

    return (
        <Card border="light" className="p-5 rounded" id="sn_card_services">
            <Card.Body>
                <Card.Title className="text-uppercase">
                    {infos[selectedCard].title}
                </Card.Title>
                <Card.Text>{infos[selectedCard].description}</Card.Text>
                <Card.Link href={infos[selectedCard].link}>
                    Accéder à la page
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

const Home = () => {
    const [selectedCard, setSelectedCard] = useState(0);

    return (
        <div>
            <Header />

            <Container className="mt-5" id="content">
                <Row
                    xs="auto"
                    className="pt-5 justify-content-center align-items-center"
                >
                    <Col md={5}>
                        <CardService selectedCard={selectedCard} />
                        <div className="text-center mb-4 user-select-none">
                            <span
                                className={
                                    selectedCard === 0
                                        ? "sn_span_selected text-uppercase align-middle"
                                        : null
                                }
                            >
                                o
                            </span>
                            <span
                                className={
                                    selectedCard === 1
                                        ? "sn_span_selected text-uppercase align-middle"
                                        : null
                                }
                            >
                                o
                            </span>
                            <span
                                className={
                                    selectedCard === 2
                                        ? "sn_span_selected text-uppercase align-middle"
                                        : null
                                }
                            >
                                o
                            </span>
                            <span
                                className={
                                    selectedCard === 3
                                        ? "sn_span_selected text-uppercase align-middle"
                                        : null
                                }
                            >
                                o
                            </span>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <Row xs="auto" className="justify-content-center">
                            <Col>
                                <Card
                                    style={{ width: "200px", height: "200px" }}
                                    className={`text-center justify-content-center align-items-center ${
                                        selectedCard === 0
                                            ? "sn_card_masonry_selected"
                                            : "sn_card_masonry"
                                    }`}
                                    onClick={() => setSelectedCard(0)}
                                >
                                    <GiHospitalCross className="fs-1" />
                                    <Card.Title>Pharmacies</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card
                                    style={{ width: "200px", height: "200px" }}
                                    className={`text-center mt-4 justify-content-center align-items-center ${
                                        selectedCard === 1
                                            ? "sn_card_masonry_selected"
                                            : "sn_card_masonry"
                                    }`}
                                    onClick={() => setSelectedCard(1)}
                                >
                                    <FaPills className="fs-1" />
                                    <Card.Title>Medicaments</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card
                                    style={{ width: "200px", height: "200px" }}
                                    className={`text-center mt-4 mt-lg-0 justify-content-center align-items-center ${
                                        selectedCard === 2
                                            ? "sn_card_masonry_selected"
                                            : "sn_card_masonry"
                                    }`}
                                    onClick={() => setSelectedCard(2)}
                                >
                                    <RiMentalHealthFill className="fs-1 sn_card_icon" />
                                    <Card.Title>
                                        Classes thérapeutiques
                                    </Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card
                                    style={{ width: "200px", height: "200px" }}
                                    className={`text-center mt-4 mb-2 justify-content-center align-items-center ${
                                        selectedCard === 3
                                            ? "sn_card_masonry_selected"
                                            : "sn_card_masonry"
                                    }`}
                                    onClick={() => setSelectedCard(3)}
                                >
                                    <SiTeamspeak className="fs-1" />
                                    <Card.Title>Conseils</Card.Title>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <PharmaciesList />
                <MedicamentsList />
            </Container>
        </div>
    );
};

export default Home;
