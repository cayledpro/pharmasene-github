import { Row, Col } from "react-bootstrap";
import PharmaciesItem from "./PharmaciesItem";

function PharmaciesList({ pharmacies }) {
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
