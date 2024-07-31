import { memo, useMemo } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const FAQItem = memo(
  ({ className = "", heading, propMinWidth, fAQItemHeight }) => {
    const fAQItemStyle = useMemo(() => {
      return {
        height: fAQItemHeight,
      };
    }, [fAQItemHeight]);

    return (
      <Accordion
        className={`self-stretch h-20 ${className}`}
        style={fAQItemStyle}
      >
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography>Is there a uniform policy for students?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography />
        </AccordionDetails>
      </Accordion>
    );
  }
);

FAQItem.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  fAQItemHeight: PropTypes.any,
};

export default FAQItem;
