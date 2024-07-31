import AboutHeroAndNav from "./AboutHeroAndNav";
import Card1 from "./Card1";
import Card7 from "./Card7";
import PropTypes from "prop-types";

const ChildFeatures = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full text-center text-5xl text-grey-10 font-raleway mq450:gap-[20px] mq800:gap-[40px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <AboutHeroAndNav
          frameHeaderPadding="unset"
          frameSectionPosition="unset"
          frameSectionAlignSelf="unset"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px_38px] min-h-[906px] max-w-full mq800:gap-[19px]">
        <Card1
          image="/image@2x.png"
          heading="Language Arts"
          paragraph="Reading, writing, storytelling, and communication skills."
        />
        <Card1
          image="/image-1@2x.png"
          heading="Mathematics"
          paragraph="Number sense, basic operations, problem-solving, and logic."
        />
        <Card1
          image="/image-2@2x.png"
          heading="Science"
          paragraph="Exploring the natural world through hands-on experiments and investigations."
        />
        <Card7
          image="/image-3@2x.png"
          heading="Social Studies"
          paragraph="Cultivating an understanding of diverse cultures and communities."
        />
        <Card7
          image="/image-4@2x.png"
          heading="Arts and Crafts"
          paragraph="Encouraging creativity through various art forms and crafts."
        />
        <Card7
          image="/image-5@2x.png"
          heading="Physical Education"
          paragraph="Promoting physical fitness, coordination, and teamwork."
        />
      </div>
    </div>
  );
};

ChildFeatures.propTypes = {
  className: PropTypes.string,
};

export default ChildFeatures;
