import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const AcademicFeatures = memo(
  ({
    className = "",
    propWidth,
    text,
    propDisplay,
    propMinWidth,
    heading,
    paragraph,
  }) => {
    const container5Style = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const text2Style = useMemo(() => {
      return {
        display: propDisplay,
        minWidth: propMinWidth,
      };
    }, [propDisplay, propMinWidth]);

    return (
      <div
        className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
      >
        <div className="w-[880px] flex flex-col items-start justify-start gap-[14px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button
              className="cursor-pointer py-[5px] px-3 bg-absolute-white w-[123px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20"
              style={container5Style}
            >
              <div
                className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[95px]"
                style={text2Style}
              >
                {text}
              </div>
            </button>
          </div>
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-10xl mq450:leading-[37px] mq1050:text-19xl mq1050:leading-[50px]">
            {heading}
          </h1>
          <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-20">
            {paragraph}
          </div>
        </div>
      </div>
    );
  }
);

AcademicFeatures.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default AcademicFeatures;
