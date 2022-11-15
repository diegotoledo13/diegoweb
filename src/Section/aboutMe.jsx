import "../Header/Header.css";
import imagesLogo from "../assets/icons/images";
function AboutMe() {
  return (
    <div>
      <div className="about-me">
        <img src={imagesLogo.man} alt="aboutme-icon" />
        <h2>Sobre mí</h2>
        <p className="about-me-p">
          Me considero una persona responsable, organizada y autocrítica. Me
          siento a gusto trabajando en equipo, dispuesto a aportar ideas y
          ejecutar soluciones. Disfruto de los desafíos y como autodidacta
          siempre me encuentro en un continuo proceso de aprendizaje.
        </p>
        <div className="contact-me">
          <img src={imagesLogo.address} alt="location" />
          <p>Maldonado - Uruguay</p>
          <img src={imagesLogo.mail} alt="mail" />
          <p>diego.toledo.sanchez13@gmail.com</p>
          <img src={imagesLogo.call} alt="phone" />
          <p>+5989818265</p>
          <img src={imagesLogo.linkedin} alt="linkedin" />
          <p>https://www.linkedin.com/in/diego-toledo-64a356241/</p>
        </div>
      </div>
      <div className="download-button">
        <p>Puedes descargar mi CV aquí</p>
        <a href="/Diego CV.pdf" download={""}>
          <button>Descarga</button>{" "}
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
