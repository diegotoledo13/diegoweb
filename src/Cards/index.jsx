import {
  batataBite,
  counterApp,
  gifExpert,
  googleClone,
  saleHtml,
  todoMachine,
} from "./datacard";
import "./cards.css";

export const Cards = (props) => {
  return (
    <div className="main-cards">
      <div class="card">
        <div class="align">
          <p>{batataBite.title}</p>
        </div>
        <img src={batataBite.imagenBatata} alt="Batatabit" srcset="" />
        <a href="https://github.com/diegotoledo13/Batatabit">Batatabit</a>
      </div>
      <div class="card">
        <div class="align">
          <p>{todoMachine.title}</p>
        </div>
        <img src={todoMachine.imagenTodos} alt="todomachine" srcset="" />
        <a href="https://github.com/diegotoledo13/todomachine">TodoMachine</a>
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
      </div>
      <div class="card">
        <div class="align">
          <p>{saleHtml.title}</p>
        </div>
        <img src={saleHtml.imagenSaleHtml} alt="salehtml" srcset="" />
        <a href="https://github.com/diegotoledo13/PracticoDeCSS">SaleHTML</a>
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
