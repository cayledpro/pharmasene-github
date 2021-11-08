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
        });
    }, []);

    if (loading) {
        return <div className="text-danger">Loading...</div>;
    } else {
        console.log("Pharmacies : ", pharmacies);
    }
    return (
        <Row xs="auto" className="m-0 justify-content-center">
            {pharmacies.map((pharmacie, index) => (
                <Col key={index}>
                    <PharmaciesItem pharmacie={pharmacie} />
                </Col>
            ))}
        </Row>
    );
}
export default PharmaciesList;
