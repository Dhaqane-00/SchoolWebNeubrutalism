import ContactNav from "./ContactNav";
import Content from "./Content";
import PropTypes from "prop-types";

const ContactHeroNav = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-19xl text-grey-10 font-raleway mq750:gap-[20px] ${className}`}
    >
      <ContactNav />
      <Content />
    </section>
  );
};

ContactHeroNav.propTypes = {
  className: PropTypes.string,
};

export default ContactHeroNav;
