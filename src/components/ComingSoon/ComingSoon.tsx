import "./comingSoon.scss";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionCard from "../CardComponent/SectionCard";
import { comingSoon } from "../../data/comingSoon";

const ComingSoon = () => {
  return (
    <div className="section-comingSoon pb-5 px-sm-4">
      <Container fluid>
      <div className="px-sm-4">
        <div className="pt-3 pt-xl-5 mb-1">
          <SectionTitle title="Coming Soon..." />
        </div>
        <SectionCard data={comingSoon} />
      </div>
      </Container>
    </div>
  );
};

export default ComingSoon;
