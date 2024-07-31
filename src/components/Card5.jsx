import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const Card5 = memo(
  ({
    className = "",
    name1,
    propMinWidth,
    heading,
    paragraph,
    cardMinHeight,
    subContainerMinWidth,
    buttonWidth,
    buttonHeight,
    iconHeight,
    iconWidth,
    headingAlignSelf,
  }) => {
    const nameStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    const cardStyle = useMemo(() => {
      return {
        minHeight: cardMinHeight,
      };
    }, [cardMinHeight]);

    const subContainer1Style = useMemo(() => {
      return {
        minWidth: subContainerMinWidth,
      };
    }, [subContainerMinWidth]);

    const buttonStyle = useMemo(() => {
      return {
        width: buttonWidth,
        height: buttonHeight,
      };
    }, [buttonWidth, buttonHeight]);

    const iconStyle = useMemo(() => {
      return {
        height: iconHeight,
        width: iconWidth,
      };
    }, [iconHeight, iconWidth]);

    const heading2Style = useMemo(() => {
      return {
        alignSelf: headingAlignSelf,
      };
    }, [headingAlignSelf]);

    return (
      <div
        className={`flex-1 shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[37px] px-[38px] gap-[24px] min-w-[403px] max-w-full text-left text-5xl text-grey-20 font-raleway border-[2px] border-solid border-grey-15 mq800:min-w-full mq450:pt-6 mq450:pb-6 mq450:box-border ${className}`}
        style={cardStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq800:flex-wrap">
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[12px] min-w-[309px] max-w-full mq800:flex-wrap"
            style={subContainer1Style}
          >
            <img
              className="h-20 w-20 relative rounded-3xs object-cover"
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
            <h3
              className="m-0 flex-1 relative text-inherit leading-[150%] font-extrabold font-inherit inline-block min-w-[180px] max-w-full mq450:text-lgi mq450:leading-[29px]"
              style={nameStyle}
            >
              {name1}
            </h3>
          </div>
          <div
            className="w-12 rounded-md bg-orange-90 box-border flex flex-row items-start justify-start py-[11px] px-3 border-[2px] border-solid border-grey-15"
            style={buttonStyle}
          >
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-81.svg"
              style={iconStyle}
            />
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-orange-97 flex flex-col items-start justify-start py-[21px] pr-5 pl-6 gap-[16px] text-xl font-outfit border-[2px] border-solid border-grey-15">
          <div
            className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]"
            style={heading2Style}
          >
            {heading}
          </div>
          <div className="self-stretch relative text-base leading-[150%] font-medium">
            {paragraph}
          </div>
        </div>
      </div>
    );
  }
);

Card5.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  cardMinHeight: PropTypes.any,
  subContainerMinWidth: PropTypes.any,
  buttonWidth: PropTypes.any,
  buttonHeight: PropTypes.any,
  iconHeight: PropTypes.any,
  iconWidth: PropTypes.any,
  headingAlignSelf: PropTypes.any,
};

export default Card5;
