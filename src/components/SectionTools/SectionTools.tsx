import { Col, Container, Row } from "react-bootstrap";
import Icons from "../../assets/icons/Icons";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./sectionTools.scss";

type ArrayOfIcons = {
  iconName:
    | "linkedIn"
    | "gmail"
    | "twitter"
    | "be"
    | "facebook"
    | "frame"
    | "instagram"
    | "arrowUp"
    | "arrowDown"
    | "canva"
    | "illustration"
    | "inDesign"
    | "photoshop"
    | "adobeXD"
    | "figma";
  iconText: string;
}[];

const arrayOfIcons: ArrayOfIcons = [
  {
    iconName: "figma",
    iconText: "Figma",
  },
  {
    iconName: "adobeXD",
    iconText: "Adobe XD",
  },
  {
    iconName: "photoshop",
    iconText: "Photoshop",
  },
  {
    iconName: "inDesign",
    iconText: "In Design",
  },
  {
    iconName: "illustration",
    iconText: "Illustration",
  },
  {
    iconName: "canva",
    iconText: "Canva",
  },
];

const SectionTools = () => {
  return (
    <div className="section-tools pt-4">
      <Container fluid>
        <div className="text-center my-4">
          <SectionTitle title="Tools" />
        </div>
        <div className="mx-auto section-icons">
          <Row className="d-flex">
            {arrayOfIcons.map((item, index) => (
              <Col
                xs={6}
                md={4}
                lg={2}
                className="text-center h my-1"
                key={index}
              >
                <Icons width='100' height='100' icon={item.iconName} />
                <p className="my-2 text-center">{item.iconText}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SectionTools;
