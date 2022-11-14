import "../Header/Header.css";
import imagesLogo from "../assets/icons/images";
import { Cards } from "../Cards";
function Portfolio() {
  return (
    <div className="main-portfolio">
      <img src={imagesLogo.portfolio} alt="portfolioicon" srcset="" />
      <p>Portfolio</p>
      <Cards />
    </div>
  );
}
export { Portfolio };
