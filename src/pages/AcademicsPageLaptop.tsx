import AcedemicHeroAndNav from "../components/AcedemicHeroAndNav";
import AcademicFeatures from "../components/AcademicFeatures";
import AcademicOurFeatures from "../components/AcademicOurFeatures";
import AcademicOurGallery from "../components/AcademicOurGallery";
import FrameComponent2 from "../components/FrameComponent2";
import LinksContainer from "../components/LinksContainer";
import FooterSection from "../FooterSection";

const AcademicsPageLaptop = () => {
  return (
    <div className="w-full relative bg-orange-97 overflow-hidden flex flex-col items-end justify-start pt-4 px-[50px] pb-10 box-border gap-[150px] leading-[normal] tracking-[normal] mq450:gap-[37px] mq800:gap-[75px] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
      <AcedemicHeroAndNav />
      <AcademicFeatures
        propWidth="122px"
        text="Our Features"
        propDisplay="inline-block"
        propMinWidth="94px"
        heading="Our Special Features"
        paragraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <AcademicOurFeatures />
      <AcademicOurGallery />
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

export default AcademicsPageLaptop;
