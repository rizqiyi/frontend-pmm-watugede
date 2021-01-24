import { Box, Typography, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./pengusul-keluar.style";

export const PengusulKeluarComponent = ({ ...props }) => {
  const { data, isLoading, setOpenDialogSignature, signature } = props;
  const classes = useStyles();

  const checkValues = (val) => {
    return val ? val : "";
  };

  return (
    <React.Fragment>
      <Box p={3} paddingTop={0}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="baseline"
          spacing={10}
        >
          <Grid item xs={6} lg={3}>
            <Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Nomor Induk Keluarga
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].nik)}
                  </Typography>
                )}{" "}
              </Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Nama Pengusul
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].nama_lengkap)}
                  </Typography>
                )}{" "}
              </Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>Umur</Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].umur)}
                  </Typography>
                )}{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Pendidikan Terakhir
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].pendidikan_terakhir)}
                  </Typography>
                )}{" "}
              </Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Kedudukan Dalam Keluarga
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].posisi_dalam_keluarga)}
                  </Typography>
                )}{" "}
              </Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>Pekerjaan</Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].pekerjaan)}
                  </Typography>
                )}{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>Agama</Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].agama)}
                  </Typography>
                )}{" "}
              </Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Status Perkawinan
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].status_perkawinan)}
                  </Typography>
                )}{" "}
              </Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Tempat Tanggal Lahir
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {checkValues(data[0].tempat_tanggal_lahir)}
                  </Typography>
                )}{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box>
              <Box marginTop={3} marginBottom={1}>
                {isLoading ? (
                  <Skeleton width={230} />
                ) : (
                  <Typography className={classes.header}>
                    Tanda Tangan Surat
                  </Typography>
                )}
              </Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography
                    component={Link}
                    to="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      if (signature) setOpenDialogSignature(true);
                    }}
                    className={signature ? classes.textLink : classes.isEmpty}
                  >
                    {signature ? "Lihat Detail" : "Kosong"}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
