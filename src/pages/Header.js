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

        {/* <section class="profile-desc">
          <p>
            Hi! My name is Felicia Abelsson and I study to become an bla bla..
            My goal is to become a webdesigner who can work with css all day and
            every day!
          </p>
        </section> */}
      </div>

      {/* <a href="https://youtu.be/7d2XsPSjjjI" target="_blank">
        <footer>
          <div class="texto">
            <span>
              <i class="fab fa-youtube"></i>
              watch on youtube
            </span>
          </div>
        </footer>
      </a> */}
    </div>
  );
};

export default Header;
