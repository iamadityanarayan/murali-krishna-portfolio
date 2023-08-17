import "./banner.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UserPlaceholder from "../../assets/images/placeholders/home/pprofile.png";
const Profile = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/profile.jpg?raw=true`;

const Banner = () => {
  return (
    <div className="banner">
      <Container fluid className="">
        {/* <p className="ux">UX</p> */}
        <Row className="d-none d-lg-flex center justify-content-center vh-100 align-items-center mx-auto">
          <Col lg={5} className="mx-auto center-l">
            <Slide direction="right" className="__img text-end rounded-circle">
              {/* <img src={Profile} className="img-holder rounded-circle" alt="" /> */}
              <LazyLoadImage
                src={Profile}
                // width={600}
                // height={400}
                className="img-holder rounded-circle"
                placeholderSrc={UserPlaceholder}
                alt="Image Alt"
              />
            </Slide>
          </Col>
          <Col lg={7}>
            <div className="text-content">
              <Fade cascade damping={0.6} delay={1500}>
                <div className="mb-4">
                  <span>Hello, I am Murali Krishna!</span>
                </div>
                <p>I design</p>
                <p>functional and visually</p>
                <p>pleasing interfaces for mobile and web.</p>
              </Fade>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center d-lg-none flex-column  pt-5 align-items-center mx-auto">
          <Col sm={12} lg={5} className="mx-auto center-left">
            <div className="text-center rounded-circle animate__animated animate__slideInRight">
              {/* <img
                src={Profile}
                className="img-holder-2 rounded-circle"
                alt=""
              /> */}
              <LazyLoadImage
                src={Profile}
                // width={600}
                // height={400}
                className="img-holder-2 rounded-circle"
                placeholderSrc={UserPlaceholder}
                alt="Image Alt"
              />
            </div>
          </Col>
          <Col sm={12} lg={7} className="py-5">
            <div className="__text-content text-center">
              <h2 className="mb-4">Hello, I am Murali Krishna!</h2>
              <p>I design</p>
              <p>functional and visually</p>
              <p>pleasing interfaces for mobile and web.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
