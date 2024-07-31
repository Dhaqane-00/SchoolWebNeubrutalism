import { useMemo } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const AboutOurAchie = ({
  className = "",
  frameSectionPosition,
  frameSectionAlignSelf,
  containerWidth,
  containerFlex,
  headingHeight2,
  paragraphHeight,
  paragraphMinHeight,
  heading,
  paragraph,
}) => {
  const frameSection1Style = useMemo(() => {
    return {
      position: frameSectionPosition,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionPosition, frameSectionAlignSelf]);

  const container1Style = useMemo(() => {
    return {
      width: containerWidth,
      flex: containerFlex,
    };
  }, [containerWidth, containerFlex]);

  const heading1Style = useMemo(() => {
    return {
      height: headingHeight2,
    };
  }, [headingHeight2]);

  const paragraph2Style = useMemo(() => {
    return {
      height: paragraphHeight,
      minHeight: paragraphMinHeight,
    };
  }, [paragraphHeight, paragraphMinHeight]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[30px] pb-1 box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
      style={frameSection1Style}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]"
        style={container1Style}
      >
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <button className="cursor-pointer py-[5px] px-3 bg-absolute-white w-[159px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
            <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center">
              Our Achievements
            </div>
          </button>
          <h1 className="m-0 w-[980px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">
            Our Awards and Recognitions
          </h1>
          <div className="w-[980px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
            Little Learners Academy takes pride in our commitment to delivering
            high-quality education and outstanding student experiences. We are
            honored to have received various awards and recognitions for our
            dedication to early childhood education. These accolades reflect our
            team's relentless efforts in creating an exceptional learning
            environment for our students.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-5xl mq800:gap-[20px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
            <Card heading={heading} paragraph={paragraph} />
            <Card heading={heading} paragraph={paragraph} />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[305px] max-w-full">
              <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border">
                <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-32.svg"
                  />
                </div>
              </div>
              <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] max-w-full z-[1] mt-[-28px] border-[2px] border-solid border-grey-15">
                <h3
                  className="m-0 w-[326.7px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[25px]"
                  style={heading1Style}
                >
                  Environmental Stewardship Award
                </h3>
                <div
                  className="w-[326.7px] relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[144px] max-w-full"
                  style={paragraph2Style}
                >
                  <p className="m-0">
                    Received from the Green Earth Society for our dedication to
                    environmental education, sustainable practices, and
                    fostering a love for nature in our students.
                  </p>
                  <p className="m-0">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[50px] max-w-full text-lg mq800:gap-[25px]">
            <b className="flex-1 relative leading-[130%] inline-block min-w-[100px] max-w-full">
              8 More Awards
            </b>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="w-12 rounded-md bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-2.5 border-[2px] border-solid border-grey-20">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-7.svg"
                />
              </div>
              <div className="w-12 rounded-md bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-2.5 border-[2px] border-solid border-grey-20">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-8.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutOurAchie.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  frameSectionPosition: PropTypes.any,
  frameSectionAlignSelf: PropTypes.any,
  containerWidth: PropTypes.any,
  containerFlex: PropTypes.any,
  headingHeight2: PropTypes.any,
  paragraphHeight: PropTypes.any,
  paragraphMinHeight: PropTypes.any,
};

export default AboutOurAchie;
