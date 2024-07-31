import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "./Button1";
import PropTypes from "prop-types";

const CardRow = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/about-page-laptop");
  }, [navigate]);

  const onButtonClick1 = useCallback(() => {
    navigate("/academics-page-laptop");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-full text-center text-15xl text-grey-10 font-raleway mq750:gap-[20px] ${className}`}
    >
      <div className="flex-1 shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[57px] px-[58px] gap-[60px] min-w-[403px] max-w-full border-[2px] border-solid border-grey-15 mq450:gap-[15px] mq450:pt-[37px] mq450:pb-[37px] mq450:box-border mq750:gap-[30px] mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq750:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-xl mq450:leading-[27px] mq1050:text-8xl mq1050:leading-[35px]">
              About Us
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] mq750:flex-wrap">
              <div className="h-5 flex-1 flex flex-row items-center justify-start relative min-w-[73px] max-w-[75px]">
                <div className="h-6 w-6 absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                <div className="flex-1 !m-[0] absolute top-[4px] left-[14px] bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0 z-[1]">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="h-5 flex-1 flex flex-row items-center justify-start relative min-w-[73px] max-w-[75px]">
                <div className="h-3 flex-1 !m-[0] absolute top-[4px] left-[0px] bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
                <div className="h-6 w-6 absolute !m-[0] top-[0px] left-[55px] rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[96px]">
            <p className="m-0">
              Discover our Mission, Values, and our unwavering commitment to
              providing the best learning experience for your child. Learn about
              our passionate educators and our engaging approach to early
              education.
            </p>
          </div>
        </div>
        <Button1 onButtonClick={onButtonClick} />
      </div>
      <div className="flex-1 shadow-[4px_4px_0px_2px_#1e1e1e] rounded-3xs bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start py-[57px] px-[58px] gap-[60px] min-w-[403px] max-w-full border-[2px] border-solid border-grey-15 mq450:gap-[15px] mq450:pt-[37px] mq450:pb-[37px] mq450:box-border mq750:gap-[30px] mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq750:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-xl mq450:leading-[27px] mq1050:text-8xl mq1050:leading-[35px]">
              Academics
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] mq750:flex-wrap">
              <div className="h-5 flex-1 flex flex-row items-center justify-start relative min-w-[73px] max-w-[75px]">
                <div className="h-6 w-6 absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                <div className="flex-1 !m-[0] absolute top-[4px] left-[14px] bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0 z-[1]">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[73px] max-w-[75px]">
                <div className="self-stretch bg-orange-80 flex flex-row items-start justify-start pt-1.5 pb-0.5 pr-1.5 pl-0">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="h-5 flex-1 flex flex-row items-center justify-start relative min-w-[73px] max-w-[75px]">
                <div className="h-3 flex-1 !m-[0] absolute top-[4px] left-[0px] bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
                  <div className="h-1 flex-1 relative box-border border-t-[2px] border-solid border-black" />
                </div>
                <div className="h-6 w-6 absolute !m-[0] top-[0px] left-[55px] rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-30">
            Delve into our comprehensive academic programs designed to stimulate
            young minds, foster creativity, and encourage a love for learning.
            Explore our well-rounded curriculum that nurtures both intellectual
            and social development.
          </div>
        </div>
        <Button1 onButtonClick={onButtonClick1} />
      </div>
    </div>
  );
};

CardRow.propTypes = {
  className: PropTypes.string,
};

export default CardRow;
