import SubContainer1 from "./SubContainer1";
import PropTypes from "prop-types";

const OurHistory = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[880px] flex flex-col items-start justify-start gap-[14px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <button className="cursor-pointer py-[5px] px-3 bg-absolute-white rounded-md overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
                <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center">
                  Our Progressive Journey
                </div>
              </button>
            </div>
            <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">
              Our History
            </h1>
            <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-20">
              Founded with a passion for early education in 2005, our
              kindergarten school boasts a rich history of empowering young
              learners to reach their potential through innovative teaching
              methods and a supportive learning environment
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-xl bg-absolute-white box-border overflow-hidden flex flex-row items-start justify-start py-[97px] px-[100px] max-w-full text-left border-[2px] border-solid border-grey-15 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1150:pt-[63px] mq1150:pb-[63px] mq1150:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border mq450:pt-[41px] mq450:pb-[41px] mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full z-[1] mq800:gap-[20px] mq1150:gap-[40px]">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-6 w-6 absolute !m-[0] bottom-[45px] left-[-0.3px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
                <div className="h-[69.5px] flex flex-col items-start justify-start pt-[49.5px] px-0 pb-0 box-border">
                  <div className="w-6 h-6 relative rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[53.5px] pb-0 pr-[9px] pl-0">
                  <div className="h-3 bg-orange-80 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-0 box-border">
                    <div className="h-1 w-[38px] relative box-border border-t-[2px] border-solid border-black" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[4.5px] pb-0 pr-10 pl-0">
                  <div className="flex flex-row items-start justify-start relative">
                    <div className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_10px)] left-[-9px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                    <div className="shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-8 gap-[20px] z-[2] border-[2px] border-solid border-grey-15 mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-[60px] h-[60px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/abstract-design-5.svg"
                        />
                      </div>
                      <b className="relative leading-[130%] inline-block min-w-[111px] mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">
                        2023
                      </b>
                    </div>
                    <div className="h-6 w-6 absolute !m-[0] top-[calc(50%_+_189px)] left-[-9px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                    <div className="h-6 w-6 absolute !m-[0] top-[calc(50%_+_388px)] left-[-9px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                    <div className="h-6 w-6 absolute !m-[0] top-[calc(50%_+_587px)] left-[-9px] rounded-[50%] bg-absolute-white box-border border-[0px] border-solid border-grey-15" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[460px] max-w-full text-5xl mq1150:min-w-full">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                    Resilience and Future Horizons
                  </h3>
                  <div className="self-stretch relative text-base leading-[150%] font-medium font-outfit text-grey-20">
                    Adapting to new challenges, we remained committed to our
                    mission of providing an exceptional early education. Looking
                    ahead with optimism, we envision a future filled with
                    boundless possibilities as we continue shaping the leaders
                    and thinkers of tomorrow.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[576px] w-3 !m-[0] absolute bottom-[-328px] left-[3.7px] bg-orange-80 flex flex-row items-start justify-end py-0 px-0.5 box-border">
                <div className="self-stretch w-1 relative box-border border-r-[2px] border-solid border-black" />
              </div>
              <SubContainer1
                year="2017"
                heading="Innovation and Technology"
                paragraph="Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
              />
            </div>
            <SubContainer1
              propFlex="unset"
              propAlignSelf="stretch"
              year="2012"
              heading="Expansion and Recognition"
              paragraph="These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
              yearMinWidth="108px"
              frameDivWidth="711px"
            />
            <SubContainer1
              propFlex="unset"
              propAlignSelf="stretch"
              year="2005"
              heading="Inception and Growth"
              paragraph="Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
              yearMinWidth="113px"
              frameDivWidth="706px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

OurHistory.propTypes = {
  className: PropTypes.string,
};

export default OurHistory;
