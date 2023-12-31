import "./slider.scss";
import Carousel from "react-bootstrap/Carousel";

const BG1 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/backgroundImage1.jpg?raw=true`;
const BG2 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/backgroundImage2.jpg?raw=true`;
const User1 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/userImage1.jpg?raw=true`;
const User2 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/userImage2.png?raw=true`;
// const User3 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/userImage3.jpg?raw=true`;

type Props = {};

const itemData = [
  {
    background: `${BG1}`,
    pageTitle: "Kind Words",
    userImage: `${User1}`,
    description: `Murali is an outstanding individual who possesses an impressive
    blend of creativity, and a deep understanding of user-centered
    design principles. One of Murali's greatest strengths is his
    adaptability, ability to build connections with the people and its
    importance in the design process. He has a natural curiosity and
    empathetic approach when it comes to understanding user needs and
    preferences. He possesses a strong ability to identify pain points
    and provide innovative solutions.`,
    userName: `Anil Madhura`,
    userRole: `IT Delivery - Empathetic`,
  },
  // {
  //   background: `${BG2}`,
  //   pageTitle: "Kind Words",
  //   userImage: `${User2}`,
  //   description: `Murali is an outstanding individual who possesses an impressive
  //   blend of creativity, and a deep understanding of user-centered
  //   design principles. One of Murali's greatest strengths is his
  //   adaptability, ability to build connections with the people and its
  //   importance in the design process. He has a natural curiosity and
  //   empathetic approach when it comes to understanding user needs and
  //   preferences. He possesses a strong ability to identify pain points
  //   and provide innovative solutions.`,
  //   userName: `Adityanarayan Tiwari`,
  //   userRole: `Senior Software Engineer`,
  // },
];
const Slider = (props: Props) => {
  return (
    <div className="__carousal d-none d-lg-flex">
      <Carousel
        controls={false}
        fade
        indicators={false}
        className="_c"
        data-bs-theme="dark"
      >
        {itemData.map((e, _) => (
          <Carousel.Item interval={900} key={_}>
            <img
              className="d-block __bg w-100 "
              src={e.background}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="title fw-bold text-white py-3 fs-1">Kind Words</h3>
              <div className="img-container ">
                <div
                  style={{ backgroundImage: `url(${e.userImage})` }}
                  className="user-image mx-auto rounded-circle c-image "
                ></div>
              </div>
              <p className="text-white font-d text-image mb-4">
                {e.description}
              </p>
              <h4 className="text-white">{e.userName}</h4>
              <span className="text-muted">{e.userRole}</span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
