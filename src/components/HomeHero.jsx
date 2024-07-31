import { memo } from "react";
import PropTypes from "prop-types";

const HomeHero = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px] box-border max-w-full text-left text-lg text-grey-15 font-outfit ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[50px] max-w-full lg:flex-wrap mq750:gap-[25px]">
        <div className="h-[663px] flex-[0.0228] bg-orange-80 flex flex-col items-start justify-start pt-[646px] pb-[17px] pr-0 pl-[601px] box-border relative min-w-[400px] max-w-full lg:flex-1 lg:pl-[300px] lg:pt-[420px] lg:pb-5 lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[150px] mq750:pt-[273px] mq750:box-border mq750:min-w-full">
          <img
            className="self-stretch h-full absolute !m-[0] w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image4@2x.png"
          />
          <div className="w-[619px] h-5 !m-[0] absolute bottom-[-7.5px] left-[-5px] flex flex-row items-start justify-start lg:justify-center">
            <div className="h-6 w-6 relative rounded-[50%] bg-absolute-white box-border z-[2] border-[0px] border-solid border-grey-15" />
            <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-[calc(100%_-_24px)]">
              <div className="self-stretch h-3 bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0 box-border max-w-full z-[1]">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[2px] border-solid border-black" />
              </div>
            </div>
          </div>
          <div className="mt-[-654.3px] ml-[-611.1px] w-[630px] flex flex-row items-start justify-start relative max-w-[4500%] shrink-0 lg:justify-center">
            <div className="h-[650px] w-3 !m-[0] absolute bottom-[-17px] left-[4px] bg-orange-80 flex flex-row items-start justify-end py-0 px-0.5 box-border z-[1]">
              <div className="self-stretch w-1 relative box-border border-r-[2px] border-solid border-black" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[1px] shrink-0 max-w-full">
              <div className="h-[21.3px] flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0 box-border">
                <div className="w-6 h-6 relative rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
              </div>
              <div className="h-[593.3px] flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-[calc(100%_-_42px)]">
                <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[70.1px] max-w-full mq450:gap-[18px] mq750:gap-[35px]">
                  <div className="self-stretch h-3 bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0 box-border max-w-full z-[1]">
                    <div className="self-stretch flex-1 relative box-border max-w-full border-t-[2px] border-solid border-black" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pr-[59px] pl-[62px] box-border max-w-full mq750:pl-[31px] mq750:pr-[29px] mq750:box-border">
                    <img
                      className="h-[507.2px] flex-1 relative max-w-full overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/abstract-design-41.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[654.3px] w-5 relative">
                <div className="absolute top-[12.3px] left-[5.1px] bg-orange-80 w-3 h-[642px] flex flex-row items-start justify-end py-0 px-0.5 box-border z-[1]">
                  <div className="self-stretch w-1 relative box-border border-r-[2px] border-solid border-black" />
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-absolute-white box-border w-6 h-6 z-[2] border-[0px] border-solid border-grey-15" />
              </div>
            </div>
          </div>
          <div className="w-6 h-6 relative rounded-[50%] bg-absolute-white box-border shrink-0 z-[2] border-[0px] border-solid border-grey-15" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[134.5px] px-0 pb-0 box-border min-w-[400px] max-w-full lg:flex-1 mq750:pt-[87px] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] mq750:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px] border-b-[2px] border-solid border-grey-15">
                  <div className="relative leading-[150%] font-medium">
                    Welcome to Little Learners Academy
                  </div>
                </div>
                <h1 className="m-0 self-stretch relative text-21xl leading-[130%] font-extrabold font-raleway text-grey-10 mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
                  <span>{`Where Young Minds Blossom and `}</span>
                  <span className="text-orange-65">Dreams Take Flight.</span>
                  <span>{` `}</span>
                </h1>
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-medium text-grey-20">
                Our kinder garden school provides a nurturing and stimulating
                environment, fostering a love for learning that lasts a
                lifetime. Join us as we embark on an exciting educational
                journey together!
              </div>
            </div>
            <div className="self-stretch shadow-[6px_6px_0px_1px_#ffbe99] rounded-3xs bg-orange-95 overflow-x-auto flex flex-row items-start justify-start py-[17px] pr-9 pl-10 gap-[10px] text-15xl border-[2px] border-solid border-grey-15">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-extrabold whitespace-nowrap mq450:text-xl mq450:leading-[31px] mq1050:text-8xl mq1050:leading-[41px]">
                  +7000
                </div>
                <div className="self-stretch relative text-base leading-[150%] font-medium">
                  Students Passed Out
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-extrabold whitespace-nowrap mq450:text-xl mq450:leading-[31px] mq1050:text-8xl mq1050:leading-[41px]">
                  +37
                </div>
                <div className="relative text-base leading-[150%] font-medium">{`Awards & Recognitions`}</div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-extrabold whitespace-nowrap mq450:text-xl mq450:leading-[31px] mq1050:text-8xl mq1050:leading-[41px]">
                  +15
                </div>
                <div className="self-stretch relative text-base leading-[150%] font-medium">
                  Experience Educators
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HomeHero.propTypes = {
  className: PropTypes.string,
};

export default HomeHero;
