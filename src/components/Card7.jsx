import { memo } from "react";
import PropTypes from "prop-types";

const Card7 = memo(({ className = "", image, heading, paragraph }) => {
  return (
    <div
      className={`h-[433px] flex-1 shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-10 px-[38px] relative gap-[40px] min-w-[380px] max-w-full text-center text-5xl text-grey-10 font-raleway border-[2px] border-solid border-grey-15 mq450:gap-[20px] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq450:min-w-full ${className}`}
    >
      <div className="w-[103px] absolute !m-[0] top-[0px] left-[calc(50%_-_51px)] rounded-t-none rounded-b-3xs bg-orange-95 box-border h-[282px] z-[0] border-[2px] border-solid border-grey-15" />
      <img
        className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] z-[2]">
        <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
          {heading}
        </h3>
        <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-30">
          {paragraph}
        </div>
      </div>
    </div>
  );
});

Card7.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Card7;
