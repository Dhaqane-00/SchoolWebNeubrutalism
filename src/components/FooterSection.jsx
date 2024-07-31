import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const FooterSection = memo(
  ({
    className = "",
    propDisplay,
    propMinWidth,
    propDisplay1,
    propMinWidth1,
    propDisplay2,
    propMinWidth2,
  }) => {
    const textButton6Style = useMemo(() => {
      return {
        display: propDisplay,
        minWidth: propMinWidth,
      };
    }, [propDisplay, propMinWidth]);

    const textButton7Style = useMemo(() => {
      return {
        display: propDisplay1,
        minWidth: propMinWidth1,
      };
    }, [propDisplay1, propMinWidth1]);

    const textButton8Style = useMemo(() => {
      return {
        display: propDisplay2,
        minWidth: propMinWidth2,
      };
    }, [propDisplay2, propMinWidth2]);

    return (
      <div
        className={`self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full text-left text-base text-grey-20 font-outfit ${className}`}
      >
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-15" />
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="h-6 flex flex-row items-start justify-start gap-[10px] max-w-full">
            <div
              className="relative leading-[150%] font-medium inline-block min-w-[118px]"
              style={textButton6Style}
            >
              Terms of Service
            </div>
            <div className="h-[26px] w-0.5 relative box-border border-r-[2px] border-solid border-grey-15" />
            <div
              className="relative leading-[150%] font-medium inline-block min-w-[99px]"
              style={textButton7Style}
            >
              Privacy Policy
            </div>
            <div className="h-[26px] w-0.5 relative box-border border-r-[2px] border-solid border-grey-15" />
            <div
              className="relative leading-[150%] font-medium inline-block min-w-[94px]"
              style={textButton8Style}
            >
              Cookie Policy
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <div className="w-12 rounded-md bg-orange-90 box-border flex flex-row items-start justify-start py-[11px] px-3 border-[2px] border-solid border-grey-15">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon-20.svg"
              />
            </div>
            <div className="w-12 rounded-md bg-orange-90 box-border flex flex-row items-start justify-start py-[11px] px-3 border-[2px] border-solid border-grey-15">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-21.svg"
              />
            </div>
            <div className="w-12 rounded-md bg-orange-90 box-border flex flex-row items-start justify-start py-[11px] px-3 border-[2px] border-solid border-grey-15">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-22.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-15" />
        <div className="self-stretch relative leading-[150%] font-medium text-grey-40 text-center">
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </div>
      </div>
    );
  }
);

FooterSection.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay2: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default FooterSection;
