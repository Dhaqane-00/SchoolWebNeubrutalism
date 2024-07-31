import { memo } from "react";
import PropTypes from "prop-types";

const Card = memo(({ className = "", heading, paragraph }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[305px] max-w-full text-left text-5xl text-grey-10 font-raleway ${className}`}
    >
      <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border">
        <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-31.svg"
          />
        </div>
      </div>
      <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] max-w-full z-[1] mt-[-28px] border-[2px] border-solid border-grey-15">
        <h3 className="m-0 w-[326.7px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[25px]">
          {heading}
        </h3>
        <div className="w-[326.7px] relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block max-w-full">
          {paragraph}
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Card;
