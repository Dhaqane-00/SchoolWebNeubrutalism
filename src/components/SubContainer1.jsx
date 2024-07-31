import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const SubContainer1 = memo(
  ({
    className = "",
    propFlex,
    propAlignSelf,
    year,
    propWidth,
    heading,
    paragraph,
    yearMinWidth,
    frameDivWidth,
  }) => {
    const subContainerStyle = useMemo(() => {
      return {
        flex: propFlex,
        alignSelf: propAlignSelf,
      };
    }, [propFlex, propAlignSelf]);

    const yearStyle = useMemo(() => {
      return {
        minWidth: yearMinWidth,
      };
    }, [yearMinWidth]);

    const frameDivStyle = useMemo(() => {
      return {
        width: frameDivWidth,
      };
    }, [frameDivWidth]);

    return (
      <div
        className={`flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-29xl text-grey-10 font-raleway mq1350:flex-wrap ${className}`}
        style={subContainerStyle}
      >
        <div className="h-5 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
          <div className="w-6 h-6 relative rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
        </div>
        <div className="h-3 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <div className="h-3 bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
            <div className="h-1 w-[38px] relative box-border border-t-[2px] border-solid border-black" />
          </div>
        </div>
        <div className="h-[110px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border mq450:h-auto">
          <div className="flex flex-row items-start justify-start">
            <div className="shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-8 gap-[20px] z-[1] border-[2px] border-solid border-grey-15 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[60px] h-[60px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/abstract-design-5.svg"
                />
              </div>
              <b
                className="relative leading-[130%] inline-block min-w-[108px] mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]"
                style={yearStyle}
              >
                {year}
              </b>
            </div>
          </div>
        </div>
        <div
          className="w-[711px] flex flex-col items-start justify-start gap-[16px] max-w-full text-5xl"
          style={frameDivStyle}
        >
          <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
            {heading}
          </h3>
          <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-20">
            {paragraph}
          </div>
        </div>
      </div>
    );
  }
);

SubContainer1.propTypes = {
  className: PropTypes.string,
  year: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  yearMinWidth: PropTypes.any,
  frameDivWidth: PropTypes.any,
};

export default SubContainer1;
