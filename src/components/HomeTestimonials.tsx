import Card4 from "./Card4";
import PropTypes from "prop-types";

const HomeTestimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-8 box-border max-w-full text-center text-base text-grey-20 font-outfit ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px] mq750:gap-[40px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <div className="w-[185px] rounded-md bg-absolute-white box-border overflow-hidden flex flex-row items-start justify-start py-[5px] px-3 whitespace-nowrap border-[2px] border-solid border-black">
            <div className="relative leading-[150%] font-medium whitespace-nowrap">
              Their Happy Words 🤗
            </div>
          </div>
          <h1 className="m-0 w-[876px] relative text-29xl leading-[130%] font-bold font-raleway text-grey-10 inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq1050:text-19xl mq1050:leading-[50px]">
            Our Testimonials
          </h1>
          <div className="w-[876px] relative leading-[150%] font-medium inline-block max-w-full">
            Our testimonials are heartfelt reflections of the nurturing
            environment we provide, where children flourish both academically
            and emotionally.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[40px] max-w-full text-xl lg:flex-wrap mq750:gap-[20px]">
          <div className="w-12 rounded-lg bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-2.5 border-[2px] border-solid border-grey-20">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-7.svg"
            />
          </div>
          <Card4
            icon="/icon-83@2x.png"
            name1="Jennifer B"
            paragraph="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          />
          <Card4
            icon="/icon-84@2x.png"
            name1="David K"
            paragraph="Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
          />
          <Card4
            icon="/icon-85@2x.png"
            name1="Emily L"
            paragraph="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
          />
          <div className="w-12 rounded-lg bg-absolute-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-2.5 border-[2px] border-solid border-grey-20">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-8.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HomeTestimonials.propTypes = {
  className: PropTypes.string,
};

export default HomeTestimonials;
