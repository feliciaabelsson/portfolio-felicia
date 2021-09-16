import "../styles/portfoliopresentation.css";
import renderImg from "./RenderImg";

const PortfolioPresentation = () => {
  return (
    <div className="portfolio-starterpage-container">
      <h1>Min portfolio</h1>
      <p>
        Här presenterar jag min portfolio och presenterar mig själv. Detta är
        mina arbeten genom åren som jag vill visa er. Occaecat tempor incididunt
        minim esse cupidatat do id exercitation esse. Amet duis Lorem dolore
        exercitation et. Dolore in esse adipisicing laboris officia veniam
      </p>

      <section className="portfolio-box-container">
        <div classNAme="overlay">
          <div className="portfolio-boxes"></div>
        </div>
        <div className="portfolio-boxes"></div>
        <div className="portfolio-boxes"></div>
        <div className="portfolio-boxes"></div>
        <div className="portfolio-boxes"></div>
        <div className="portfolio-boxes"></div>

        <div className="testing">{renderImg}</div>
      </section>
    </div>
  );
};

export default PortfolioPresentation;
