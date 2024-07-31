import { memo } from "react";
import PropTypes from "prop-types";

const LinksContainer = memo(
  ({ className = "", heading, textButton, textButton1 }) => {
    return (
      <div
        className={`flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[121px] max-w-[162px] text-left text-base text-grey-15 font-outfit ${className}`}
      >
        <div className="self-stretch relative leading-[150%] font-semibold">
          {heading}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-grey-20">
          <div className="self-stretch relative leading-[150%] font-medium">
            {textButton}
          </div>
          <div className="self-stretch relative leading-[150%] font-medium">
            {textButton1}
          </div>
        </div>
      </div>
    );
  }
);

LinksContainer.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  textButton: PropTypes.string,
  textButton1: PropTypes.string,
};

export default LinksContainer;
