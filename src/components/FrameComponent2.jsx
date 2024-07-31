import { memo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = memo(({ className = "", textButton }) => {
  return (
    <div
      className={`w-[393px] flex flex-col items-start justify-start gap-[40px] min-w-[393px] max-w-full text-left text-base text-grey-30 font-outfit lg:flex-1 mq450:gap-[20px] mq750:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="w-[182.6px] flex flex-row items-start justify-start gap-[6.6px]">
          <img
            className="h-10 w-10 relative mix-blend-normal"
            loading="lazy"
            alt=""
            src="/shape14-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[11.9px] px-0 pb-0">
            <img
              className="self-stretch h-[15.8px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={textButton}
            />
          </div>
        </div>
        <div className="self-stretch relative leading-[150%] font-medium">
          We believe in the power of play to foster creativity, problem-solving
          skills, and imagination.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-grey-15">
        <div className="self-stretch rounded-md flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
          <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-17.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[229px] max-w-full">
            <div className="self-stretch relative leading-[150%] font-medium whitespace-nowrap">
              hello@littlelearners.com
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
          <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-18.svg"
            />
          </div>
          <div className="h-6 flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[229px] max-w-full">
            <div className="self-stretch relative leading-[150%] font-medium whitespace-nowrap">
              +91 91813 23 2309
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
          <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-19.svg"
            />
          </div>
          <div className="h-6 flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[229px] max-w-full">
            <div className="self-stretch relative leading-[150%] font-medium">
              Somewhere in the World
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FrameComponent2.propTypes = {
  className: PropTypes.string,
  textButton: PropTypes.string,
};

export default FrameComponent2;
