import { useEffect, useState } from "react";
import { getApiRoute } from "../../Utils/Route/ApiRouteBuilder.js";
import LoaderSpinner from "../../Components/Misc/LoaderSpinner.jsx";
import FlashMessage from "../../Components/Misc/FlashMessage.jsx";
import CvCard from "../../Components/Cv/CvCard.jsx";

function Index() {
    const [publicCvs, setPublicCvs] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(getApiRoute(`cv/getAllPublicCv`), {})
            .then((response) => {
                if (!response.ok) {
                    setError("Une erreur est survenue lors de la récupération des informations");
                    setLoading(false);
                }
                return response.json();
            })
            .then((data) => {
                setPublicCvs(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Une erreur critique est survenue lors de la récupération des informations");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoaderSpinner />;
    }

    if (error) {
        return <FlashMessage message={error} />;
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCvs = publicCvs.filter((publicCv) => {
        const fullName = `${publicCv.user.firstname} ${publicCv.user.lastname}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Liste des CV</h1>

            <div className="container">
                <input type="text" className="form-control mb-4" placeholder="Rechercher par prénom ou nom" value={searchTerm} onChange={handleSearchChange} />

                <div className="row">
                    {filteredCvs.map((publicCv) => (
                        <div key={publicCv.id} className="col-3 mb-4">
                            <CvCard cvData={publicCv} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Index;
