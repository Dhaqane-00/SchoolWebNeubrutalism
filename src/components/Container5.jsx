import { memo } from "react";
import Container1 from "./Container1";
import PropTypes from "prop-types";

const Container5 = memo(({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full text-center text-29xl text-grey-10 font-raleway mq450:gap-[20px] mq800:gap-[40px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
        <button className="cursor-pointer py-[5px] px-3 bg-absolute-white w-28 rounded-md box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
          <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[84px]">
            Our Gallery
          </div>
        </button>
        <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq800:text-19xl mq800:leading-[50px]">
          Our Rooms Gallery
        </h1>
        <div className="w-[880px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[120px] max-w-full text-left text-base font-outfit mq450:gap-[30px] mq800:gap-[60px]">
        <div className="flex flex-row items-start justify-start gap-[10px] max-w-full mq1150:flex-wrap">
          <div className="w-[52px] rounded-md bg-orange-95 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[7px] px-3.5 border-[2px] border-solid border-grey-20">
            <div className="relative leading-[21px] font-semibold inline-block min-w-[20px]">
              All
            </div>
          </div>
          <button className="cursor-pointer py-[7px] px-3.5 bg-absolute-white w-[117px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[2px] border-solid border-grey-20 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-base leading-[21px] font-semibold font-outfit text-grey-10 text-left inline-block min-w-[85px]">
              Classrooms
            </div>
          </button>
          <button className="cursor-pointer py-[7px] px-3.5 bg-absolute-white w-[86px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[2px] border-solid border-grey-20 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-base leading-[21px] font-semibold font-outfit text-grey-10 text-left inline-block min-w-[54px]">
              Library
            </div>
          </button>
          <button className="cursor-pointer py-[7px] px-3.5 bg-absolute-white w-[118px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-grey-20 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-base leading-[21px] font-semibold font-outfit text-grey-10 text-left inline-block min-w-[86px]">
              Science Lab
            </div>
          </button>
          <button className="cursor-pointer py-[7px] px-3.5 bg-absolute-white w-[136px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-grey-20 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-base leading-[21px] font-semibold font-outfit text-grey-10 text-left inline-block min-w-[104px]">
              Computer Lab
            </div>
          </button>
          <button className="cursor-pointer py-[7px] px-3.5 bg-absolute-white rounded-md overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-grey-20 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
            <div className="relative text-base leading-[21px] font-semibold font-outfit text-grey-10 text-left">
              Garden and Nature Area
            </div>
          </button>
        </div>
        <Container1
          image="/image-6@2x.png"
          image1="/image-7@2x.png"
          image2="/image-8@2x.png"
          image3="/image-9@2x.png"
          heading="Classrooms"
          paragraph="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
        />
        <Container1
          image="/image-61@2x.png"
          image1="/image-71@2x.png"
          image2="/image-12@2x.png"
          image3="/image-13@2x.png"
          heading="Library"
          propMinWidth="89px"
          paragraph="Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
        />
        <Container1
          image="/image-62@2x.png"
          image1="/image-72@2x.png"
          image2="/image-16@2x.png"
          image3="/image-17@2x.png"
          heading="Science Lab"
          propMinWidth="157px"
          paragraph="Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
        />
        <Container1
          image="/image-63@2x.png"
          image1="/image-73@2x.png"
          image2="/image-20@2x.png"
          image3="/image-21@2x.png"
          heading="Computer Lab"
          propMinWidth="184px"
          paragraph="Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
        />
        <Container1
          image="/image-64@2x.png"
          image1="/image-74@2x.png"
          image2="/image-24@2x.png"
          image3="/image-25@2x.png"
          heading="Garden and Nature Area"
          propMinWidth="313px"
          paragraph="Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
        />
      </div>
    </div>
  );
});

Container5.propTypes = {
  className: PropTypes.string,
};

export default Container5;
