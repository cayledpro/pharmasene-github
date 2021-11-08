import { Card } from "react-bootstrap";
import defaultImage from "../../../assets/images/senepharmax-pharmacie-item-default.png";
import { GoLocation } from "react-icons/go";
import { FaSearchLocation, FaPhone } from "react-icons/fa";

function PharmaciesItem({ pharmacie }) {
    return (
        <Card
            border="success"
            className="shadow m-2"
            style={{ width: "300px" }}
        >
            <Card.Img variant="top" src={defaultImage} />
            {pharmacie.status ? (
                <Card.Header className="text-success">
                    Cette pharmacie est de garde
                </Card.Header>
            ) : (
                <Card.Header className="text-danger">
                    Cette pharmacie n'est pas de garde
                </Card.Header>
            )}
            <Card.Body>
                <Card.Title className="text-uppercase">
                    {pharmacie.pharmacie_nom}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <GoLocation className="text-success" />{" "}
                    {pharmacie.pharmacie_adresse}
                </Card.Subtitle>
                <Card.Subtitle>
                    <FaPhone className="text-success" />{" "}
                    {pharmacie.pharmacie_numero}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Card.Link href="#">
                    <FaSearchLocation /> Voir sur la carte
                </Card.Link>
            </Card.Footer>
        </Card>
    );
}

export default PharmaciesItem;
