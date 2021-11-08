import banner from "../../assets/images/senepharmax-banner.jpg";
import Navbar from "./Navbar";
import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { menu_infos } from "../../data/menu_infos";

function Header() {
    const location = useLocation();
    const jumbotron = menu_infos.map((menu, index) =>
        location.pathname === menu.link ? (
            <div key={index} className="container text-center sn_jumbotron">
                <h1>{menu.title}</h1>
                <p>{menu.description}</p>
            </div>
        ) : null
    );

    return (
        <div id="header">
            <Navbar />
            {location.pathname === "/" ? (
                <Image src={banner} width="100%" />
            ) : null}
            {jumbotron}
        </div>
    );
}

export default Header;
