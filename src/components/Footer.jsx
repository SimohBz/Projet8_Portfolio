import "../styles/Footer.scss";
import iconeGithub from "../assets/icone/iconGithub.png";
import iconeLinkedin from "../assets/icone/iconLinkedin.png";

const Footer = () => {
    return (
        <div className="footer">
          <p>© 2023 Mohamed BOUAZAMOUR. Tous droits réservés.</p>

          <div className="contactLink">
            <a href="https://www.linkedin.com/in/mohamed-bouazamour" target="_blank" rel="noopener noreferrer" className="codeLink"><img className="iconeLinkedin" src={iconeLinkedin} alt="logo Linkedin" /></a>

            <a href="https://github.com/SimohBz" target="_blank" rel="noopener noreferrer" className="codeLink"><img className="iconeGithub" src={iconeGithub} alt="logo Github" /></a>
          </div>
        </div>   
    )
}

export default Footer;