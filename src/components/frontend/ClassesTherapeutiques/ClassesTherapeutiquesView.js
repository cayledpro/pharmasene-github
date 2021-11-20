import { useEffect, useState } from "react";
import axios from "axios";

function ClassesTherapeutiquesView() {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [displayFilters, setDisplayFilters] = useState(false);

    useEffect(() => {
        axios
            .get(`/api/view-therapie`)
            .then((res) => {
                const therapies = res.data.therapie;
                console.log("therapies :", therapies);
                setAllData(therapies);
                setFilteredData(therapies);
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR getting therapies: " + err);
            });
    }, []);
    /*
    if (loading) {
        return <div className="text-danger">Loading...</div>;
    } else {
        console.log("Pharmacies : ", pharmacies);
    }
*/
    return <div>View classes therapeutiques ok</div>;
}
export default ClassesTherapeutiquesView;
