import { Link } from "react-router-dom";
import "../styles/globalmenu.css";

const GlobalMenu = () => {
  return (
    <div className="global-menu-container">
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>

      <section>
        <p>links to social media</p>
      </section>
    </div>
  );
};

export default GlobalMenu;
