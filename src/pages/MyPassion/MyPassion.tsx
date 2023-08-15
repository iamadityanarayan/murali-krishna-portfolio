import "./myPassion.scss";

import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Sketching from "./Sketching";
import Photography from "./Photography";

const Hero1 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/hero1.jpg?raw=true`;
const Hero2 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/hero2.jpg?raw=true`;

const MyPassion = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => setToggle(!toggle);
  return (
    <>
      <div className="myPassion">
        <div className="hero__image">
          {toggle ? <img src={Hero1} alt="" /> : <img src={Hero2} alt="" />}
          <div className="section__title">
            {toggle ? "My Passion" : "Photography"}
          </div>
        </div>
        <Container fluid>
          <div className="pt-5">
            <div className="pt-4">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12} className="mb-4">
                    <Nav
                      variant="pills"
                      className="justify-content-center gap-3 mb-4"
                    >
                      <Nav.Item>
                        <Nav.Link onClick={handleToggle} eventKey="first">
                          Sketching
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link onClick={handleToggle} eventKey="second">
                          Photograph
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Sketching />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Photography />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyPassion;
