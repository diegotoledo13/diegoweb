import React from "react";
import imagesLogo from "../assets/icons/images";
import { imagen } from "../assets/images/images";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-main-header">
      <div className="menu-main-header-content">
        <h1>Diego Toledo</h1>
        <hr />
        <img className="diego-photo" src={imagen.imgDiego} alt="Diego Toledo" />
        <hr />
        <p>
          Hola, mi nombre es Diego Toledo y soy ingeniero de software.
          ¡Bienvenido a mi sitio web personal!
        </p>
        <hr />
        <div className="media-social">
          <img src={imagesLogo.linkedin} alt="linkedin" />
          <img src={imagesLogo.github} alt="github" />
          <img src={imagesLogo.instagram} alt="instagram" />
        </div>
        <hr />
        <div className="main-menu">
          <div className="main-menu-images">
            <img src={imagesLogo.man} alt="" srcset="" />
            <img src={imagesLogo.skills} alt="" srcset="" />
            <img src={imagesLogo.portfolio} alt="" srcset="" />
          </div>
          <div className="menu-content-items">
            <a href="/#/">
              <button>Sobre mí</button>
            </a>
            <a href="/#/skills">
              <button>Habilidades</button>
            </a>
            <a href="/#/portfolio">
              <button>Portafolio</button>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Menu;
