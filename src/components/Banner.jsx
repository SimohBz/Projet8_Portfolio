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
          
           <h3>
            Bienvenue sur mon Portfolio ! <br /><br />
            Je suis passionné par la création, compétent en technologies front-end et back-end, et prêt à contribuer dans des projets innovants, transformer des idées en réalité numérique tout en continuant à apprendre.
           </h3>

          <p>Grâce à mes vingt années d'expérience dans la gestion de projets industriels à l'échelle internationale, j'ai acquis une expertise solide qui constitue un socle de compétences, unissant harmonieusement le monde de l'industrie et de l'informatique. Cela me place en position de leader pour contribuer à façonner l'avenir de la transformation numérique.</p>

          <p>Collaborateur enthousiaste, curieux et résolu, j'aime travailler en équipe pour résoudre des problèmes complexes et explorer de nouvelles idées. Ma passion pour la programmation se traduit par une approche méthodique pour la résolution de problèmes et la création de code propre.</p>

          <p>Je suis convaincu que la technologie peut changer le monde, et je veux faire partie de cette transformation.</p>

        </div>
      </div>
    );
  };

export default Banner;


