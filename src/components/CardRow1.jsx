import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CardRow1 = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/admission-page-laptop");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full text-center text-15xl text-grey-10 font-raleway mq750:gap-[20px] ${className}`}
    >
      <div className="h-[467px] flex-1 relative shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden min-w-[403px] max-w-full border-[2px] border-solid border-grey-15 mq750:min-w-full">
        <h1 className="m-0 absolute top-[60px] left-[60px] text-inherit leading-[130%] font-bold font-inherit inline-block w-[500px] mq450:text-xl mq450:leading-[27px] mq1050:text-8xl mq1050:leading-[35px]">
          Student Life
        </h1>
        <div className="absolute top-[128px] left-[60px] w-[75px] h-5 flex flex-row items-center justify-start">
          <div className="h-6 w-6 relative rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
          <div className="h-3 flex-1 bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border z-[2] ml-[-6px]">
            <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
          </div>
        </div>
        <div className="absolute top-[132px] left-[145px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[132px] left-[230px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[132px] left-[315px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[132px] left-[400px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[128px] left-[485px] w-[75px] h-5 flex flex-row items-center justify-start">
          <div className="h-3 flex-1 bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border z-[1]">
            <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
          </div>
          <div className="h-6 w-6 relative rounded-[50%] bg-absolute-white box-border z-[2] ml-[-3px] border-[0px] border-solid border-grey-15" />
        </div>
        <div className="absolute top-[188px] left-[60px] text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block w-[500px]">
          Peek into the vibrant and enriching world of Student Life at Little
          Learners Academy. Discover the array of extracurricular activities,
          arts and crafts, sports, and social events that make our school
          experience truly memorable.
        </div>
        <button className="cursor-pointer py-[15px] px-0 bg-orange-90 absolute top-[344px] left-[60px] shadow-[2px_2px_0px_2px_#1e1e1e] rounded-lg box-border w-[500px] overflow-hidden flex flex-row items-center justify-center gap-[10px] whitespace-nowrap max-w-full border-[2px] border-solid border-grey-15 hover:bg-peachpuff hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200">
          <div className="relative text-lg leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[93px]">{`Learn More `}</div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-201.svg"
          />
        </button>
      </div>
      <div className="h-[467px] flex-1 relative shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden min-w-[403px] max-w-full border-[2px] border-solid border-grey-15 mq750:min-w-full">
        <h1 className="m-0 absolute top-[60px] left-[60px] text-inherit leading-[130%] font-bold font-inherit inline-block w-[500px] mq450:text-xl mq450:leading-[27px] mq1050:text-8xl mq1050:leading-[35px]">
          Admissions
        </h1>
        <div className="absolute top-[128px] left-[60px] w-[75px] h-5 flex flex-row items-center justify-start">
          <div className="h-6 w-6 relative rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
          <div className="h-3 flex-1 bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border z-[2] ml-[-6px]">
            <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
          </div>
        </div>
        <div className="absolute top-[132px] left-[145px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[132px] left-[230px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[132px] left-[315px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[132px] left-[400px] bg-orange-80 w-[75px] h-3 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
          <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[128px] left-[485px] w-[75px] h-5 flex flex-row items-center justify-start">
          <div className="h-3 flex-1 bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border z-[1]">
            <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
          </div>
          <div className="h-6 w-6 relative rounded-[50%] bg-absolute-white box-border z-[2] ml-[-3px] border-[0px] border-solid border-grey-15" />
        </div>
        <div className="absolute top-[188px] left-[60px] text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block w-[500px] min-h-[96px]">
          <p className="m-0">
            Learn about our Enrollment Process and how to secure your child's
            place at Little Learners Academy. Find information about our
            admission requirements, application deadlines, and available spaces.
          </p>
        </div>
        <button
          className="cursor-pointer py-[15px] px-0 bg-orange-90 absolute top-[344px] left-[60px] shadow-[2px_2px_0px_2px_#1e1e1e] rounded-lg box-border w-[500px] overflow-hidden flex flex-row items-center justify-center gap-[10px] whitespace-nowrap max-w-full border-[2px] border-solid border-grey-15 hover:bg-peachpuff hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-200"
          onClick={onButtonClick}
        >
          <div className="relative text-lg leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[93px]">{`Learn More `}</div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-201.svg"
          />
        </button>
      </div>
    </div>
  );
});

CardRow1.propTypes = {
  className: PropTypes.string,
};

export default CardRow1;
