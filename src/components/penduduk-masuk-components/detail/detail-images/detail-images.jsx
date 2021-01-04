import { Box, Fade } from "@material-ui/core";
import React from "react";
import { useStyles } from "./detail-images.style";

export const DetailImagesDialog = ({ ...props }) => {
  const { setOpenImageDetail, openImageDetail } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Fade appear={500} enter={500} in exit>
        <Box
          className={classes.backdrop}
          onClick={(e) => {
            e.preventDefault();
            if (e.target.classList.contains("makeStyles-backdrop-193")) {
            }
            setOpenImageDetail(null);
          }}
        >
          <img
            src={openImageDetail}
            className={classes.imageModal}
            alt="enlarged pict"
          />
        </Box>
      </Fade>
    </React.Fragment>
  );
};
