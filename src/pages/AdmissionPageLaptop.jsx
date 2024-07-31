import AboutHeroAndNav from "../components/AboutHeroAndNav";
import AcademicFeatures from "../components/AcademicFeatures";
import Container8 from "../components/Container8";
import Container7 from "../components/Container7";
import Container6 from "../components/Container6";
import Testimonial from "../components/Testimonial";
import FrameComponent2 from "../components/FrameComponent2";
import LinksContainer from "../components/LinksContainer";
import FooterSection from "../components/FooterSection";

const AdmissionPageLaptop = () => {
  return (
    <div className="w-full relative bg-orange-97 overflow-hidden flex flex-col items-end justify-start pt-4 px-[50px] pb-10 box-border gap-[80px] leading-[normal] tracking-[normal] mq450:gap-[20px] mq800:gap-[40px] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
      <AboutHeroAndNav
        abstractDesign="/abstract-design@2x.png"
        abstractDesign1="/abstract-design-1@2x.png"
        abstractDesign2="/abstract-design-23.svg"
        abstractDesign3="/abstract-design-33.svg"
        textButton="/text-button.svg"
        abstractDesign4="/abstract-design-4.svg"
        text="Admission"
        heading="Join Our Family of Young Learners"
        paragraph="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <AcademicFeatures
        propWidth="83px"
        text="Process"
        propDisplay="inline-block"
        propMinWidth="55px"
        heading="Admission Process"
        paragraph="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
      />
      <section className="flex flex-row items-start justify-end pt-0 pb-[70px] pr-[30px] pl-[31px] box-border max-w-full text-left text-25xl text-grey-10 font-raleway mq450:pb-[29px] mq450:box-border mq1150:pb-[45px] mq1150:box-border">
        <div className="w-[1279px] flex flex-row flex-wrap items-start justify-start gap-[80px_38px] min-h-[846px] max-w-full mq800:gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[379px] max-w-full mq450:min-w-full">
            <div className="w-[98px] shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border flex flex-row items-start justify-start py-[7px] px-[22px] relative gap-[10px] border-[2px] border-solid border-grey-15">
              <div className="relative leading-[130%] font-extrabold inline-block min-w-[50px] mq450:text-7xl mq450:leading-[34px] mq800:text-16xl mq800:leading-[46px]">
                01
              </div>
              <div className="h-6 w-6 absolute !m-[0] bottom-[-12px] left-[calc(50%_-_10px)] rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-11xl">
              <div className="flex flex-row items-start justify-start py-0 px-[43px]">
                <div className="h-[43px] bg-orange-80 flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="h-[47px] w-1 relative box-border border-r-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start py-[37px] pr-5 pl-10 gap-[16px] border-[2px] border-solid border-grey-15">
                <h2 className="m-0 w-[319.7px] relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
                  Inquiry
                </h2>
                <div className="w-[319.7px] relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[120px]">
                  <p className="m-0">
                    Submit an inquiry form through our website or contact our
                    admissions office to express your interest in Little
                    Learners Academy.
                  </p>
                  <p className="m-0">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[379px] max-w-full mq450:min-w-full">
            <div className="w-[101px] shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border flex flex-row items-start justify-start py-[7px] px-[22px] relative gap-[10px] border-[2px] border-solid border-grey-15">
              <div className="relative leading-[130%] font-extrabold inline-block min-w-[53px] mq450:text-7xl mq450:leading-[34px] mq800:text-16xl mq800:leading-[46px]">
                02
              </div>
              <div className="h-6 w-6 absolute !m-[0] bottom-[-12px] left-[calc(50%_-_10px)] rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-11xl">
              <div className="flex flex-row items-start justify-start py-0 px-11">
                <div className="h-[43px] bg-orange-80 flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="h-[47px] w-1 relative box-border border-r-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start py-[37px] pr-5 pl-10 gap-[16px] border-[2px] border-solid border-grey-15">
                <h2 className="m-0 w-[319.7px] relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
                  School Tour
                </h2>
                <div className="w-[319.7px] relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block min-h-[120px]">
                  <p className="m-0">
                    Schedule a personalized school tour to explore our campus,
                    meet our staff, and gain insights into our nurturing
                    learning environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[379px] max-w-full mq450:min-w-full">
            <div className="w-[101px] shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white box-border flex flex-row items-start justify-start py-[7px] px-[22px] relative gap-[10px] border-[2px] border-solid border-grey-15">
              <div className="relative leading-[130%] font-extrabold inline-block min-w-[53px] mq450:text-7xl mq450:leading-[34px] mq800:text-16xl mq800:leading-[46px]">
                03
              </div>
              <div className="h-6 w-6 absolute !m-[0] bottom-[-12px] left-[calc(50%_-_10px)] rounded-[50%] bg-absolute-white box-border z-[1] border-[0px] border-solid border-grey-15" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-11xl">
              <div className="flex flex-row items-start justify-start py-0 px-11">
                <div className="h-[43px] bg-orange-80 flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="h-[47px] w-1 relative box-border border-r-[2px] border-solid border-black" />
                </div>
              </div>
              <div className="self-stretch shadow-[4px_4px_0px_1px_#1e1e1e] rounded-3xs bg-absolute-white overflow-hidden flex flex-col items-start justify-start py-[37px] pr-5 pl-10 gap-[16px] border-[2px] border-solid border-grey-15">
                <h2 className="m-0 w-[319.7px] relative text-inherit leading-[130%] font-bold font-inherit inline-block mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
                  Application Form
                </h2>
                <div className="w-[319.7px] relative text-base leading-[150%] font-medium font-outfit text-grey-30 inline-block">
                  Complete the application form and provide the required
                  documents, including your child's birth certificate, medical
                  records, and any previous academic records (if applicable).
                </div>
              </div>
            </div>
          </div>
          <Container8 />
          <Container7 />
          <Container6 />
        </div>
      </section>
      <Testimonial />
      <footer className="self-stretch shadow-[6px_6px_0px_2px_#1e1e1e] rounded-xl bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start pt-[77px] px-[78px] pb-[37px] gap-[40px] max-w-full text-left text-base text-grey-15 font-outfit border-[2px] border-solid border-grey-15 mq800:gap-[20px] mq800:pt-[50px] mq800:pb-6 mq800:box-border mq1350:pl-[39px] mq1350:pr-[39px] mq1350:box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full mq800:gap-[20px] mq1150:flex-wrap mq1350:gap-[40px]">
          <FrameComponent2 textButton="/text-button-1.svg" />
          <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border gap-[20px] min-w-[460px] max-w-full mq800:flex-wrap mq800:min-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[121px] max-w-[162px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Home
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-grey-20">
                <div className="self-stretch relative leading-[150%] font-medium">
                  Features
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Our Testimonials
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  FAQ
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[121px] max-w-[162px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                About Us
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-grey-20">
                <div className="self-stretch relative leading-[150%] font-medium">
                  Our Mission
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Our Vission
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Awards and Recognitions
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  History
                </div>
                <div className="self-stretch relative leading-[150%] font-medium">
                  Teachers
                </div>
              </div>
            </div>
            <LinksContainer
              heading="Academics"
              textButton="Special Features"
              textButton1="Gallery"
            />
            <LinksContainer
              heading="Contact Us"
              textButton="Information"
              textButton1={`Map & Direction`}
            />
          </div>
        </div>
        <FooterSection
          propDisplay="inline-block"
          propMinWidth="118px"
          propDisplay1="inline-block"
          propMinWidth1="99px"
          propDisplay2="inline-block"
          propMinWidth2="94px"
        />
      </footer>
    </div>
  );
};

export default AdmissionPageLaptop;
