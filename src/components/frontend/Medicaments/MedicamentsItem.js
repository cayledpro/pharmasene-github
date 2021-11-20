import { Card } from "react-bootstrap";
import defaultImage from "../../../assets/images/senepharmax-medicament-image.png";

function MedicamentsItem({ medicament }) {
    return (
        <Card
            border="success"
            className="shadow m-2"
            style={{ width: "300px" }}
        >
            <Card.Img variant="top" src={defaultImage} />
            <Card.Header className="text-success">Medicam test</Card.Header>
            <Card.Body>
                <Card.Title>{medicament.medicament_nom}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {medicament.medicament_categorie}
                </Card.Subtitle>
                <Card.Subtitle>{medicament.medicament_reference}</Card.Subtitle>
                <Card.Subtitle>{medicament.medicament_prix}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Card.Link href="#">Voir la liste</Card.Link>
            </Card.Footer>
        </Card>
    );
}

export default MedicamentsItem;
