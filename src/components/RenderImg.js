// import imgData from "../pics.json";

const renderImg = () => {
  let images = require("../pics.json");

  return (
    <div>
      {images.map((image, i) => (
        <div key={i}>
          <img src={require(`${image.url}`)} key={i}></img>
        </div>
      ))}
    </div>
  );
};

export default renderImg;
