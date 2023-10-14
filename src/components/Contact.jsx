import React from "react";
import "../styles/Contact.scss";
import iconeMail from "../assets/icone/iconMail.png";
import iconeLocalisation from "../assets/icone/iconLocalisation.png";
import iconePhone from "../assets/icone/iconPhone.png";

const Contact = () => {

    const emailAddress = "mohamed.bouazamour@gmail.com";

    return (
        <div className="contact">
            <h2>Mes atouts et liens de contactes</h2>
            <div className="contactDescription">
            <h5>Collaborateur enthousiaste, curieux et résolu, j'aime travailler en équipe pour résoudre des problèmes complexes et explorer de nouvelles idées. Ma passion pour la programmation se traduit par une approche méthodique pour la résolution de problèmes et la création de code propre.</h5>

            <h6>Si vous cherchez un membre dynamique pour renforcer votre équipe de développement web, je suis prêt à faire mes preuves et à apporter une contribution précieuse à vos projets. </h6>
            </div>

            <div className="contactEmail">
                <img className="iconeMail" src={iconeMail} alt="Icone email" />
                <a className="mailTo" href={`mailto:${emailAddress}`}>mohamed.bouazamour@gmail.com</a>
            </div>                
            <div className="contactPhone">
                <img className="iconePhone" src={iconePhone} alt="Icone téléphone portable" />
                <p className="phoneNumber">(+33)06.68.52.55.77</p>
            </div>
            <div className="localisation">
                <img className="iconeLocalisation" src={iconeLocalisation} alt="Icone localisation" />
                <a className="toLocalisation" href="https://www.google.com/maps/place/Angers" target="_blank"  rel="noopener noreferrer">Angers_France</a>
            </div>
        </div>
    );
};

export default Contact;