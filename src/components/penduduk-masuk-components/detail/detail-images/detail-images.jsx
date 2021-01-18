import { Box, Fade } from "@material-ui/core";
import React from "react";
import { useStyles } from "./detail-images.style";

export const DetailImagesDialog = ({ ...props }) => {
  const { setOpenImageDetail, openImageDetail } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Fade in>
        <Box
          className={classes.backdrop}
          onClick={(e) => {
            e.preventDefault();
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
