import AcademicFeatures from "./AcademicFeatures";
import CardRow from "./CardRow";
import CardRow1 from "./CardRow1";
import PropTypes from "prop-types";

const ExploreMore = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-15xl text-grey-10 font-raleway ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <AcademicFeatures
          text="Explore More"
          heading="Navigate through our Pages"
          paragraph="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        />
        <CardRow />
        <CardRow1 />
      </div>
    </section>
  );
};

ExploreMore.propTypes = {
  className: PropTypes.string,
};

export default ExploreMore;
