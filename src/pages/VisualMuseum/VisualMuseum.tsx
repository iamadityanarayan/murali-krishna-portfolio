import "./visualMuseum.scss";
import { Col, Container, Row } from "react-bootstrap";

const itemData = [
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image1.jpg?raw=true`,
    title: "Image1",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image2.jpg?raw=true`,
    title: "Image2",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image3.jpg?raw=true`,
    title: "Image3",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image4.jpg?raw=true`,
    title: "Image4",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image5.jpg?raw=true`,
    title: "Image5",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image6.jpg?raw=true`,
    title: "Image6",
  },

  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image7.jpg?raw=true`,
    title: "Image7",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image8.jpg?raw=true`,
    title: "Image8",
  },
];
const secondArray = [
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image9.jpg?raw=true`,
    title: "Image9",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/image10.jpg?raw=true`,
    title: "Image10",
  },
];

const VisualMuseum = () => {
  return (
    <>
      <div className="visualMuseum">
        <div className="hero__image">
          <img
            src={`https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Visual%20Museum/hero.jpg?raw=true`}
            alt=""
          />
          <div className="section__title">Visual Museum</div>
        </div>
        <Container fluid>
          <div className="pt-5">
            <Row>
              {itemData.map((e) => (
                <Col sm={12} md={6} className="my-2" key={e.img}>
                  <div className="image-border p-4 p-lg-5">
                    <img className="img-fluid" src={e.img} alt={e.title} />
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col sm={12} md={4} className="my-2">
                <div className="image-border p-5">
                  <img
                    className="img-fluid"
                    src={secondArray[0].img}
                    alt={secondArray[0].title}
                  />
                </div>
              </Col>
              <Col sm={12} md={8} className="my-2">
                <div className="image-border p-5">
                  <img
                    className="img-fluid"
                    src={secondArray[1].img}
                    alt={secondArray[1].title}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VisualMuseum;
