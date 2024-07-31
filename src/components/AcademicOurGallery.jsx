import { memo } from "react";
import Container5 from "./Container5";
import PropTypes from "prop-types";

const AcademicOurGallery = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[30px] box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
    >
      <Container5 />
    </section>
  );
});

AcademicOurGallery.propTypes = {
  className: PropTypes.string,
};

export default AcademicOurGallery;
