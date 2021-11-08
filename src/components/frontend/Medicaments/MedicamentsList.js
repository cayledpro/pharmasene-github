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
        });
    }, []);

    if (loading) {
        return <div className="text-danger">Loading...</div>;
    } else {
        console.log("Medicaments : ", medicaments);
    }

    return (
        <Row className="justify-content-center">
            {medicaments.map((medicament, index) => (
                <Col>
                    <MedicamentsItem key={index} medicament={medicament} />
                </Col>
            ))}
        </Row>
    );
}
export default MedicamentsList;
