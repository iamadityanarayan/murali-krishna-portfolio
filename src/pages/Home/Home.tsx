import { useRef } from 'react';
import Banner from "../../components/Banner/Banner";
import SectionTools from "../../components/SectionTools/SectionTools";
import Work from "../../components/Work/Work";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";

const Home = ({id}: any) => {
  const tools: any = useRef(null);
 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollDown = () => {
    window.scrollTo({
      top: tools.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Banner scrollDown={scrollDown} />
      <div className="tools" ref={tools}>
      <SectionTools />
      </div>
      <div  ref={id}>
      <Work />
      </div>
      <ComingSoon />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
