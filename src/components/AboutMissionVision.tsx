import { useMemo } from "react";
import PropTypes from "prop-types";

const AboutMissionVision = ({
  className = "",
  frameSectionPosition,
  frameSectionAlignSelf,
  containerWidth,
  containerFlex,
  textDisplay,
  textMinWidth,
  paragraphHeight,
  paragraphHeight1,
  paragraphMinHeight,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      position: frameSectionPosition,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionPosition, frameSectionAlignSelf]);

  const containerStyle = useMemo(() => {
    return {
      width: containerWidth,
      flex: containerFlex,
    };
  }, [containerWidth, containerFlex]);

  const textStyle = useMemo(() => {
    return {
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [textDisplay, textMinWidth]);

  const paragraphStyle = useMemo(() => {
    return {
      height: paragraphHeight,
    };
  }, [paragraphHeight]);

  const paragraph1Style = useMemo(() => {
    return {
      height: paragraphHeight1,
      minHeight: paragraphMinHeight,
    };
  }, [paragraphHeight1, paragraphMinHeight]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[30px] pb-1 box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
      style={frameSectionStyle}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]"
        style={containerStyle}
      >
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <button className="cursor-pointer py-[5px] px-3 bg-absolute-white w-[148px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
            <div
              className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[120px]"
              style={textStyle}
            >{`Mission & Visions`}</div>
          </button>
          <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">{`Our Mission & Visions`}</h1>
          <div
            className="w-[880px] relative text-lg leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full"
            style={paragraphStyle}
          >
            We are here to provide a nurturing and inclusive environment where
            young minds can thrive, fostering a love for learning and personal
            growth.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full text-left text-19xl mq800:gap-[20px]">
          <div className="flex-1 shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[47px] px-12 gap-[50px] min-w-[403px] max-w-full border-[2px] border-solid border-grey-15 mq800:gap-[25px] mq800:pl-6 mq800:pr-6 mq800:box-border mq800:min-w-full">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq800:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[130%] font-bold font-inherit inline-block min-w-[105px] max-w-full mq800:text-11xl mq800:leading-[40px] mq450:text-4xl mq450:leading-[30px]">
                Mission
              </h1>
              <img
                className="h-[60px] w-[60.4px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-11.svg"
              />
            </div>
            <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-20">
              At Little Learners Academy, our mission is to inspire a passion
              for learning and empower young minds to become confident,
              compassionate, and creative individuals. We strive to create a
              safe and inclusive space where children thrive academically,
              socially, and emotionally, setting the stage for a successful
              educational journey.
            </div>
          </div>
          <div className="flex-1 shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[47px] px-12 gap-[50px] min-w-[403px] max-w-full border-[2px] border-solid border-grey-15 mq800:gap-[25px] mq800:pl-6 mq800:pr-6 mq800:box-border mq800:min-w-full">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq800:flex-wrap">
              <h1 className="m-0 flex-1 relative text-inherit leading-[130%] font-bold font-inherit inline-block min-w-[86px] max-w-full mq800:text-11xl mq800:leading-[40px] mq450:text-4xl mq450:leading-[30px]">
                Vision
              </h1>
              <img
                className="h-[60px] w-20 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-12.svg"
              />
            </div>
            <div
              className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block min-h-[120px]"
              style={paragraph1Style}
            >
              <p className="m-0">
                Our vision is to be a beacon of educational excellence, where
                children are encouraged to explore, discover, and express their
                unique talents. We aim to foster a generation of lifelong
                learners equipped with critical thinking, empathy, and a deep
                appreciation for diversity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutMissionVision.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameSectionPosition: PropTypes.any,
  frameSectionAlignSelf: PropTypes.any,
  containerWidth: PropTypes.any,
  containerFlex: PropTypes.any,
  textDisplay: PropTypes.any,
  textMinWidth: PropTypes.any,
  paragraphHeight: PropTypes.any,
  paragraphHeight1: PropTypes.any,
  paragraphMinHeight: PropTypes.any,
};

export default AboutMissionVision;
