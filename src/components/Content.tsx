import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px] box-border max-w-full text-left text-19xl text-grey-10 font-raleway ${className}`}
    >
      <div className="flex-1 shadow-[6px_6px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-row items-center justify-start pt-0 pb-[100px] pr-20 pl-0 relative gap-[50px] min-h-[460px] max-w-full border-[2px] border-solid border-grey-15 lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border mq750:gap-[25px] mq450:pb-[65px] mq450:box-border">
        <img
          className="h-[137px] w-[137px] absolute !m-[0] top-[0px] left-[0px] overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/abstract-design-4.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[10px] min-w-[348px] max-w-full mq750:min-w-full">
          <button className="cursor-pointer py-[5px] px-3.5 bg-absolute-white w-[111px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-grey-15 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[79px]">
              Contact Us
            </div>
          </button>
          <h1 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq450:text-4xl mq450:leading-[30px] mq1050:text-11xl mq1050:leading-[40px]">
            Feel Free To Connect With Us
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-[30px] min-w-[348px] max-w-full text-base text-grey-20 font-outfit mq750:min-w-full">
          <div className="self-stretch relative leading-[150%] font-medium">
            We value open communication and are eager to assist you with any
            inquiries. Feel free to reach out to us through any of the following
            contact methods
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-grey-15">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="flex-1 rounded-3xs bg-orange-99 box-border overflow-hidden flex flex-row items-center justify-start py-[13px] px-3.5 gap-[8px] min-w-[167px] border-[2px] border-solid border-grey-15 mq450:flex-wrap">
                <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-17.svg"
                  />
                </div>
                <div className="h-[42px] flex-1 relative leading-[130%] font-medium inline-block min-w-[120px] max-h-[42px] [word-break:break-word]">
                  Abdilaahimowliid@gmail.com
                </div>
              </div>
              <div className="flex-1 rounded-3xs bg-orange-99 box-border overflow-hidden flex flex-row items-center justify-start py-[13px] px-3.5 gap-[8px] min-w-[167px] border-[2px] border-solid border-grey-15 mq450:flex-wrap">
                <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-18.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[150%] font-medium inline-block min-w-[90px] whitespace-nowrap">
                  +252 617869750
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="flex-1 rounded-3xs bg-orange-99 box-border flex flex-row items-center justify-start py-[13px] px-3.5 gap-[8px] min-w-[167px] border-[2px] border-solid border-grey-15 mq450:flex-wrap">
                <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-19.svg"
                  />
                </div>
                <div className="relative leading-[150%] font-medium">
                  Somalia/Mogadishu
                </div>
              </div>
              <div className="flex-1 rounded-3xs bg-orange-99 box-border flex flex-row items-center justify-start py-[13px] px-3.5 gap-[8px] min-w-[167px] border-[2px] border-solid border-grey-15 mq450:flex-wrap">
                <div className="w-8 rounded bg-orange-97 box-border flex flex-row items-start justify-start py-[3px] px-1 border-[2px] border-solid border-grey-15">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-23.svg"
                  />
                </div>
                <div className="relative leading-[150%] font-medium">
                  Office Hours - 9am - 6 pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
