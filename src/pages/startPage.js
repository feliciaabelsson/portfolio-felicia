import Header from "./Header";
import PortfolioPresentation from "./PortfolioPresentation";
import "../styles/startpage.css";

const StartPage = () => {
  return (
    <div className="startpage-container">
      <Header />
      <PortfolioPresentation />
    </div>
  );
};

export default StartPage;
