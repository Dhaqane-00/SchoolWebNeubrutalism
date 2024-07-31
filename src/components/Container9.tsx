import Container4 from "./Container4";
import PropTypes from "prop-types";

const Container9 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full text-center text-29xl text-grey-10 font-raleway mq750:gap-[40px] mq450:gap-[20px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
        <button className="cursor-pointer py-[5px] px-3 bg-absolute-white w-[127px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
          <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[99px]">
            Contact Form
          </div>
        </button>
        <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq1050:text-19xl mq1050:leading-[50px]">
          Student Information
        </h1>
        <div className="w-[880px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 gap-[20px] mq750:flex-wrap">
          <button className="cursor-pointer py-[13px] px-12 bg-orange-90 w-[126px] rounded-md box-border flex flex-row items-center justify-center border-[2px] border-solid border-grey-15">
            <img
              className="h-[26px] w-[26px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-51.svg"
            />
          </button>
          <button className="cursor-pointer py-[13px] px-12 bg-orange-90 w-[126px] rounded-md box-border flex flex-row items-center justify-center border-[2px] border-solid border-grey-15">
            <img
              className="h-[26px] w-[26px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-61.svg"
            />
          </button>
          <button className="cursor-pointer py-[13px] px-12 bg-orange-90 w-[126px] rounded-md box-border flex flex-row items-center justify-center border-[2px] border-solid border-grey-15">
            <img
              className="h-[26px] w-[26px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-71.svg"
            />
          </button>
        </div>
        <form className="m-0 self-stretch shadow-[6px_6px_0px_1px_#1e1e1e] rounded-xl bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start pt-[97px] px-[78px] pb-[77px] gap-[40px] max-w-full z-[1] mt-[-37px] border-[2px] border-solid border-grey-15 lg:pl-[39px] lg:pr-[39px] lg:box-border mq750:gap-[20px] mq750:pb-8 mq750:box-border mq1050:pt-[97px] mq1050:pb-[50px] mq1050:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full mq750:gap-[20px]">
            <Container4 heading="Parent Name" />
            <Container4 heading="Email Address" inputFieldMinWidth="250px" />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full mq750:gap-[20px]">
            <Container4 heading="Phone Number" inputFieldMinWidth="250px" />
            <Container4 heading="Student Name" inputFieldMinWidth="250px" />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full mq750:gap-[20px]">
            <Container4 heading="Student Age" inputFieldMinWidth="250px" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[351px] max-w-full mq750:min-w-full">
              <div className="self-stretch relative text-xl leading-[150%] font-semibold font-outfit text-grey-301 text-left mq450:text-base mq450:leading-[24px]">
                Program of Intrest
              </div>
              <div className="self-stretch rounded-md bg-orange-99 box-border overflow-hidden flex flex-row items-center justify-start py-[21px] px-[22px] gap-[50px] max-w-full border-[2px] border-solid border-grey-15 mq750:gap-[25px]">
                <div className="flex-1 relative text-base leading-[150%] font-medium font-outfit text-dimgray-100 text-left inline-block max-w-[calc(100%_-_74px)]">
                  Select Program
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-82.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
            <div className="self-stretch relative text-xl leading-[150%] font-semibold font-outfit text-grey-301 text-left mq450:text-base mq450:leading-[24px]">
              Message
            </div>
            <div className="self-stretch rounded-md bg-orange-99 box-border overflow-hidden flex flex-row items-start justify-start py-6 px-[22px] min-h-[161px] max-w-full border-[2px] border-solid border-grey-15 mq750:gap-[25px]">
              <div className="flex-1 relative text-base leading-[150%] font-medium font-outfit text-dimgray-100 text-left inline-block max-w-full">
                Enter your Message
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[21px] px-5 bg-orange-75 self-stretch rounded-3xs overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-grey-15 hover:bg-peru hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-xl leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[63px] mq450:text-base mq450:leading-[24px]">
              Submit
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

Container9.propTypes = {
  className: PropTypes.string,
};

export default Container9;
