import PropTypes from "prop-types";

const Container6 = ({ className = "" }) => {
  return (
    <div
      className={`h-[383px] flex-1 relative min-w-[379px] max-w-full text-left text-25xl text-grey-10 font-raleway mq450:min-w-full ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border w-[102px] overflow-hidden flex flex-row items-center justify-center py-[7px] px-[22px] border-[2px] border-solid border-grey-15">
        <div className="relative leading-[130%] font-extrabold inline-block min-w-[54px] mq450:text-7xl mq450:leading-[34px] mq800:text-16xl mq800:leading-[46px]">
          06
        </div>
      </div>
      <div className="absolute top-[65px] left-[41px] rounded-[50%] bg-absolute-white box-border w-6 h-6 border-[0px] border-solid border-grey-15" />
      <div className="absolute top-[85px] left-[45px] bg-orange-80 h-[43px] flex flex-row items-center justify-center py-0 px-1 box-border">
        <div className="h-[47px] w-1 relative box-border border-r-[2px] border-solid border-black" />
      </div>
      <div className="absolute top-[128px] left-[0px] shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border w-[399.7px] overflow-hidden flex flex-col items-start justify-start py-[37px] pr-5 pl-10 gap-[16px] text-11xl border-[2px] border-solid border-grey-15">
        <h2 className="m-0 w-[319.7px] relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
          Acceptance
        </h2>
        <div className="w-[319.7px] relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[120px]">
          <p className="m-0">
            Once the admission process is complete, you will receive an official
            acceptance letter from Little Learners Academy.
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
};

export default Container6;
