import React, { useRef } from "react";
import Banner from "../../components/Banner/Banner";
import SectionTools from "../../components/SectionTools/SectionTools";
import Work from "../../components/Work/Work";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";

type Props = {
  handleClick: ()=>void;
  ref: any 
};

const Home = (props: Props) => {
 
  return (
    <>
      <Banner />
      <SectionTools />
      <div ref={props.ref}>
      <Work />
      </div>
      <ComingSoon />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
