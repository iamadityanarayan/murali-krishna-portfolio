import { Row, Col, Stack, Container } from "react-bootstrap";
import "./footer.scss";

import Icons from "../../assets/icons/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col xs={12} md={8} className="text-center text-md-start">
            <h4>Let's build a vision together...</h4>
            <p>Looking for full time job</p> <p>opportunities..</p>
          </Col>
          <Col xs={12} md={4} className="links d-none d-md-flex">
            <Stack className="float-end" direction="vertical">
              <Link className="text-decoration-none text-white my-2 fs-2 " to=''>Work</Link>
              <Link className="text-decoration-none text-white my-2 fs-2 " to=''>Resume</Link>
              <Link className="text-decoration-none text-white my-2 fs-2 " to='myPassion'>My Passion</Link>
              <Link className="text-decoration-none text-white my-2 fs-2 " to='visualMuseum'>Visual Museum</Link>
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
              <Icons icon="linkedIn" />
            </a>
            <a
              href="mailto:muraliadpame001@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons icon="gmail" />
            </a>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons icon="twitter" />
            </a>
            <a
              href="https://www.behance.net/Murali-Krishna-Adapa"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons icon="be" />
            </a>
            <a
              href="https://instagram.com/murali_adapa_?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons icon="instagram" />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="h">
              <Icons icon="facebook" />
            </a>
            <a
              href="https://medium.com/@muralikrishna_adapa"
              target="_blank"
              rel="noreferrer"
              className="h"
            >
              <Icons icon="frame" />
            </a>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
