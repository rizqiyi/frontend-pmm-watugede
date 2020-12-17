import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useStyles } from "./linear-progress.style";

const LinearProgComponent = ({ admin, penduduk }) => {
  const [progress, setProgress] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });

  return admin || penduduk ? (
    <div className={classes.linear}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    admin: state.users.isLoading,
    penduduk: state.penduduks.isLoading,
  };
};

export default connect(mapStateToProps, null)(LinearProgComponent);
