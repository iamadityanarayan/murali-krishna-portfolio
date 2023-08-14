import { Container } from "react-bootstrap";
import "./work.scss";

import SectionTitle from "../SectionTitle/SectionTitle";
import SectionCard from "../CardComponent/SectionCard";
import { workData } from "../../data/workData";
type Props = {};

const Work = (props: Props) => {
  console.log(workData);
  return (
    <div className="work-section pb-5 " id='#work'>
      <Container fluid>
        <div className="px-sm-4">
          <div className="pt-3 pt-xl-5 mb-3">
            <SectionTitle title="Work" />
          </div>
          <SectionCard data={workData} />
        </div>
      </Container>
    </div>
  );
};

export default Work;
