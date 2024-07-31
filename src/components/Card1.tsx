import PropTypes from "prop-types";

const Card1 = ({ className = "", image, heading, paragraph }) => {
  return (
    <div
      className={`flex-1 shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[37px] px-[38px] gap-[40px] min-w-[380px] max-w-full text-center text-5xl text-grey-10 font-raleway border-[2px] border-solid border-grey-15 mq450:gap-[20px] mq450:pt-6 mq450:pb-6 mq450:box-border mq450:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <div className="h-[282px] w-[103px] absolute !m-[0] top-[-40px] right-[108px] rounded-t-none rounded-b-3xs bg-orange-95 box-border border-[2px] border-solid border-grey-15" />
        <img
          className="h-[220px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={image}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
          {heading}
        </h3>
        <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-30">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Card1;
