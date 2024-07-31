import { memo } from "react";
import Card2 from "./Card2";
import PropTypes from "prop-types";

const OurBenifits = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px] mq750:gap-[40px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <button className="cursor-pointer py-[5px] px-3 bg-absolute-white rounded-md overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
            <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center">
              Children Deserve Bright Future
            </div>
          </button>
          <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq1050:text-19xl mq1050:leading-[50px]">
            Our Benefits
          </h1>
          <div className="w-[880px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px_38px] min-h-[558px] max-w-full text-left text-5xl mq750:gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[380px] max-w-full mq450:min-w-full">
            <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border">
              <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-13.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] z-[1] mt-[-28px] border-[2px] border-solid border-grey-15">
              <h3 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                Holistic Learning Approach
              </h3>
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-30">
                Our curriculum focuses on nurturing cognitive, social,
                emotional, and physical development, ensuring a well-rounded
                education.
              </div>
            </div>
          </div>
          <Card2
            icon="/icon-24.svg"
            heading="Experienced Educators"
            ourPassionateAndQualified="Our passionate and qualified teachers create a supportive and stimulating learning environment."
          />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[380px] max-w-full mq450:min-w-full">
            <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border">
              <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-33.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] z-[1] mt-[-28px] border-[2px] border-solid border-grey-15">
              <h3 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                Nurturing Environment
              </h3>
              <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[96px]">
                <p className="m-0">
                  We prioritize safety and provide a warm and caring atmosphere
                  for every child.
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[380px] max-w-full mq450:min-w-full">
            <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border z-[1]">
              <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-41.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] z-[2] mt-[-28px] border-[2px] border-solid border-grey-15">
              <h3 className="m-0 w-80 relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[25px]">
                Play-Based Learning
              </h3>
              <div className="w-80 relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[380px] max-w-full mq450:min-w-full">
            <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border z-[1]">
              <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-52.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] z-[2] mt-[-28px] border-[2px] border-solid border-grey-15">
              <h3 className="m-0 w-80 relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[25px]">
                Individualized Attention
              </h3>
              <div className="w-80 relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block">
                Our small class sizes enable personalized attention, catering to
                each child's unique needs.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[380px] max-w-full mq450:min-w-full">
            <div className="w-[104px] flex flex-row items-start justify-start py-0 px-6 box-border z-[1]">
              <div className="flex-1 rounded-lg bg-orange-90 flex flex-row items-start justify-start py-[13px] px-3.5 border-[2px] border-solid border-grey-15">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-62.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start pt-[57px] pb-[37px] pr-5 pl-10 gap-[16px] z-[2] mt-[-28px] border-[2px] border-solid border-grey-15">
              <h3 className="m-0 w-80 relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[25px]">
                Parent Involvement
              </h3>
              <div className="w-80 relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block">
                We foster a strong parent-school partnership to ensure seamless
                communication and collaboration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OurBenifits.propTypes = {
  className: PropTypes.string,
};

export default OurBenifits;
