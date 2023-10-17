import React from "react";
import "../styles/Contact.scss";
import iconeMail from "../assets/icone/iconMail.png";
import iconeLocalisation from "../assets/icone/iconLocalisation.png";
import iconePhone from "../assets/icone/iconPhone.png";

const Contact = () => {

    const emailAddress = "mohamed.bouazamour@gmail.com";

    return (
        <div className="contact">
            <h2>Contacts</h2>
            <div className="contactDescription">
            <h5>Je suis enthousiaste à l'idée de collaborer avec vous et de contribuer de manière significative à vos projets. N'hésitez pas à me contacter pour discuter de nos opportunités de travail ensemble.</h5>
        
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