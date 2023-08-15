import { itemData, secondArray } from "../../data/visualMuseum";
import "./visualMuseum.scss";
import { Col, Container, Row } from "react-bootstrap";


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
                <Col sm={12} md={6} className="my-3" key={e.img}>
                  <div className="image-border p-4 p-lg-5">
                    <img className="img-fluid" src={e.img} alt={e.title} />
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col sm={12} md={4} className="my-3">
                <div className="image-border p-5">
                  <img
                    className="img-fluid"
                    src={secondArray[0].img}
                    alt={secondArray[0].title}
                  />
                </div>
              </Col>
              <Col sm={12} md={8} className="my-3">
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
