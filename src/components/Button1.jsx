import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Button1 = memo(({ className = "", onButtonClick }) => {
  const navigate = useNavigate();

  const onButtonClick1 = useCallback(() => {
    navigate("/about-page-laptop");
  }, [navigate]);

  return (
    <button
      className={`cursor-pointer py-[15px] px-5 bg-orange-90 self-stretch shadow-[2px_2px_0px_2px_#1e1e1e] rounded-lg overflow-hidden flex flex-row items-start justify-center gap-[10px] border-[2px] border-solid border-grey-15 ${className}`}
      onClick={onButtonClick}
    >
      <div className="relative text-lg leading-[150%] font-medium font-outfit text-grey-20 text-center inline-block min-w-[93px]">{`Learn More `}</div>
      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-201.svg"
        />
      </div>
    </button>
  );
});

Button1.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onButtonClick: PropTypes.func,
};

export default Button1;
