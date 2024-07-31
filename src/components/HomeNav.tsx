import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const HomeNav = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start min-h-[144px] max-w-full ${className}`}
    >
      <header className="self-stretch h-36 flex flex-col items-start justify-start pt-[78px] px-0 pb-0 box-border max-w-full text-left text-base text-grey-15 font-outfit mq1050:h-auto">
        <FrameComponent
          abstractDesign="/abstract-design-31.svg"
          abstractDesign1="/abstract-design-21.svg"
          onIconClick={onIconClick}
        />
        <div className="self-stretch rounded-lg bg-absolute-white box-border overflow-hidden flex flex-row items-start justify-between min-h-[70px] shrink-0 max-w-full gap-[20px] border-[2px] border-solid border-grey-15 lg:flex-wrap lg:justify-center">
          <div className="w-[199.3px] bg-orange-65 box-border flex flex-row items-start justify-start py-4 px-5 gap-[5.6px] border-r-[2px] border-solid border-grey-15 border-l-[2px]">
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
          <div className="w-[771px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-orange-95 w-[107px] box-border flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 border-l-[2px] hover:bg-gainsboro-200">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[43px]">
                Home
              </div>
            </button>
            <a className="[text-decoration:none] flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15">
              <div className="relative leading-[150%] font-medium inline-block min-w-[65px]">
                About Us
              </div>
            </a>
            <a className="[text-decoration:none] flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
              <div className="relative leading-[150%] font-medium inline-block min-w-[78px]">
                Academics
              </div>
            </a>
            <a className="[text-decoration:none] flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
              <div className="relative leading-[150%] font-medium inline-block min-w-[80px]">
                Admissions
              </div>
            </a>
            <button className="cursor-pointer [border:none] py-[21px] px-[30px] bg-[transparent] flex flex-row items-start justify-start border-r-[2px] border-solid border-grey-15 hover:bg-dimgray-300">
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-15 text-left inline-block min-w-[87px]">
                Student Life
              </div>
            </button>
            <a className="[text-decoration:none] bg-orange-75 flex flex-row items-start justify-start py-[21px] px-[30px] text-[inherit] border-r-[2px] border-solid border-grey-15 hover:bg-peru">
              <div className="relative leading-[150%] font-medium inline-block min-w-[58px]">
                Contact
              </div>
            </a>
          </div>
        </div>
      </header>
      <div className="self-stretch h-12 rounded-md bg-orange-90 box-border overflow-hidden shrink-0 flex flex-row items-end justify-start py-0 pr-0 pl-[1159px] gap-[988px] mt-[-128px] border-[2px] border-solid border-grey-15 lg:gap-[494px] lg:pl-[579px] lg:box-border mq450:gap-[123px] mq450:pl-5 mq450:box-border mq750:gap-[247px] mq750:pl-[289px] mq750:box-border">
        <img
          className="ml-[-1168px] mb-[-45px] h-[180px] w-[180px] relative object-contain shrink-0"
          alt=""
          src="/abstract-design@2x.png"
        />
        <img
          className="mb-[-45px] h-[180px] w-[180px] relative object-contain shrink-0"
          alt=""
          src="/abstract-design-1@2x.png"
        />
      </div>
    </div>
  );
};

HomeNav.propTypes = {
  className: PropTypes.string,
};

export default HomeNav;
