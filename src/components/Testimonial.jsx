import { memo } from "react";
import Container2 from "./Container2";
import Container3 from "./Container3";
import PropTypes from "prop-types";

const Testimonial = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[30px] pb-[70px] box-border max-w-full text-center text-29xl text-grey-10 font-raleway mq800:pb-[29px] mq800:box-border mq1350:pb-[45px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[80px] max-w-full mq450:gap-[20px] mq800:gap-[40px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <button className="cursor-pointer py-[5px] px-3 bg-absolute-white w-[122px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
            <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[94px]">
              Our Features
            </div>
          </button>
          <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq800:text-19xl mq800:leading-[50px]">
            Fee Structure
          </h1>
          <div className="w-[880px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
            Our fee structure is transparent, and we strive to keep our fees
            competitive within the education sector. The fees vary based on the
            program, age group, and any additional services chosen.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-lg text-grey-15 font-outfit mq800:gap-[30px]">
          <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start py-[47px] px-12 gap-[30px] border-[2px] border-solid border-grey-15 mq450:pt-[31px] mq450:pb-[31px] mq450:box-border mq800:gap-[15px] mq1350:pl-6 mq1350:pr-6 mq1350:box-border">
            <div className="self-stretch rounded-3xs bg-absolute-white overflow-hidden flex flex-row flex-wrap items-center justify-center [row-gap:20px] border-[2px] border-solid border-grey-15">
              <div className="flex-1 bg-orange-95 box-border flex flex-row items-center justify-start py-[18px] px-7 min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15 border-l-[2px]">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Program
                </div>
              </div>
              <div className="flex-1 bg-orange-95 box-border flex flex-row items-center justify-start py-[18px] px-[29px] min-w-[231px] max-w-[236px] whitespace-nowrap border-r-[2px] border-solid border-grey-15">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Age Group
                </div>
              </div>
              <div className="flex-1 bg-orange-95 box-border flex flex-row items-center justify-start py-[18px] px-[29px] min-w-[231px] max-w-[236px] whitespace-nowrap border-r-[2px] border-solid border-grey-15">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Annual Tuition
                </div>
              </div>
              <div className="flex-1 bg-orange-95 box-border flex flex-row items-center justify-start py-[18px] px-[29px] min-w-[231px] max-w-[236px] whitespace-nowrap border-r-[2px] border-solid border-grey-15">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Registration Fee
                </div>
              </div>
              <div className="flex-1 bg-orange-95 box-border flex flex-row items-center justify-start py-[18px] px-[29px] min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15">
                <input
                  className="w-full [border:none] [outline:none] font-medium font-outfit text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-15 text-left inline-block min-w-[106px] p-0"
                  placeholder="Activity Fee"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-orange-99 overflow-hidden flex flex-col items-start justify-start border-[2px] border-solid border-grey-15">
              <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center [row-gap:20px]">
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-7 min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15 border-l-[2px]">
                  <div className="flex-1 relative leading-[150%] font-medium">
                    Nursery
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-[29px] min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15">
                  <div className="flex-1 relative leading-[150%] font-medium">
                    2 - 3 Years
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-[29px] min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15">
                  <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
                    $1,686
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-[29px] min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15">
                  <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
                    $162
                  </div>
                </div>
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-[29px] min-w-[231px] max-w-[236px] border-r-[2px] border-solid border-grey-15">
                  <div className="flex-1 relative leading-[150%] font-medium whitespace-nowrap">
                    $12
                  </div>
                </div>
              </div>
              <Container2
                text="Pre - Kindergartens"
                text1="3 - 4 Years"
                text2="$2,686"
                text3="$220"
                text4="$16"
              />
              <Container2
                text="Kindergarten"
                text1="4 - 5 Years"
                text2="$3,686"
                text3="$340"
                text4="$20"
              />
            </div>
          </div>
          <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[47px] px-12 gap-[30px] max-w-full border-[2px] border-solid border-grey-15 mq450:pt-[31px] mq450:pb-[31px] mq450:box-border mq800:gap-[15px] mq1350:pl-6 mq1350:pr-6 mq1350:box-border">
            <div className="self-stretch rounded-3xs bg-orange-95 box-border flex flex-row items-center justify-start py-[15px] px-7 max-w-full border-[2px] border-solid border-grey-15">
              <input
                className="w-full [border:none] [outline:none] inline-block font-raleway text-5xl bg-[transparent] h-[31px] flex-1 relative leading-[130%] font-bold text-grey-10 text-left min-w-[250px] max-w-full p-0 mq450:text-lgi mq450:leading-[25px]"
                placeholder="Additional Services"
                type="text"
              />
            </div>
            <div className="self-stretch rounded-3xs bg-orange-99 box-border overflow-hidden flex flex-col items-start justify-start max-w-full border-[2px] border-solid border-grey-15">
              <div className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px] border-b-[2px] border-solid border-grey-15">
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-[29px] min-w-[383px] max-w-full border-l-[2px] border-solid border-grey-15 mq800:min-w-full">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-outfit text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] text-grey-15 text-left inline-block min-w-[250px] max-w-full p-0"
                    placeholder="Before and After-School Care"
                    type="text"
                  />
                </div>
                <div className="flex-1 box-border flex flex-row items-center justify-start py-6 px-7 min-w-[383px] max-w-full border-r-[2px] border-solid border-grey-15 border-l-[2px] mq800:min-w-full">
                  <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                    $120 / per month
                  </div>
                </div>
              </div>
              <Container3
                text="Language Immersion Program"
                text1="$60 / per semester"
              />
              <Container3
                propBorderBottom="unset"
                text="Transportation (optional)"
                text1="$80 / per month"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
