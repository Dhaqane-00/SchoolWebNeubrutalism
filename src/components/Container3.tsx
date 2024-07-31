import { useMemo } from "react";
import PropTypes from "prop-types";

const Container3 = ({ className = "", propBorderBottom, text, text1 }) => {
  const container4Style = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  return (
    <div
      className={`self-stretch box-border overflow-hidden flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px] text-left text-lg text-grey-15 font-outfit border-b-[2px] border-solid border-grey-15 ${className}`}
      style={container4Style}
    >
      <div className="flex-1 flex flex-row items-center justify-start py-6 px-[30px] box-border min-w-[383px] max-w-full mq800:min-w-full">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          {text}
        </div>
      </div>
      <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-7 min-w-[383px] max-w-full border-r-[2px] border-solid border-grey-15 border-l-[2px] mq800:min-w-full">
        <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
          {text1}
        </div>
      </div>
    </div>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  propBorderBottom: PropTypes.any,
};

export default Container3;
