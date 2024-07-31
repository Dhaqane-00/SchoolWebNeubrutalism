import ChildFeatures from "./ChildFeatures";
import PropTypes from "prop-types";

const AcademicOurFeatures = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-5xl text-grey-10 font-raleway ${className}`}
    >
      <ChildFeatures />
    </section>
  );
};

AcademicOurFeatures.propTypes = {
  className: PropTypes.string,
};

export default AcademicOurFeatures;
