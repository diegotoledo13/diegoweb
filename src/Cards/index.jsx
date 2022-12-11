import {
  batataBite,
  counterApp,
  gifExpert,
  googleClone,
  saleHtml,
  todoMachine,
} from "./datacard";
import "./cards.css";
import imagesLogo from "../assets/icons/images";

export const Cards = (props) => {
  return (
    <div className="main-cards">
      <div class="card">
        <div class="align">
          <p>{batataBite.title}</p>
        </div>
        <img src={batataBite.imagenBatata} alt="Batatabit" srcset="" />
        <a href="https://github.com/diegotoledo13/Batatabit" target="_blank">
          <img className="icon-card" src={imagesLogo.github} alt="" srcset="" />
        </a>
      </div>
      <div class="card">
        <div class="align">
          <p>{todoMachine.title}</p>
        </div>
        <img src={todoMachine.imagenTodos} alt="todomachine" srcset="" />
        <a href="https://github.com/diegotoledo13/todomachine" target="_blank">
          <img className="icon-card" src={imagesLogo.github} alt="" srcset="" />
        </a>
        <a href="https://diegotoledo13.github.io/todomachine/" target="_blank">
          <img className="icon-card" src={imagesLogo.www} alt="" srcset="" />
        </a>
      </div>
      <div class="card">
        <div class="align">
          <p>{googleClone.title}</p>
        </div>
        <img src={googleClone.imagenClone} alt="googleclone" srcset="" />
      </div>
      <div class="card">
        <div class="align">
          <p>{gifExpert.title}</p>
        </div>
        <img src={gifExpert.imagenGif} alt="gifexpert" srcset="" />
        <a href="https://gif-expert-diego.netlify.app/" target="_blank">
          <img className="icon-card" src={imagesLogo.www} alt="" srcset="" />
        </a>
      </div>
      <div class="card">
        <div class="align">
          <p>{saleHtml.title}</p>
        </div>
        <img src={saleHtml.imagenSaleHtml} alt="salehtml" srcset="" />
        <a
          href="https://github.com/diegotoledo13/PracticoDeCSS"
          target="_blank"
        >
          <img className="icon-card" src={imagesLogo.github} alt="" srcset="" />
        </a>
      </div>
      <div class="card">
        <div class="align">
          <p>{counterApp.title}</p>
        </div>
        <img src={counterApp.imagenCounterApp} alt="counterapp" srcset="" />
      </div>
    </div>
  );
};
