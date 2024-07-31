import { memo } from "react";
import PropTypes from "prop-types";

const Card4 = memo(({ className = "", icon, name1, paragraph }) => {
  return (
    <div
      className={`flex-1 shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-center justify-start py-[37px] px-[38px] gap-[24px] min-w-[221px] max-w-full text-center text-xl text-grey-20 font-outfit border-[2px] border-solid border-grey-15 mq450:pt-6 mq450:pb-6 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <div className="w-[66px] h-[66px] rounded-81xl bg-orange-97 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-grey-20">
          <img
            className="h-[50px] w-[50px] relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={icon}
          />
        </div>
        <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
          {name1}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-5 w-5 relative rounded-sm min-h-[20px]"
          loading="lazy"
          alt=""
          src="/shape.svg"
        />
        <img
          className="h-5 w-5 relative rounded-sm min-h-[20px]"
          loading="lazy"
          alt=""
          src="/shape.svg"
        />
        <img
          className="h-5 w-5 relative rounded-sm min-h-[20px]"
          alt=""
          src="/shape.svg"
        />
        <img
          className="h-5 w-5 relative rounded-sm min-h-[20px]"
          alt=""
          src="/shape.svg"
        />
        <img
          className="h-5 w-5 relative rounded-sm min-h-[20px]"
          alt=""
          src="/shape.svg"
        />
      </div>
      <div className="self-stretch relative text-base leading-[150%] font-medium">
        {paragraph}
      </div>
    </div>
  );
});

Card4.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name1: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Card4;
