import HomeNav from "./HomeNav";
import HomeHero from "./HomeHero";
import PropTypes from "prop-types";

const HomeHeroAndNav = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-lg text-grey-15 font-outfit mq750:gap-[30px] ${className}`}
    >
      <HomeNav />
      <HomeHero />
    </section>
  );
};

HomeHeroAndNav.propTypes = {
  className: PropTypes.string,
};

export default HomeHeroAndNav;
