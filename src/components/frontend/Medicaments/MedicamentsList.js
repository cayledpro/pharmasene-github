import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import MedicamentsItem from "./MedicamentsItem";

function MedicamentsList() {
    const [loading, setLoading] = useState(true);
    const [medicaments, setMedicaments] = useState([]);
    useEffect(() => {
        axios.get(`/api/view-medicament`).then((res) => {
            if (res.status === 200) {
                setMedicaments(res.data.medicament);
            }
            setLoading(false);
            console.log(medicaments);
        });
    }, []);

    return (
        <Row className="justify-content-center">
            {medicaments.map(
                ({
                    id,
                    medicament_nom,
                    medicament_categorie,
                    medicament_reference,
                    medicament_prix
                }) => (
                    <Col>
                        <MedicamentsItem
                            key={id}
                            medicament_nom={medicament_nom}
                            medicament_categorie={medicament_categorie}
                            medicament_reference={medicament_reference}
                            medicament_prix={medicament_prix}
                        />
                    </Col>
                )
            )}
        </Row>
    );
}
export default MedicamentsList;
