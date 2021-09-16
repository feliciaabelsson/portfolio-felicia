import "../styles/contactpage.css"

const contactPage = () => {
  return (
    <div className="main-container contact-page-container">
      <h1>Vill du kontakta mig?</h1>
      <p>Felicia Abelsson</p>
      <div className="aside"><aside>X</aside><p>+46 809 62 17 93</p></div>
      <div className="aside"><aside>X</aside><p>f.abelsson@live.se</p></div>
      <button className="button-main">Klicka hem CV</button>
    </div>
  );
};

export default contactPage;
