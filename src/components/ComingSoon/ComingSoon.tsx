import { Container } from "react-bootstrap";
import "./comingSoon.scss";

import SectionTitle from "../SectionTitle/SectionTitle";
import SectionCard from "../CardComponent/SectionCard";
import { comingSoon } from "../../data/comingSoon";
type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <div className="section-comingSoon pb-5 px-sm-4">
      <Container fluid>
      <div className="px-sm-4">
        <div className="pt-3 pt-xl-5 mb-3">
          <SectionTitle title="Coming Soon..." />
        </div>
        <SectionCard data={comingSoon} />
      </div>
      </Container>
    </div>
  );
};

export default ComingSoon;
