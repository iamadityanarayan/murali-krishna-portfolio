import "./footer.scss";
import { Row, Col, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import { ResumeUrl } from "../../data/ResumeURL";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={10} className="text-center text-md-start">
            <h4>Let's build a vision together...</h4>
            <p>Looking for full time job</p> <p>opportunities..</p>
          </Col>
          <Col xs={12} md={2} className="links d-none d-md-flex flex-end">
            <Stack className="float-end" direction="vertical">
              <Link className="text-decoration-none text-white my-2 _f " to="/">
                Work
              </Link>
              <a
                href={ResumeUrl}
                className="text-decoration-none text-white my-2 _f "
                target="_blank"
                download
                rel="noreferrer"
              >
                Resume
              </a>
              <Link
                className="text-decoration-none text-white my-2 _f "
                to="myPassion"
              >
                My Passion
              </Link>
              <Link
                className="text-decoration-none text-white my-2 _f "
                to="visualMuseum"
              >
                Visual Museum
              </Link>
            </Stack>
          </Col>
        </Row>
        <div>
          <span className="d-block mb-0 text-center text-md-start">
            Follow #Murali Krishna
          </span>
          <Stack
            direction="horizontal"
            className="my-4 flex-wrap justify-content-center justify-content-md-start"
            gap={3}
          >
            <a
              href="https://www.linkedin.com/in/murali-krishana-adapa/"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons width="58" height="58" icon="linkedIn" />
            </a>
            <a
              href="mailto:muraliadpame001@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons width="58" height="58" icon="gmail" />
            </a>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons width="58" height="58" icon="twitter" />
            </a>
            <a
              href="https://www.behance.net/Murali-Krishna-Adapa"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons width="58" height="58" icon="be" />
            </a>
            <a
              href="https://instagram.com/murali_adapa_?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons width="58" height="58" icon="instagram" />
            </a>
            <a
              href="https://medium.com/@muralikrishna_adapa"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons width="58" height="58" icon="frame" />
            </a>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
