import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1 className="header-title">
              Felicia Abelsson<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="role-block"></div>
            <p className="role-block-title">Web designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
