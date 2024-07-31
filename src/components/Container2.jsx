import { memo } from "react";
import PropTypes from "prop-types";

const Container2 = memo(
  ({ className = "", text, text1, text2, text3, text4 }) => {
    return (
      <div
        className={`self-stretch overflow-x-auto flex flex-row items-center justify-start text-left text-lg text-grey-15 font-outfit border-t-[2px] border-solid border-grey-15 ${className}`}
      >
        <div className="flex-1 flex flex-row items-center justify-start py-6 px-7 border-r-[2px] border-solid border-grey-15 border-l-[2px]">
          <div className="flex-1 relative leading-[150%] font-medium">
            {text}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-6 px-[29px] border-r-[2px] border-solid border-grey-15">
          <div className="flex-1 relative leading-[150%] font-medium">
            {text1}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-6 px-[29px] border-r-[2px] border-solid border-grey-15">
          <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
            {text2}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-6 px-[29px] border-r-[2px] border-solid border-grey-15">
          <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
            {text3}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-6 px-[29px] border-r-[2px] border-solid border-grey-15">
          <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
            {text4}
          </div>
        </div>
      </div>
    );
  }
);

Container2.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
};

export default Container2;
