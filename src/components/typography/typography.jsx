import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const StyledTypography = withStyles({
  root: {
    color: "#8F8F8F",
    fontWeight: 500,
    fontSize: "13.5px",
  },
})(Typography);

export const GreyText = ({ text, ...props }) => {
  return <StyledTypography {...props}>{text}</StyledTypography>;
};
