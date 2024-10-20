import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import CvReviews from "./CvReviews.jsx";

function CvTemplate({ cv }) {
    const userData = cv.user;

    return (
        <>
            <div className="container mt-5 mb-5 border border-2 shadow">
                <div className="row">
                    <div className="col-3 bg-lightblue p-4">
                        <div>
                            <h5 className="fw-bold">Contact</h5>
                            {userData.firstname} {userData.lastname}
                            <br />
                            Email : {userData.email}
                            <br />
                            Téléphone : {cv.telephone}
                            <br />
                            LinkedIn :{" "}
                            <a href={cv.linkedin} target="_blank" rel="noopener noreferrer">
                                Lien
                            </a>
                        </div>
                        <hr />
                        <div>
                            <h5 className="fw-bold">Qui suis-je ?</h5>
                            {cv.biography}
                        </div>
                        <hr />
                        <div>
                            <h5 className="fw-bold">Langues parlées</h5>
                            <ul className="list-unstyled">
                                {cv.language.map((lang, index) => (
                                    <li key={index}>- {lang}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h5 className="fw-bold">Soft Skills</h5>
                            <ul className="list-unstyled">
                                {cv.softSkills.map((softSkill, index) => (
                                    <li key={index}>- {softSkill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="row bg-warning bg-dark-subtle">
                            <div className="text-center mt-4 center pb-3">
                                <h1>{cv.title}</h1>
                            </div>
                        </div>
                        <div className="row pt-4 ps-5 pe-5 pb-3">
                            <div>
                                <h4 className="fw-bold">Experiences professionnelles</h4>
                                {cv.experience.map((exp, index) => (
                                    <div key={index} className="mb-2">
                                        <span>
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                        <br />
                                        <span>
                                            <strong>{exp.compagny}</strong> - {exp.position}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div>
                                <h4 className="fw-bold">Cursus scolaire</h4>
                                {cv.education.map((edu, index) => (
                                    <div key={index} className="mb-2">
                                        <span>
                                            {edu.startDate} - {edu.endDate}
                                        </span>
                                        <br />
                                        <span>
                                            <strong>{edu.school}</strong> - {edu.formation}
                                        </span>
                                        <p>{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div>
                                <h4 className="fw-bold">Compétences</h4>
                                <ul className="list-unstyled">
                                    {cv.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CvReviews cvId={cv._id} cvReviews={cv.review} />
        </>
    );
}

CvTemplate.propTypes = {
    cv: PropTypes.object.isRequired,
};

export default CvTemplate;
