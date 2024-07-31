import Card5 from "./Card5";
import PropTypes from "prop-types";

const AboutTeacher = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[14px] max-w-full">
          <button className="cursor-pointer py-[5px] px-3 bg-absolute-white rounded-md overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-grey-20">
            <div className="relative text-base leading-[150%] font-medium font-outfit text-grey-20 text-center">
              Our Teachers With Experties
            </div>
          </button>
          <h1 className="m-0 w-[880px] relative text-inherit leading-[130%] font-bold font-inherit inline-block max-w-full mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">
            Our Team Members
          </h1>
          <div className="w-[880px] relative text-base leading-[150%] font-medium font-outfit text-grey-20 inline-block max-w-full">
            At Little Learners Academy, our teaching team is the heart of our
            educational journey. We take great pride in employing highly
            qualified and passionate educators who possess a deep understanding
            of early childhood development. Our teachers create a warm and
            engaging atmosphere, encouraging curiosity, instilling confidence,
            and fostering a love for learning.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-5xl text-grey-20 mq800:gap-[20px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
            <Card5
              name1="Ms. Sarah Anderson"
              heading="Qualification:Bachelor's Degree in Early Childhood Education"
              paragraph="Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
            />
            <Card5
              name1="Mr. David Roberts"
              propMinWidth="160px"
              heading="Qualification: Master's Degree in Elementary Education"
              paragraph="With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
              cardMinHeight="unset"
              subContainerMinWidth="309px"
              buttonWidth="48px"
              buttonHeight="unset"
              iconHeight="20px"
              iconWidth="20px"
              headingAlignSelf="stretch"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq800:gap-[20px] mq1350:flex-wrap">
            <Card5
              name1="Ms. Emily Hernandez"
              propMinWidth="190px"
              heading="Qualification: Diploma in Child Psychology"
              paragraph="Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
              cardMinHeight="unset"
              subContainerMinWidth="309px"
              buttonWidth="48px"
              buttonHeight="unset"
              iconHeight="20px"
              iconWidth="20px"
              headingAlignSelf="unset"
            />
            <Card5
              name1="Mr. Michael Turner"
              propMinWidth="169px"
              heading="Qualification: Bachelor's Degree in Physical Education"
              paragraph="Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
              cardMinHeight="374px"
              subContainerMinWidth="309px"
              buttonWidth="48px"
              buttonHeight="unset"
              iconHeight="20px"
              iconWidth="20px"
              headingAlignSelf="unset"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
            <Card5
              name1="Ms. Jessica Lee"
              propMinWidth="139px"
              heading="Qualification: Master's Degree in Special Education"
              paragraph="Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
              cardMinHeight="unset"
              subContainerMinWidth="309px"
              buttonWidth="48px"
              buttonHeight="unset"
              iconHeight="20px"
              iconWidth="20px"
              headingAlignSelf="stretch"
            />
            <Card5
              name1="Mr. William Parker"
              propMinWidth="167px"
              heading="Qualification: Bachelor's Degree in Fine Arts"
              paragraph="Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
              cardMinHeight="unset"
              subContainerMinWidth="304px"
              buttonWidth="56px"
              buttonHeight="56px"
              iconHeight="24px"
              iconWidth="24px"
              headingAlignSelf="stretch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutTeacher.propTypes = {
  className: PropTypes.string,
};

export default AboutTeacher;
