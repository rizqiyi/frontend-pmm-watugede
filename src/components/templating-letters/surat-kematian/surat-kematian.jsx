import { Grid } from "@material-ui/core";
import React, { forwardRef } from "react";
import { BodyComponent } from "./body/body";
import { useStyles } from "./surat-kematian.style";

export const SuratKematianComponent = forwardRef(({ ...props }, ref) => {
  const { dataPenduduk, dataKematian, isFetching, signature } = props;
  const classes = useStyles();

  return (
    <div ref={ref}>
      {isFetching ? null : (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <BodyComponent
              classes={classes}
              dataKematian={dataKematian}
              dataPenduduk={dataPenduduk}
              signature={signature}
            />
          </Grid>
          <Grid item xs={6}>
            <BodyComponent
              classes={classes}
              dataKematian={dataKematian}
              dataPenduduk={dataPenduduk}
              signature={signature}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
});
