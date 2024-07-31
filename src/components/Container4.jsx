import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const Container4 = memo(
  ({ className = "", heading, textPlaceholder, inputFieldMinWidth }) => {
    const inputFieldStyle = useMemo(() => {
      return {
        minWidth: inputFieldMinWidth,
      };
    }, [inputFieldMinWidth]);

    return (
      <div
        className={`flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[351px] max-w-full text-left text-xl text-grey-301 font-outfit mq750:min-w-full ${className}`}
      >
        <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
          {heading}
        </div>
        <input
          className="w-full [outline:none] bg-orange-99 self-stretch h-[72px] rounded-md box-border overflow-hidden flex flex-row items-center justify-start py-[21px] px-[22px] font-outfit font-medium text-base text-dimgray-100 min-w-[250px] max-w-full border-[2px] border-solid border-grey-15 mq750:gap-[25px]"
          placeholder="Enter Parent Name"
          type="text"
          style={inputFieldStyle}
        />
      </div>
    );
  }
);

Container4.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  textPlaceholder: PropTypes.string,

  /** Style props */
  inputFieldMinWidth: PropTypes.any,
};

export default Container4;
