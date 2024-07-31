import { memo } from "react";
import PropTypes from "prop-types";

const AcedemicHeroAndNav = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-19xl text-grey-10 font-raleway mq800:gap-[20px] ${className}`}
    >
      <header className="self-stretch h-32 flex flex-col items-start justify-start gap-[14px] max-w-full text-left text-base text-grey-15 font-outfit">
        <div className="self-stretch h-12 rounded-md bg-orange-90 box-border overflow-hidden shrink-0 flex flex-row items-end justify-start py-3 pr-0 pl-[512px] relative gap-[332px] border-[2px] border-solid border-grey-15 mq450:gap-[41px] mq450:pl-5 mq450:box-border mq800:gap-[83px] mq800:pl-32 mq800:box-border mq1350:gap-[166px] mq1350:pl-64 mq1350:box-border">
          <div className="ml-[-521px] mb-[-57px] h-[180px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border">
            <img
              className="w-[180px] h-[180px] relative object-contain"
              alt=""
              src="/abstract-design@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[14px] mq1350:hidden">
            <div className="relative leading-[150%] font-medium whitespace-nowrap mq1150:hidden">
              Admission is Open, Grab your seat now
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <img
            className="mb-[-57px] h-[180px] w-[180px] relative object-contain shrink-0"
            alt=""
            src="/abstract-design-1@2x.png"
          />
          <img
            className="h-[32.6px] w-[32.6px] absolute !m-[0] right-[328.2px] bottom-[-15.6px]"
            loading="lazy"
            alt=""
            src="/abstract-design-2.svg"
          />
          <img
            className="h-[50.4px] w-[50.4px] absolute !m-[0] top-[-25px] left-[292.3px]"
            alt=""
            src="/abstract-design-3.svg"
          />
        </div>
        <div className="self-stretch h-[70px] rounded-lg bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-between gap-[20px] max-w-full border-[2px] border-solid border-grey-15">
          <div className="w-[199.3px] bg-orange-65 box-border flex flex-row items-start justify-start py-4 px-5 gap-[5.7px] shrink-0 border-r-[2px] border-solid border-grey-15 border-l-[2px]">
            <img
              className="h-[34px] w-[34px] relative mix-blend-normal"
              loading="lazy"
              alt=""
              src="/shape14.svg"
            />
            <div className="w-[115.6px] flex flex-col items-start justify-start pt-[10.1px] px-0 pb-0 box-border">
              <img
                className="self-stretch h-[13.4px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/text-button.svg"
              />
            </div>
          </div>
          <div className="w-[771px] flex flex-row items-start justify-start shrink-0 max-w-full mq450:hidden">
            <div className="w-[107px] box-border flex flex-row items-start justify-start py-[21px] px-[30px] border-r-[2px] border-solid border-grey-15 border-l-[2px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[43px]">
                Home
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-[transparent] flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[65px] whitespace-nowrap">
                About Us
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-orange-95 flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-gainsboro-200">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[78px]">
                Academics
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-[transparent] flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[80px]">
                Admissions
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-[transparent] flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[87px] whitespace-nowrap">
                Student Life
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-orange-75 flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-peru">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[58px]">
                Contact
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px] box-border max-w-full">
        <div className="flex-1 shadow-[6px_6px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-row items-center justify-start pt-0 pb-[100px] pr-20 pl-0 relative gap-[50px] min-h-[368px] max-w-full border-[2px] border-solid border-grey-15 mq800:gap-[25px] mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:box-border mq1350:pr-10 mq1350:box-border">
          <img
            className="h-[137px] w-[137px] absolute !m-[0] top-[0px] left-[0px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/abstract-design-4.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[10px] min-w-[348px] max-w-full z-[1] mq800:min-w-full">
            <button className="cursor-pointer py-[5px] px-3.5 bg-absolute-white w-[110px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start border-[2px] border-solid border-grey-15 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[78px]">
                Academics
              </div>
            </button>
            <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-4xl mq450:leading-[30px] mq800:text-11xl mq800:leading-[40px]">
              Nurturing Young Minds for Success
            </h1>
          </div>
          <div className="flex-1 relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block min-w-[348px] max-w-full mq800:min-w-full">
            Welcome to our Academics page, where we take pride in providing a
            comprehensive and stimulating educational experience for your child.
            Our kindergarten school's academic program is thoughtfully designed
            to foster a love for learning while building a strong foundation of
            essential skills and knowledge. From language arts and mathematics
            to science and social studies, our curriculum is carefully crafted
            to spark curiosity and encourage active exploration.
          </div>
        </div>
      </div>
    </section>
  );
});

AcedemicHeroAndNav.propTypes = {
  className: PropTypes.string,
};

export default AcedemicHeroAndNav;
