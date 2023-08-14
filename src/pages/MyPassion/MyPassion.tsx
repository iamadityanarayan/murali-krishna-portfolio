import "./myPassion.scss";

import { Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Box from "@mui/material/Box";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
type Props = {};

const itemData = [
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image1.jpg?raw=true`,
    title: "Image1",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image2.jpg?raw=true`,
    title: "Image2",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image3.jpg?raw=true`,
    title: "Image3",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image4.jpg?raw=true`,
    title: "Image4",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image5.jpg?raw=true`,
    title: "Image5",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image6.jpg?raw=true`,
    title: "Image6",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image7.jpg?raw=true`,
    title: "Image7",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image8.jpg?raw=true`,
    title: "Image8",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image9.jpg?raw=true`,
    title: "Image9",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image10.jpg?raw=true`,
    title: "Image10",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image11.jpg?raw=true`,
    title: "Image11",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image12.jpg?raw=true`,
    title: "Image12",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image13.jpg?raw=true`,
    title: "Image13",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image14.jpg?raw=true`,
    title: "Image14",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image15.jpg?raw=true`,
    title: "Image15",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image16.jpg?raw=true`,
    title: "Image16",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image17.jpg?raw=true`,
    title: "Image17",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/image18.jpg?raw=true`,
    title: "Image18",
  },
];
const itemData2 = [
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image2.jpg?raw=true`,
    title: "PImage2",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image3.jpg?raw=true`,
    title: "PImage3",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image4.jpg?raw=true`,
    title: "PImage4",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image5.jpg?raw=true`,
    title: "PImage5",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image6.jpg?raw=true`,
    title: "PImage6",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image7.jpg?raw=true`,
    title: "PImage7",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image8.jpg?raw=true`,
    title: "PImage8",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image9.jpg?raw=true`,
    title: "PImage9",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image10.jpg?raw=true`,
    title: "PImage10",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image11.jpg?raw=true`,
    title: "PImage11",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image12.jpg?raw=true`,
    title: "PImage12",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image13.jpg?raw=true`,
    title: "PImage13",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image14.jpg?raw=true`,
    title: "PImage14",
  },
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image15.jpg?raw=true`,
    title: "PImage15",
  },
];
const firstImage = [
  {
    img: `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/image1.jpg?raw=true`,
    title: "PImage1",
  },
];

const Hero1 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/sketching/hero1.jpg?raw=true`;
const Hero2 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/My%20Passion/photography/hero2.jpg?raw=true`;

const MyPassion = (props: Props) => {
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
            <div className="pt-5">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12} className="mb-4">
                    <Nav
                      variant="pills"
                      className="justify-content-center gap-3"
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
                        <Box
                          className=""
                          sx={{
                            width: "100%",
                            height: "100%",
                            overflowY: "auto",
                          }}
                        >
                          <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                              <ImageListItem
                                className="bg-white p-1 shadow-lg"
                                key={item.img}
                              >
                                <img
                                  src={`${item.img}?w=248&fit=crop&auto=format`}
                                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                  alt={item.title}
                                  loading="lazy"
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                        </Box>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Box
                          className=""
                          sx={{
                            width: "100%",
                            height: "100%",
                            overflowY: "hidden",
                          }}
                        >
                          <ImageList variant="masonry" cols={1} gap={8}>
                            {firstImage.map((item) => (
                              <ImageListItem
                                className="bg-white p-1 shadow-lg"
                                key={item.img}
                              >
                                <img
                                  src={`${item.img}?w=248&fit=crop&auto=format`}
                                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                  alt={item.title}
                                  loading="lazy"
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                          <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData2.map((item) => (
                              <ImageListItem
                                className="bg-white p-1 shadow-lg"
                                key={item.img}
                              >
                                <img
                                  src={`${item.img}?w=248&fit=crop&auto=format`}
                                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                  alt={item.title}
                                  loading="lazy"
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                        </Box>
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
