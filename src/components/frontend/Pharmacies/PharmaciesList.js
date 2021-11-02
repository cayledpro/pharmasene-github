import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import PharmaciesItem from "./PharmaciesItem";

function PharmaciesList() {
    const [loading, setLoading] = useState(true);
    const [pharmacies, setPharmacies] = useState([]);
    useEffect(() => {
        axios.get(`/api/view-pharmacie`).then((res) => {
            if (res.status === 200) {
                setPharmacies(res.data.pharmacie);
            }
            setLoading(false);
            console.log(pharmacies);
        });
    }, []);

    if (loading) {
        return <div className="text-danger">Loading...</div>;
    }
    return (
        <Row xs="auto" className="m-0 justify-content-center">
            {pharmacies.map(
                ({
                    id,
                    pharmacie_nom,
                    pharmacie_adresse,
                    pharmacie_numero,
                }) => (
                    <Col>
                        <PharmaciesItem
                            key={id}
                            pharmacie_nom={pharmacie_nom}
                            pharmacie_adresse={pharmacie_adresse}
                            pharmacie_numero={pharmacie_numero}
                        />
                    </Col>
                )
            )}
        </Row>
    );
}
export default PharmaciesList;
