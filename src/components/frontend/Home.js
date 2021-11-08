import React, { useState } from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import PharmaciesList from "./Pharmacies/PharmaciesList";
import MedicamentsList from "./Medicaments/MedicamentsList";
import { GiHospitalCross } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaPills } from "react-icons/fa";
import { SiTeamspeak } from "react-icons/si";
import { menu_infos } from "../../data/menu_infos";

const CardService = ({ selectedCard }) => {
    return (
        <Card className="p-5" id="sn_card_services">
            <Card.Body>
                <Card.Title className="text-uppercase">
                    {menu_infos[selectedCard].title}
                </Card.Title>
                <Card.Text>{menu_infos[selectedCard].description}</Card.Text>
                <Card.Link href={menu_infos[selectedCard].link}>
                    Accéder à la page
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

const Home = () => {
    const [selectedCard, setSelectedCard] = useState(0);
    const handleSelect = (selectedCard, e) => {
        setSelectedCard(selectedCard);
    };

    return (
        <div>
            <Row
                xs="auto"
                className="pt-5 justify-content-center align-items-center"
            >
                <Col md={5} className="mb-4">
                    <Carousel
                        activeIndex={selectedCard}
                        onSelect={handleSelect}
                        controls={false}
                        fade
                        id="sn_carousel"
                    >
                        <Carousel.Item>
                            <CardService selectedCard={selectedCard} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardService selectedCard={selectedCard} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardService selectedCard={selectedCard} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardService selectedCard={selectedCard} />
                        </Carousel.Item>
                    </Carousel>
                    <div className="text-center text-dark mb-4 user-select-none">
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
                                <Card.Title>Classes thérapeutiques</Card.Title>
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
        </div>
    );
};

export default Home;
