import Header from "../components/Header";
import PortfolioPresentation from "../components/PortfolioPresentation";
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
