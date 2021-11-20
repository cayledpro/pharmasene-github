import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import PharmaciesList from "./PharmaciesList";
import { RiFilterFill, RiFilterOffFill } from "react-icons/ri";
import { menu_infos } from "../../../data/menu_infos";

function PharmaciesView() {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [displayFilters, setDisplayFilters] = useState(false);
    const [formValues, setFormValues] = useState(null);
    const infos = menu_infos.filter((menu) => menu.link === "/pharmacies")[0];

    useEffect(() => {
        axios
            .get(`/api/view-pharmacie`)
            .then((res) => {
                const pharmacies = res.data.pharmacie;
                console.log("pharmacies :", pharmacies);
                setAllData(pharmacies);
                setFilteredData(pharmacies);
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR getting pharmacies: " + err);
            });
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const nom = event.target[0].value.toLowerCase();
        const region = event.target[1].value.toLowerCase();
        const commune = event.target[2].value.toLowerCase();
        const departement = event.target[3].value.toLowerCase();
        const status = event.target[4].value;
        console.log(
            "nom : ",
            nom,
            "| region : ",
            region,
            "| commune : ",
            commune,
            "| departement : ",
            departement,
            "| status : ",
            status
        );

        setFilteredData(
            allData.filter(
                (pharmacie) =>
                    pharmacie.pharmacie_nom.toLowerCase().includes(nom) &&
                    pharmacie.region.toLowerCase().includes(region) &&
                    pharmacie.commune.toLowerCase().includes(commune) &&
                    pharmacie.department.toLowerCase().includes(departement)
            )
        );

        if (status !== "Tous") {
            setFilteredData(
                filteredData.filter(
                    (pharmacie) => pharmacie.status === parseInt(status)
                )
            );
        }

        setFormValues({
            nom: nom,
            region: region,
            commune: commune,
            departement: departement,
            status: status,
        });
        console.log("Search Results :", filteredData);
    };

    if (loading) {
        return (
            <div className="wrapper">
                <div className="box-wrap">
                    <div className="box one"></div>
                    <div className="box two"></div>
                    <div className="box three"></div>
                    <div className="box four"></div>
                    <div className="box five"></div>
                    <div className="box six"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center text-dark pt-3">{infos.title}</h1>
            <p className="text-center text-dark">{infos.description}</p>

            <div id="filter-section" className="pb-3">
                <Row xs="auto" className="m-0 justify-content-center">
                    {displayFilters ? (
                        <Button
                            className="mb-3"
                            variant="secondary"
                            onClick={() => setDisplayFilters(!displayFilters)}
                        >
                            <RiFilterOffFill />
                            Fermer
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            className="mb-3"
                            variant="outline-secondary"
                            onClick={() => setDisplayFilters(!displayFilters)}
                        >
                            <RiFilterFill />
                            Afficher les filtres
                        </Button>
                    )}
                </Row>

                {displayFilters ? (
                    <Form onSubmit={(event) => handleSearch(event)}>
                        <FloatingLabel
                            controlId="inputNom"
                            label="Nom pharmacie"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Mettez ici le nom de la pharmacie"
                                name="nom"
                                defaultValue={formValues?.nom}
                            />
                        </FloatingLabel>
                        <Row>
                            <Col md>
                                <FloatingLabel
                                    controlId="inputRegion"
                                    label="Région"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Mettez ici la région de la pharmacie"
                                        name="region"
                                        defaultValue={formValues?.region}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="inputCommune"
                                    label="Commune"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Mettez ici la commune de la pharmacie"
                                        name="commune"
                                        defaultValue={formValues?.commune}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="inputDepartement"
                                    label="Département"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Mettez ici le département de la pharmacie"
                                        name="departement"
                                        defaultValue={formValues?.departement}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <FloatingLabel
                            controlId="selectStatus"
                            label="Status"
                            className="mb-3"
                        >
                            <Form.Select
                                aria-label="Choisissez le status (de garde ou pas)"
                                defaultValue={
                                    formValues ? formValues.status : "Tous"
                                }
                            >
                                <option>Tous</option>
                                <option value="1">De garde</option>
                                <option value="0">Pas de garde</option>
                            </Form.Select>
                        </FloatingLabel>
                        <Row xs="auto" className="m-0 justify-content-center">
                            <Col>
                                <Button type="submit" variant="outline-success">
                                    Rechercher
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => {
                                        setFilteredData(allData);
                                        setDisplayFilters(false);
                                        setFormValues(null);
                                    }}
                                >
                                    Réinitialiser
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                ) : null}
            </div>

            <PharmaciesList pharmacies={filteredData} />
        </div>
    );
}
export default PharmaciesView;
