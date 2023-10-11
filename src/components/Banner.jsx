import React, { useEffect, useState } from "react";
import "../styles/Banner.scss";
import banner_img from "../assets/banner_img.webp";

// Animation après un court délai pour déclencher l'effet photo
const Banner = () => {
    const [animationClass, setAnimationClass] = useState("");
  
    useEffect(() => {
      const animationTimeout = setTimeout(() => {
        setAnimationClass("animate");
      }, 100);
  
      return () => {
        clearTimeout(animationTimeout);
      };
    }, []);
  
    return (
      <div className={`banner ${animationClass}`}>
        <img className="bannerImg" src={banner_img} alt="développeur web" />
        <div className="description">
          <h2>Dev. WEB Full-Stack junior</h2>
          
            <h3>Bienvenue sur mon Portfolio !<br/><br/>
            Je suis passionné par la création, compétent en technologies front-end et back-end, et prêt à contribuer à la réalisation de projets innovants.
            <br/><br/>

            Je cherche à rejoindre une équipe dynamique pour transformer des idées en réalité numérique tout en continuant à apprendre.</h3>

          <p>Je suis convaincu que la technologie peut changer le monde, et je veux faire partie de cette transformation. J'ai hâte de contribuer à des projets innovants, d'apprendre continuellement et de grandir professionnellement.</p>

          <p>Avec une soif insatiable d'apprendre et une passion pour la création, j'ai entrepris un parcours de formation solide qui m'a permis de maîtriser les technologies de développement front-end et back-end.</p>
          
          <p>Aujourd'hui, je suis prêt à mettre en pratique mes compétences pour donner vie à vos projets. Que ce soit en concevant des interfaces utilisateur élégantes et conviviales ou en développant des fonctionnalités dynamiques et évolutives, je suis prêt à relever tous les défis.</p>

        </div>
      </div>
    );
  };

export default Banner;


