import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import MedicamentsList from "./MedicamentsList";
import { RiFilterFill, RiFilterOffFill } from "react-icons/ri";
import { menu_infos } from "../../../data/menu_infos";

function MedicamentsView() {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [displayFilters, setDisplayFilters] = useState(false);
    const [formValues, setFormValues] = useState(null);
    const infos = menu_infos.filter((menu) => menu.link === "/medicaments")[0];

    useEffect(() => {
        axios
            .get(`/api/view-medicament`)
            .then((res) => {
                const medicaments = res.data.medicament;
                console.log("medicaments :", medicaments);
                setAllData(medicaments);
                setFilteredData(medicaments);
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR getting medicaments: " + err);
            });
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const nom = event.target[0].value.toLowerCase();
        const categorie = event.target[1].value.toLowerCase();

        console.log("nom : ", nom, "| categorie : ", categorie);

        setFilteredData(
            allData.filter(
                (pharmacie) =>
                    pharmacie.medicament_nom.toLowerCase().includes(nom) &&
                    pharmacie.medicament_categorie
                        .toLowerCase()
                        .includes(categorie)
            )
        );
        setFormValues({
            nom: nom,
            categorie: categorie,
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
                            label="Nom médicament"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Mettez ici le nom du médicament"
                                name="nom"
                                defaultValue={formValues?.nom}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputCategorie"
                            label="Catégorie"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Mettez ici la catégorie du médicament"
                                name="categorie"
                                defaultValue={formValues?.categorie}
                            />
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
            <MedicamentsList medicaments={filteredData} />
        </div>
    );
}
export default MedicamentsView;
