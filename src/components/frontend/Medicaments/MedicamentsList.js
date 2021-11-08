import { Row, Col } from "react-bootstrap";
import MedicamentsItem from "./MedicamentsItem";

function MedicamentsList({ medicaments }) {
    return (
        <Row xs="auto" className="m-0 justify-content-center">
            {medicaments.map((medicament, index) => (
                <Col key={index}>
                    <MedicamentsItem medicament={medicament} />
                </Col>
            ))}
        </Row>
    );
}
export default MedicamentsList;
