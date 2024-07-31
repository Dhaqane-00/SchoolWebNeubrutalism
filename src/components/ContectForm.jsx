import { memo } from "react";
import Container9 from "./Container9";
import PropTypes from "prop-types";

const ContectForm = memo(({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[30px] pb-2.5 box-border max-w-full text-center text-29xl text-grey-10 font-raleway ${className}`}
    >
      <Container9 />
    </section>
  );
});

ContectForm.propTypes = {
  className: PropTypes.string,
};

export default ContectForm;
