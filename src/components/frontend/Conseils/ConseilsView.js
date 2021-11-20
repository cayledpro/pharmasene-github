import { useEffect, useState } from "react";
import axios from "axios";

function ConseilsView() {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [displayFilters, setDisplayFilters] = useState(false);

    useEffect(() => {
        axios
            .get(`/api/view-conseil`)
            .then((res) => {
                const conseils = res.data.conseil;
                console.log("conseils :", conseils);
                setAllData(conseils);
                setFilteredData(conseils);
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR getting conseils: " + err);
            });
    }, []);
    /*
    if (loading) {
        return <div className="text-danger">Loading...</div>;
    } else {
        console.log("Pharmacies : ", pharmacies);
    }
*/
    return <div>View conseils ok</div>;
}
export default ConseilsView;
