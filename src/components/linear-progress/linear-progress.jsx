import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./linear-progress.style";

export const LinearProgComponent = () => {
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
    }, 100);

    return () => {
      clearInterval(timer);
    };
  });

  const isLoading = useSelector((state) => state.users.isLoading);
  return isLoading ? (
    <div className={classes.linear}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  ) : null;
};
