import { Col, Row } from "react-bootstrap";
import Icons from "../../assets/icons/Icons";
import { WorkDataType } from "../../types/Work";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";

type Props = {
  data: WorkDataType;
};

const SectionCard = ({ data }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "1.33 2"],
    // offset: ["end end", "start start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0.9, 1], [0.9, 1]);
  const opcaityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <>
      {data?.map((item, index) => (
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opcaityProgress,
          }}
          key={index}
          className="px-3"
        >
          <Row className={`py-3 align-items-center a_card`}>
            <Col
              className="d-none d-lg-flex section-work-left"
              xs={12}
              lg={6}
              xl={5}
            >
              <div className=" bg-image-color p-4 me-lg-3">
                <img src={item.image} className="w-100" alt="" />
              </div>
            </Col>
            <Col className="section-work-right" xs={12} lg={6} xl={7}>
              {/* <Fade > */}
              <Fade duration={100} cascade className="project-title">
                {item.projectTitle}
              </Fade>
              {/* </Fade> */}
              <ul className="d-flex  flex-xl-row gap-3">
                {item?.techList?.map((element, elIndex) => (
                  <li key={elIndex} className="d-flex align-items-center gap-2">
                    <Icons icon="dot" /> <span>{element}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-image-color mb-3 d-lg-none mx-auto p-4">
                <img src={item.image} className="w-100" alt="" />
              </div>
              <h4 className="project-overview">{item.projectOveriew}</h4>
              <p className="project-description">{item.projectDescription}</p>
              {item?.moreContent.map((e, i) => (
                <div key={i} className="mb-3">
                  <h4 className="p-title m-0">{e.title}</h4>
                  {e?.link ? (
                    <a href={e.link} className="p-content mb-2">
                      {e.desc}
                    </a>
                  ) : (
                    <p className="p-content mb-2">{e.desc}</p>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </motion.div>
      ))}
    </>
  );
};

export default SectionCard;
