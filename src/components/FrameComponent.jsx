import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = memo(
  ({ className = "", abstractDesign, abstractDesign1, onIconClick }) => {
    const navigate = useNavigate();

    const onIconClick1 = useCallback(() => {
      navigate("/contact-page-laptop");
    }, [navigate]);

    return (
      <div
        className={`mt-[-87px] w-[1302.8px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-base text-grey-15 font-outfit ${className}`}
      >
        <div className="flex flex-row items-start justify-start gap-[14px] shrink-0 max-w-full mq1050:flex-wrap">
          <div className="w-[205.7px] flex flex-col items-start justify-start">
            <img
              className="w-[50.4px] h-[50.4px] relative"
              alt=""
              src={abstractDesign}
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[37px] px-0 pb-0">
            <div className="relative leading-[150%] font-medium">
              Admission is Open, Grab your seat now
            </div>
          </div>
          <div className="w-[161.2px] flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 cursor-pointer"
              loading="lazy"
              alt=""
              src="/icon.svg"
              onClick={onIconClick}
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-14 px-0 pb-0">
            <img
              className="w-[32.6px] h-[32.6px] relative"
              loading="lazy"
              alt=""
              src={abstractDesign1}
            />
          </div>
        </div>
      </div>
    );
  }
);

FrameComponent.propTypes = {
  className: PropTypes.string,
  abstractDesign: PropTypes.string,
  abstractDesign1: PropTypes.string,

  /** Action props */
  onIconClick: PropTypes.func,
};

export default FrameComponent;
