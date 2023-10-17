import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Portfolio.scss";
import Booki from "../assets/projects/Booki.png";
import SophieBluel from "../assets/projects/SophieBluel.png";
import NinaCarducci from "../assets/projects/NinaCarducci.png";
import Kasa from "../assets/projects/Kasa.png";
import MonVieuxGrimoire from "../assets/projects/MonVieuxGrimoire.png";
import MonPortfolio from "../assets/projects/MonPortfolio.png";

const Portfolio = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [projectTitle, setProjectTitle] = useState("");

    const projects = [
        {
            image: Booki,
            title: "Site: Booki - Agence de Voyages",
            description: (
                <div>
                    <p>Développer pour la start-up (Booki) un site internet permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.</p>

                    <h6>Poste:</h6>
                    <p> Développeur Web Frontend</p>

                    <h6>Mission:</h6>
                    <p>Installation d'environnement de développement front-end en intégrant du contenu avec HTML et CSS conformément à une maquette. Implémenter une interface responsive.</p>

                    <h6>Difficultés rencontrées:</h6>
                    <p>Redimensionner les images, et bien gérer le côté responsive de la page.
                    J'ai donc du apprendre les bonnes pratiques pour l'utilisation du HTML5 et CSS3 pour bien définir les dimenssions en % et utiliser la fonction Display Flex du CSS afin d'avoir une page conforme à la maquette et correctement responsive.</p>
                    
                    <h6>Compétences employés :</h6>
                    <ul>
                        <li>Mettre en place un environnement de développement front-end</li>
                        <li>Intégrer du contenu conformément à une maquette avec HTML et CSS</li> 
                        <li>Versionner le projet avec Git et GitHub</li>
                        <li>Implémenter une interface responsive</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/SimohBz/Project2_Booki.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consulter le code</a>
                        <a href=" https://simohbz.github.io/Project2_Booki/ " target="_blank" rel="noopener noreferrer" className="codeLink">Visiter le site</a>
                    </div>    
                </div>
            ),
        },
        {
            image: SophieBluel,
            title: "Site: Sophie Bluel - Architecte",
            description: (
                <div>
                    <p>L'agence ArchiWebos est chargée de la conception du site portfolio de l'architecte d'intérieur Sophie Bluel.</p>

                    <h6>Poste:</h6>
                    <p> Développeur Web Frontend</p>

                    <h6>Mission:</h6>
                    <p>Développer la page de présentation des travaux de l'architecte, la page de connexion de l'administrateur du site et la modale de téléchargement de nouveaux travaux (HTML fourni, code js à créer from scratch).</p>

                    <h6>Difficultés rencontrées:</h6>
                    <p>Apprendre le language JavaScript et créer des fonctions à partir de zéro, notamment les modales. J'ai du faire beaucoup de lectures, d'exercices et de recherches avant de me lancer dans le code. Les console-log m'ont beaucoup aidé à voir où il y avait des problèmes et à avancer pas à pas.</p>
                    
                    <h6>Compétences employés :</h6>
                    <ul>
                        <li>Manipuler les éléments du DOM avec JavaScript</li>
                        <li>Récupérer les données utilisateurs dans le JavaScript via des formulaires</li>
                        <li>Gérer les événements utilisateurs avec JavaScript</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/SimohBz/Projet3_Architecte-sophie-bluel.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consulter le code</a>
                        <a href=" https://simohbz.github.io/Projet3_Architecte-sophie-bluel/ " target="_blank" rel="noopener noreferrer" className="codeLink">Ce site n'est pas en ligne</a>
                    </div>
                </div>
            ),
        },
        {
            image: NinaCarducci,
            title: "Site: Nina Carducci - Photographe",
            description: (
                <div>
                    <p>Nina Carducci est une photographe qui fait partie de mes prospects. Le travail consiste à réaliser une optimisation du référencement de son site et lui fournir des conseils pratiques pour la maintenance. </p>

                    <h6>Poste:</h6>
                    <p> Développeur Web Freelance</p>

                    <h6>Mission:</h6>
                    <p>Optimiser les performances du site de la cliente, son référencement (SEO) ainsi que son accessibilité et débugger quelques fonctionnalités défaillantes dans le code HTML et Js.</p>

                    <h6>Difficultés rencontrées:</h6>
                    <p>La découverte des outils et techniques d'analyse des performances et de l'accessibilité. j'a appris à réaliser des audits pertinents avec "Lighthouse" pour les performances, et "Wave" pour l’accessibilité ainsi que l'implémentation des "meta" pour les réseaux sociaux, la gestion des mot-clé, et la minification du code JS et CSS. </p>
                    
                    <h6>Compétences employés :</h6>
                    <ul>
                        <li>Optimiser les performances et le référencement d'un site Web</li>
                        <li>Débugger un site web grâce aux Chrome DevTools</li>
                        <li>Rédiger un cahier de recette pour tester un site</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/SimohBz/Projet5_Nina-Carducci.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consulter le code</a>
                        <a href="https://simohbz.github.io/Projet5_Nina-Carducci/" target="_blank" rel="noopener noreferrer" className="codeLink">Visiter le site</a>
                    </div>
                </div>
            ),
        },
        {
            image: Kasa,
            title: "Site: Kasa - Location immobilière",
            description: (
                <div>
                    <p>Kasa, un des leaders de la location d'appartements entre particuliers. Ils ont lancé une refonte totale de leur site pour passer à une stack complète en JavaScript avec Node.js côté back-end et React côté frontend. </p>

                    <h6>Poste:</h6>
                    <p> Développeur Web Frontend</p>

                    <h6>Mission:</h6>
                    <p>Démarrer le projet React et développer l'ensemble de l'application, y compris les composants et les routes, en suivant la maquette fournie.</p>

                    <h6>Difficultés rencontrées:</h6>
                    <p>Bien comprendre React et son côté modulaire, afin de bien découper les différentes parties en composant. La construction du Carrousel et les Collapse ont également été challengeants. Il a fallu avoir une bonne vision d'ensemble du site afin de bien définir les différents composants parents, enfants selon les notions props et state. </p>
                    
                    <h6>Compétences employés :</h6>
                    <ul>
                        <li>Initialiser une application avec Create React App</li>
                        <li>Configurer la navigation entre les pages de l'application avec React Router</li>
                        <li>Développer des éléments d'interface d'un site web grâce à des composants React</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/SimohBz/Projet6_Application-kasa-Location.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consulter le code</a>
                        <a href="https://simohbz.github.io/Projet6_Application-kasa-Location/" target="_blank" rel="noopener noreferrer" className="codeLink">Visiter le site</a>
                    </div>
                </div>
            ),
        },
        {
            image: MonVieuxGrimoire,
            title: "Site: Mon Vieux Grimoire - Notation de livres",
            description: (
                <div>
                    <p>Le Vieux Grimoire, une petite chaîne de librairies qui souhaite lancer un site internet de référencement et de notation de livres. </p>

                    <h6>Poste:</h6>
                    <p> Développeur Backend freelance</p>

                    <h6>Mission:</h6>
                    <p>Collaborer avec un développeur frontend pour combiner les compétences sur un nouveau projet appelé "Mon Vieux Grimoire". Le travail est de réaliser le développement de toute la partie back-end avec Nodejs.</p>

                    <h6>Difficultés rencontrées:</h6>
                    <p>La découverte totale du coté back-end. Il a fallu comprendre comment fonctionne une API, les connexions entre les serveurs et les basses de données, la définition et la gestion des routes, les middlewares et les fonctions des controllers.</p>
                    
                    <h6>Compétences employés :</h6>
                    <ul>
                        <li>Implémenter un modèle logique de données conformément à la réglementation</li>
                        <li>Mettre en œuvre des opérations CRUD (Create/Read/Update/Delete)</li>
                        <li>Stocker des données de manière sécurisée</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/SimohBz/Projet7_Mon-Vieux-Grimoire-main.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consulter le code</a>
                        <a href=" https://simohbz.github.io/Projet7_Mon-Vieux-Grimoire-main/ " target="_blank" rel="noopener noreferrer" className="codeLink">Ce site n'est pas en ligne</a>
                    </div>
                </div>
            ),
        },
        {
            image: MonPortfolio,
            title: "Site: Mon Portfolio",
            description: (
                <div>
                    <p>Ce projet a pour but de préparer au mieux la recherche d’emploi pour un poste de développeur Frontend ou Backend Junior. </p>

                    <h6>Poste:</h6>
                    <p> Développeur Full-Stack Junior</p>

                    <h6>Mission:</h6>
                    <p>Faire un bilan des compétences à l'aide de la carte mentale, puis identifier les postes sur lesquels on souhaite postuler. En suite, créer un portfolio et le publier en ligne pour mettre en avant le profil auprès des potentiels recruteurs.</p>

                    <h6>Difficultés rencontrées:</h6>
                    <p>Techniquement, c'était relativement sans difficulté car l'encodage du Portfolio est basé sur des modèles de développement déjà réalisés au cours de la formation. Le challenge a été de mettre en valeur les nouveaux acquis professionnels pour donner envie de recruter un profil junior manquants de pratique.</p>
                    
                    <h6>Compétences employés :</h6>
                    <ul>
                        <li>Développer le site Portfolio avec js et react</li>
                        <li>lier le site avec l'ensemble des projets de développements réalisés</li>
                        <li>Déployer le site statique en ligne</li>
                    </ul>
                    <div className="buttonConsultation">
                        <a href="https://github.com/SimohBz/Projet8_Portfolio.git" target="_blank" rel="noopener noreferrer" className="codeLink">Consulter le code</a>
                        <a href=" https://simohbz.github.io/Projet8_Portfolio/ " target="_blank" rel="noopener noreferrer" className="codeLink">Visiter le site</a>
                    </div>
                </div>
            ),
        },
    ];

    const openModal = (title, desc) => {
        setProjectTitle(title);
        setDescription(desc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setProjectTitle("");
        setDescription("");
        setModalOpen(false);
    };

    return (
        <div className="portfolio">
            <h2>Mon Portfolio</h2>
            <h5 className="portfolioDescription">
                Projets réalisés au cours de ma dérniére formation en développement WEB
            </h5>
            <div className="imageProject">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="portfolioImageContainer"
                        onClick={() => openModal(project.title, project.description)}
                    >
                        <img src={project.image} alt={project.title} className="portfolioImage" />
                        <div className="overlay">
                            <h3 className="overlayText">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modalContent"
                overlayClassName="modalOverlay"
            >
                <span className="closeButton" onClick={closeModal}>
                    &times;
                </span>
                <div className="modalText">
                    <h2 className="modalTitle">{projectTitle}</h2>
                    <div className="modalDescription">{description}</div>
                </div>
            </Modal>
        </div>
    );
};

export default Portfolio;