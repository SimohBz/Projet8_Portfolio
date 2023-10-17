import React from "react";
import "../styles/Skills.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import html_logo from "../assets/logo/html_logo.png";
import css_logo from "../assets/logo/css_logo.png";
import js_logo from "../assets/logo/js_logo.png";
import react_logo from "../assets/logo/react_logo.png";
import nodejs_logo from "../assets/logo/nodejs_logo.png";
import expressjs_logo from "../assets/logo/expressjs_logo.png";
import mongodb_logo from "../assets/logo/mongodb_logo.png";
import github_logo from "../assets/logo/github_logo.png";
import vscode_logo from "../assets/logo/vscode_logo.png";
import figma_logo from "../assets/logo/figma_logo.png";
import terminal_logo from "../assets/logo/terminal_logo.png";
import postman_logo from "../assets/logo/postman_logo.png";

const Skills = () => {
    return (
        <div className="skills">
            <h2>Mes Compétences</h2>
                
            <h5>Mon univers informatique:<br></br>
                 créativité, performance et qualité.</h5>
            

            <ul>
                <li>
                    <FontAwesomeIcon icon={faKeyboard} />
                    <h3>Rédaction Web</h3>
                    <span className="hover-text">Création de contenus de qualité optimisée pour le web (test et debugging inclus). Utilisation des techniques de référencement (SEO) assurant performance, efficacité et garantissant visibilité maximale.</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode} />
                    <h3>Développement Web</h3>
                    <span className="hover-text">Utilisation de technologies performantes dans un monde numérique en constante évolution, du coté front-end et back-end. Concevoir des solutions web puissantes, intuitives et esthétiques.  </span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <h3>Versionnage</h3>
                    <span className="hover-text">Utilisation des systèmes de versionnage avancés (Github) pour suivre les modifications, collaborer efficacement et déployer les mises à jour en toute sécurité. Déploiment des projets en ligne en un processus fluide et sécurisé.</span>
                </li>
            </ul>
            <div className="skillsLogo">
                <img className="htmlLogo" src={html_logo} alt="logo html5" />
                <img className="cssLogo" src={css_logo} alt="logo css3" />
                <img className="jsLogo" src={js_logo} alt="logo Javascript" />
                <img className="reactLogo" src={react_logo} alt="logo React" />
                <img className="nodejsLogo" src={nodejs_logo} alt="logo Nodejs" />
                <img className="expressjsLogo" src={expressjs_logo} alt="logo Expressjs" />
                <img className="mongodbLogo" src={mongodb_logo} alt="logo Mongodb" />
                <img className="githubLogo" src={github_logo} alt="logo Github" />
                <img className="vscodeLogo" src={vscode_logo} alt="logo VSCode" />
                <img className="figmaLogo" src={figma_logo} alt="logo Figma" />
                <img className="terminalLogo" src={terminal_logo} alt="logo Terminal" />
                <img className="postmanLogo" src={postman_logo} alt="logo Postman" />
                
            </div>
        </div>
    )
}

export default Skills;