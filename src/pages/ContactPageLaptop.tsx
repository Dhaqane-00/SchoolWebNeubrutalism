import ContactHeroNav from "../components/ContactHeroNav";
import ContectForm from "../components/ContectForm";
import FrameComponent2 from "../components/FrameComponent2";
import LinksContainer from "../components/LinksContainer";
import FooterSection from "../FooterSection";

const ContactPageLaptop = () => {
  return (
    <div className="w-full relative bg-orange-97 overflow-hidden flex flex-col items-end justify-start pt-0 px-[50px] pb-10 box-border gap-[140px] leading-[normal] tracking-[normal] mq750:gap-[70px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq450:gap-[35px]">
      <ContactHeroNav />
      <ContectForm />
      <footer className="self-stretch shadow-[6px_6px_0px_2px_#1e1e1e] rounded-xl bg-absolute-white box-border overflow-hidden flex flex-col items-start justify-start pt-[77px] px-[78px] pb-[37px] gap-[40px] max-w-full text-left text-base text-grey-15 font-outfit border-[2px] border-solid border-grey-15 lg:pl-[39px] lg:pr-[39px] lg:box-border mq750:gap-[20px] mq750:pt-[50px] mq750:pb-6 mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full lg:flex-wrap lg:gap-[40px] mq750:gap-[20px]">
          <FrameComponent2 textButton="/text-button-1.svg" />
          <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border gap-[20px] min-w-[460px] max-w-full mq750:flex-wrap mq750:min-w-full">
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

export default ContactPageLaptop;
