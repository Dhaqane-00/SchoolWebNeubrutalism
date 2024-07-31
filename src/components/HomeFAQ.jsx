import { memo } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import FAQItem from "./FAQItem";
import PropTypes from "prop-types";

const HomeFAQ = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px] mq750:gap-[40px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <button className="cursor-pointer py-[5px] px-3 bg-absolute-white rounded-md overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
            <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center">
              Solutions For The Doubts
            </div>
          </button>
          <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq1050:text-19xl mq1050:leading-[50px]">
            Frequently Asked Questions
          </h1>
          <div className="w-[880px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
            Find all the essential information you need in our FAQ section,
            designed to address the most frequently asked questions and help you
            make informed decisions for your child's education.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[403px] max-w-full mq750:min-w-full">
            <Accordion
              className="self-stretch h-[207px]"
              defaultExpanded={true}
            >
              <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                <Typography>
                  What are the school hours at Little Learners Academy?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our school hours are from 8:00 AM to 3:00 PM, Monday to
                  Friday. We also offer extended care options for parents who
                  need early drop-off or late pick-up.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <FAQItem />
            <FAQItem fAQItemHeight="80px" />
            <FAQItem fAQItemHeight="80px" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[403px] max-w-full mq750:min-w-full">
            <FAQItem fAQItemHeight="80px" />
            <FAQItem fAQItemHeight="102px" />
            <FAQItem fAQItemHeight="80px" />
            <FAQItem fAQItemHeight="80px" />
          </div>
        </div>
      </div>
    </section>
  );
});

HomeFAQ.propTypes = {
  className: PropTypes.string,
};

export default HomeFAQ;
