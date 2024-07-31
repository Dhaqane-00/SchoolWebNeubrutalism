import { useMemo } from "react";
import PropTypes from "prop-types";

const Container1 = ({
  className = "",
  image,
  image1,
  image2,
  image3,
  heading,
  propMinWidth,
  paragraph,
}) => {
  const headingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-15xl text-grey-10 font-raleway ${className}`}
    >
      <div className="self-stretch grid flex-row items-start justify-start py-0 px-10 gap-[40px] grid-cols-[repeat(4,_minmax(202px,_1fr))] mq800:gap-[20px] mq800:grid-cols-[minmax(202px,_1fr)] mq1150:justify-center mq1150:grid-cols-[repeat(2,_minmax(202px,_351px))]">
        <img
          className="relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[234px] mq800:w-full"
          loading="lazy"
          alt=""
          src={image}
        />
        <img
          className="relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[234px] mq800:w-full"
          loading="lazy"
          alt=""
          src={image1}
        />
        <img
          className="relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[234px] mq800:w-full"
          alt=""
          src={image2}
        />
        <img
          className="relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-h-[234px] mq800:w-full"
          alt=""
          src={image3}
        />
      </div>
      <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-xl bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start pt-[177px] px-[38px] pb-[37px] gap-[30px] max-w-full z-[1] mt-[-142px] border-[2px] border-solid border-grey-15 mq450:pt-[177px] mq450:pb-6 mq450:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[50px] max-w-full mq800:gap-[25px]">
          <h1
            className="m-0 flex-1 relative text-inherit leading-[130%] font-bold font-inherit inline-block min-w-[150px] max-w-full mq450:text-xl mq450:leading-[27px] mq800:text-8xl mq800:leading-[35px]"
            style={headingStyle}
          >
            {heading}
          </h1>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="w-12 rounded-md bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-2.5 border-[2px] border-solid border-grey-20">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-7.svg"
              />
            </div>
            <div className="w-12 rounded-md bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-2.5 border-[2px] border-solid border-grey-20">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-8.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-xl leading-[150%] font-medium font-outfit text-grey-30 mq450:text-base mq450:leading-[24px]">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Container1;
