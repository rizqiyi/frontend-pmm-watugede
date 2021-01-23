import { Grid } from "@material-ui/core";
import React, { forwardRef } from "react";
import { BodyComponent } from "./body/body";
import { useStyles } from "./surat-kelahiran.style";

export const SuratKelahiranComponent = forwardRef(({ ...props }, ref) => {
  const classes = useStyles();

  const { isFetching, dataKelahiran, dataAyah, dataIbu, signature } = props;

  return (
    <div ref={ref}>
      {isFetching ? null : (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <BodyComponent
              classes={classes}
              dataKelahiran={dataKelahiran}
              dataAyah={dataAyah}
              dataIbu={dataIbu}
              signature={signature}
            />
          </Grid>
          <Grid item xs={6}>
            <BodyComponent
              classes={classes}
              dataKelahiran={dataKelahiran}
              dataAyah={dataAyah}
              isLeft={true}
              dataIbu={dataIbu}
              signature={signature}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
});
