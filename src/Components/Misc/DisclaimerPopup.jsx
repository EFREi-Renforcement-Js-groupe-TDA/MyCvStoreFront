import { useEffect, useState } from "react";
const DisclaimerPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("hasSeenPopup");
        if (!hasSeenPopup) {
            setShowPopup(true);
            localStorage.setItem("hasSeenPopup", "true");
        }
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    if (!showPopup) {
        return null;
    }

    return (
        <div className="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="text-center mt-3">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Attention !
                        </h1>
                    </div>
                    <div className="modal-body">
                        <div className="alert alert-warning d-flex align-items-center" role="alert">
                            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <div>
                                <span>Il s&apos;agit d&apos;une application déployée à des fins de démonstration, mais les données saisies sont tout de même conservées sur un serveur.</span>
                                <br />
                                <span>Nous vous prions d&apos;utiliser des informations factices. Toutes les données seront supprimées avant le 30/11/2024.</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <button type="button" className="btn btn-secondary" onClick={closePopup}>
                            J&apos;ai compris
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPopup;
