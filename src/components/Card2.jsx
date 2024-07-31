import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const Card2 = memo(
  ({
    className = "",
    icon,
    propBoxShadow,
    heading,
    propWidth,
    propDisplay,
    propMinHeight,
    propWidth1,
    ourPassionateAndQualified,
  }) => {
    const textContainerStyle = useMemo(() => {
      return {
        boxShadow: propBoxShadow,
      };
    }, [propBoxShadow]);

    const heading4Style = useMemo(() => {
      return {
        width: propWidth,
        display: propDisplay,
      };
    }, [propWidth, propDisplay]);

    const paragraph3Style = useMemo(() => {
      return {
        minHeight: propMinHeight,
        width: propWidth1,
      };
    }, [propMinHeight, propWidth1]);

    return (
      <div
        className={`flex-1 flex flex-col items-start justify-start min-w-[380px] max-w-full text-left text-5xl text-grey-10 font-raleway mq450:min-w-full ${className}`}
      >
        <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border">
          <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={icon}
            />
          </div>
        </div>
        <div
          className="self-stretch shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] z-[1] mt-[-28px] border-[2px] border-solid border-grey-15"
          style={textContainerStyle}
        >
          <h3
            className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]"
            style={heading4Style}
          >
            {heading}
          </h3>
          <div
            className="relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[96px]"
            style={paragraph3Style}
          >
            <p className="m-0">{ourPassionateAndQualified}</p>
          </div>
        </div>
      </div>
    );
  }
);

Card2.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  heading: PropTypes.string,
  ourPassionateAndQualified: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinHeight: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default Card2;
