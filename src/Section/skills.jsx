import React from "react";
import imagesLogo from "../assets/icons/images";
import { imagesCertificate } from "../assets/certificate/certificate";
import "../Carrusel/style.css";
import "../Carrusel/contact.scss";
import "../Carrusel/Certificate.css";

function Skills() {
  return (
    <div className="main-skills">
      <img src={imagesLogo.skills} alt="skills" srcset="" />
      <p>Habilidades</p>
      <div className="carrusel-main">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={imagesLogo.reactLogo} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.github} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.photoshop} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.htmlIcon} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.cssIcon} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img
                src={imagesLogo.javaScriptIcon}
                height="80"
                width="80"
                alt=""
              />
            </div>
            <div class="slide">
              <img src={imagesLogo.sassIcon} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.postMan} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.reactLogo} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.github} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.photoshop} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.htmlIcon} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.cssIcon} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img
                src={imagesLogo.javaScriptIcon}
                height="80"
                width="80"
                alt=""
              />
            </div>
            <div class="slide">
              <img src={imagesLogo.sassIcon} height="80" width="80" alt="" />
            </div>
            <div class="slide">
              <img src={imagesLogo.postMan} height="80" width="80" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ul className="main-skills-list">
        <li>Frontend Developer</li>
        <li>Diseñador Gráfico</li>
        <li>Técnico en Reparación PC y Redes</li>
        <li>Idioma Español-Nativo</li>
        <li>Inglés Básico - Estudiando Actualmente</li>
      </ul>
      <div className="certificate-container">
        <div class="pic-ctn">
          <img src={imagesCertificate.basico} alt="" class="pic" />
          <img src={imagesCertificate.definitivoHtmlCss} alt="" class="pic" />
          <img src={imagesCertificate.diseñoGrafico} alt="" class="pic" />
          <img src={imagesCertificate.diseñoWeb} alt="" class="pic" />
          <img src={imagesCertificate.frontendDev} alt="" class="pic" />
          <img src={imagesCertificate.gitGithub} alt="" class="pic" />
          <img src={imagesCertificate.infoA} alt="" class="pic" />
          <img src={imagesCertificate.introReact} alt="" class="pic" />
          <img src={imagesCertificate.mobileFirst} alt="" class="pic" />
          <img src={imagesCertificate.practicoJs} alt="" class="pic" />
          <img src={imagesCertificate.prework} alt="" class="pic" />
          <img src={imagesCertificate.repManRed} alt="" class="pic" />
          <img src={imagesCertificate.visualBasic} alt="" class="pic" />
        </div>
      </div>
    </div>
  );
}
export { Skills };
