import { memo, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AboutHeroAndNav = memo(
  ({
    className = "",
    frameHeaderPadding,
    abstractDesign,
    abstractDesign1,
    abstractDesign2,
    abstractDesign3,
    textButton,
    buttonDisplay,
    buttonMinWidth,
    textButtonBackgroundColor,
    buttonDisplay1,
    buttonMinWidth1,
    textButtonBackgroundColor1,
    buttonDisplay2,
    buttonMinWidth2,
    textButtonBackgroundColor2,
    buttonDisplay3,
    buttonMinWidth3,
    buttonDisplay4,
    buttonMinWidth4,
    frameDivDisplay,
    frameDivMinWidth,
    abstractDesignIconMinHeight,
    abstractDesign4,
    textWidth,
    text,
    headingDisplay,
    headingMinWidth,
    heading,
    paragraphHeight,
    paragraphDisplay,
    paragraph,
    frameSectionPosition,
    frameSectionAlignSelf,
  }) => {
    const frameSection2Style = useMemo(() => {
      return {
        padding: frameHeaderPadding,
        position: frameSectionPosition,
        alignSelf: frameSectionAlignSelf,
      };
    }, [frameHeaderPadding, frameSectionPosition, frameSectionAlignSelf]);

    const textButtonStyle = useMemo(() => {
      return {
        display: buttonDisplay,
        minWidth: buttonMinWidth,
      };
    }, [buttonDisplay, buttonMinWidth]);

    const button1Style = useMemo(() => {
      return {
        backgroundColor: textButtonBackgroundColor,
      };
    }, [textButtonBackgroundColor]);

    const textButton1Style = useMemo(() => {
      return {
        display: buttonDisplay1,
        minWidth: buttonMinWidth1,
      };
    }, [buttonDisplay1, buttonMinWidth1]);

    const button2Style = useMemo(() => {
      return {
        backgroundColor: textButtonBackgroundColor1,
      };
    }, [textButtonBackgroundColor1]);

    const textButton2Style = useMemo(() => {
      return {
        display: buttonDisplay2,
        minWidth: buttonMinWidth2,
      };
    }, [buttonDisplay2, buttonMinWidth2]);

    const button3Style = useMemo(() => {
      return {
        backgroundColor: textButtonBackgroundColor2,
      };
    }, [textButtonBackgroundColor2]);

    const textButton3Style = useMemo(() => {
      return {
        display: buttonDisplay3,
        minWidth: buttonMinWidth3,
      };
    }, [buttonDisplay3, buttonMinWidth3]);

    const textButton4Style = useMemo(() => {
      return {
        display: buttonDisplay4,
        minWidth: buttonMinWidth4,
      };
    }, [buttonDisplay4, buttonMinWidth4]);

    const textButton5Style = useMemo(() => {
      return {
        display: frameDivDisplay,
        minWidth: frameDivMinWidth,
      };
    }, [frameDivDisplay, frameDivMinWidth]);

    const container2Style = useMemo(() => {
      return {
        minHeight: abstractDesignIconMinHeight,
      };
    }, [abstractDesignIconMinHeight]);

    const container3Style = useMemo(() => {
      return {
        width: textWidth,
      };
    }, [textWidth]);

    const text1Style = useMemo(() => {
      return {
        display: headingDisplay,
        minWidth: headingMinWidth,
      };
    }, [headingDisplay, headingMinWidth]);

    const heading3Style = useMemo(() => {
      return {
        height: paragraphHeight,
        display: paragraphDisplay,
      };
    }, [paragraphHeight, paragraphDisplay]);

    const navigate = useNavigate();

    const onIconClick = useCallback(() => {
      navigate("/contact-page-laptop");
    }, [navigate]);

    return (
      <section
        className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[70px] box-border gap-[40px] max-w-full text-left text-19xl text-grey-10 font-raleway mq800:gap-[20px] mq800:pb-[45px] mq800:box-border ${className}`}
        style={frameSection2Style}
      >
        <header className="self-stretch h-32 flex flex-col items-start justify-start gap-[14px] max-w-full text-left text-base text-grey-15 font-outfit">
          <div className="self-stretch h-12 rounded-md bg-orange-90 box-border overflow-hidden shrink-0 flex flex-row items-end justify-start py-3 pr-0 pl-[512px] relative gap-[332px] border-[2px] border-solid border-grey-15 mq450:gap-[41px] mq450:pl-5 mq450:box-border mq800:gap-[83px] mq800:pl-32 mq800:box-border mq1350:gap-[166px] mq1350:pl-64 mq1350:box-border">
            <div className="ml-[-521px] mb-[-57px] h-[180px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border">
              <img
                className="w-[180px] h-[180px] relative object-contain"
                alt=""
                src={abstractDesign}
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[14px] mq1350:hidden">
              <div className="relative leading-[150%] font-medium whitespace-nowrap mq1150:hidden">
                Admission is Open, Grab your seat now
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] cursor-pointer"
                loading="lazy"
                alt=""
                src="/icon.svg"
                onClick={onIconClick}
              />
            </div>
            <img
              className="mb-[-57px] h-[180px] w-[180px] relative object-contain shrink-0"
              alt=""
              src={abstractDesign1}
            />
            <img
              className="h-[32.6px] w-[32.6px] absolute !m-[0] right-[328.2px] bottom-[-15.6px]"
              loading="lazy"
              alt=""
              src={abstractDesign2}
            />
            <img
              className="h-[50.4px] w-[50.4px] absolute !m-[0] top-[-25px] left-[292.3px]"
              alt=""
              src={abstractDesign3}
            />
          </div>
          <div className="self-stretch h-[70px] rounded-lg bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-between gap-[20px] max-w-full border-[2px] border-solid border-grey-15">
            <div className="w-[199.3px] bg-orange-65 box-border flex flex-row items-start justify-start py-4 px-5 gap-[5.7px] shrink-0 border-r-[2px] border-solid border-grey-15 border-l-[2px]">
              <img
                className="h-[34px] w-[34px] relative mix-blend-normal"
                loading="lazy"
                alt=""
                src="/shape14.svg"
              />
              <div className="w-[115.6px] flex flex-col items-start justify-start pt-[10.1px] px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[13.4px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={textButton}
                />
              </div>
            </div>
            <div className="h-[66px] w-[771px] flex flex-row items-start justify-start shrink-0 max-w-full mq450:hidden">
              <a className="[text-decoration:none] w-[107px] box-border flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 border-l-[2px]">
                <div
                  className="relative leading-[150%] font-medium inline-block min-w-[43px]"
                  style={textButtonStyle}
                >
                  Home
                </div>
              </a>
              <a
                className="[text-decoration:none] flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300"
                style={button1Style}
              >
                <div
                  className="relative leading-[150%] font-medium inline-block min-w-[65px] whitespace-nowrap"
                  style={textButton1Style}
                >
                  About Us
                </div>
              </a>
              <a
                className="[text-decoration:none] flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300"
                style={button2Style}
              >
                <div
                  className="relative leading-[150%] font-medium inline-block min-w-[78px]"
                  style={textButton2Style}
                >
                  Academics
                </div>
              </a>
              <a
                className="[text-decoration:none] bg-orange-95 flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-gainsboro-200"
                style={button3Style}
              >
                <div
                  className="relative leading-[150%] font-medium inline-block min-w-[80px]"
                  style={textButton3Style}
                >
                  Admissions
                </div>
              </a>
              <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-[transparent] flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
                <div
                  className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[87px] whitespace-nowrap"
                  style={textButton4Style}
                >
                  Student Life
                </div>
              </button>
              <a className="[text-decoration:none] bg-orange-75 flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-peru">
                <div
                  className="relative leading-[150%] font-medium inline-block min-w-[58px]"
                  style={textButton5Style}
                >
                  Contact
                </div>
              </a>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px] box-border max-w-full">
          <div
            className="flex-1 shadow-[6px_6px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-row items-center justify-start pt-0 pb-[100px] pr-20 pl-0 relative gap-[50px] min-h-[348px] max-w-full border-[2px] border-solid border-grey-15 mq800:gap-[25px] mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:box-border mq1350:pr-10 mq1350:box-border"
            style={container2Style}
          >
            <img
              className="h-[137px] w-[137px] absolute !m-[0] top-[0px] left-[0px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={abstractDesign4}
            />
            <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[10px] min-w-[348px] max-w-full z-[1] mq800:min-w-full">
              <button
                className="cursor-pointer py-[5px] px-3.5 bg-absolute-white w-[105px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start border-[2px] border-solid border-grey-15 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200"
                style={container3Style}
              >
                <div
                  className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[73px]"
                  style={text1Style}
                >
                  {text}
                </div>
              </button>
              <h1
                className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-4xl mq450:leading-[30px] mq800:text-11xl mq800:leading-[40px]"
                style={heading3Style}
              >
                {heading}
              </h1>
            </div>
            <div className="flex-1 relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block min-w-[348px] max-w-full mq800:min-w-full">
              {paragraph}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

AboutHeroAndNav.propTypes = {
  className: PropTypes.string,
  abstractDesign: PropTypes.string,
  abstractDesign1: PropTypes.string,
  abstractDesign2: PropTypes.string,
  abstractDesign3: PropTypes.string,
  textButton: PropTypes.string,
  abstractDesign4: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  frameHeaderPadding: PropTypes.any,
  buttonDisplay: PropTypes.any,
  buttonMinWidth: PropTypes.any,
  textButtonBackgroundColor: PropTypes.any,
  buttonDisplay1: PropTypes.any,
  buttonMinWidth1: PropTypes.any,
  textButtonBackgroundColor1: PropTypes.any,
  buttonDisplay2: PropTypes.any,
  buttonMinWidth2: PropTypes.any,
  textButtonBackgroundColor2: PropTypes.any,
  buttonDisplay3: PropTypes.any,
  buttonMinWidth3: PropTypes.any,
  buttonDisplay4: PropTypes.any,
  buttonMinWidth4: PropTypes.any,
  frameDivDisplay: PropTypes.any,
  frameDivMinWidth: PropTypes.any,
  abstractDesignIconMinHeight: PropTypes.any,
  textWidth: PropTypes.any,
  headingDisplay: PropTypes.any,
  headingMinWidth: PropTypes.any,
  paragraphHeight: PropTypes.any,
  paragraphDisplay: PropTypes.any,
  frameSectionPosition: PropTypes.any,
  frameSectionAlignSelf: PropTypes.any,
};

export default AboutHeroAndNav;
