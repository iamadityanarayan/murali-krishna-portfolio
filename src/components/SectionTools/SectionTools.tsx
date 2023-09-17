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
    | "figma"
    | "sketch";
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
  {
    iconName: "sketch",
    iconText: "Sketch",
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
          <div className="d-flex flex-wrap justify-content-around gap-3">
            {arrayOfIcons.map((item, index) => (
              <div className="text-center h my-1" key={index}>
                <Icons width="100" height="100" icon={item.iconName} />
                <p className="my-2 text-center">{item.iconText}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionTools;
