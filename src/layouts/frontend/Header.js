import banner from "../../assets/images/senepharmax-banner.jpg";
import Navbar from "./Navbar";
import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const infos = [
        {
            title: "Pharmacies",
            description:
                "Retrouvez la cartographie de toutes les officines du Sénégal et les pharmacies de garde.",
            link: "/pharmacies",
        },
        {
            title: "Médicaments",
            description:
                "Informez vous sur le prix des médicaments, les classes thérapeutiques et les descriptions.",
            link: "/medicaments",
        },
        {
            title: "Classes thérapeutiques",
            description:
                "Maecenas nec turpis mollis felis fringilla ultricies id sed urna. Nulla quis mi sapien.",
            link: "/classes-therapeutiques",
        },
        {
            title: "Conseils",
            description:
                "Faites-nous confiance et discutez avec nos experts pour des conseils sur mesure.",
            link: "/conseils",
        },
    ];

    const jumbotron = infos.map((menu) =>
        location.pathname === menu.link ? (
            <div className="container text-center sn_jumbotron">
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
