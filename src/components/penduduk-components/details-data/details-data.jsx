import { Box, Grid, Typography, Link } from "@material-ui/core";
import { useStyles } from "./details-data.style";
import React from "react";
import { textStatus } from "../../../helpers/status-text";
import { useHistory } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";

export const DetailsDataComponent = ({ ...props }) => {
  const { data, dataKK, isFetching } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="baseline"
        spacing={6}
      >
        <Grid item sm={12} md={6} lg={3}>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Nomor Kartu Keluarga
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {dataKK.no_kk}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Nomor Induk Keluarga
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>{data.nik}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Nama Lengkap</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.nama_lengkap}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Jenis Kelamin</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.jenis_kelamin}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tempat Tanggal Lahir
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.tempat_tanggal_lahir}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Umur</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.umur} Tahun
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Agama</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>{data.agama}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Status Perkawinan
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.status_perkawinan}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <Box>
            <Box>
              <Typography className={classes.header}>Pekerjaan</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.pekerjaan}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Pendidikan Terakhir
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.pendidikan_terakhir}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Posisi Dalam Keluarga
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.posisi_dalam_keluarga}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Alamat Asal</Typography>
            </Box>
            <Box style={{ maxWidth: "300px" }}>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {data.alamat_asal}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Status Penduduk
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.value}>
                  {textStatus(data.status_penduduk)}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Data Keluarga</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : (
                <Typography className={classes.detailText}>
                  <Link
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(`/kartu_keluarga/${dataKK._id}/d`);
                    }}
                    underline="none"
                  >
                    Lihat Detail
                  </Link>
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Data Kelahiran</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : null}
              {isFetching ? null : data.data_kelahiran ? (
                <Typography className={classes.detailText}>
                  <Link
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(`/kelahiran/${data.data_kelahiran._id}/d`);
                    }}
                    underline="none"
                  >
                    Lihat Detail
                  </Link>
                </Typography>
              ) : (
                <Typography className={classes.detailTextEmpty}>-</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Data Kematian</Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : null}
              {isFetching ? null : data.data_kematian ? (
                <Typography className={classes.detailText}>
                  <Link
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(`/kematian/${data.data_kematian._id}/d`);
                    }}
                    underline="none"
                  >
                    Lihat Detail
                  </Link>
                </Typography>
              ) : (
                <Typography className={classes.detailTextEmpty}>-</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Data Penduduk Keluar
              </Typography>
            </Box>
            <Box>
              {isFetching ? (
                <Box className={classes.isFetching}>
                  <Skeleton />
                </Box>
              ) : null}
              {isFetching ? null : data.data_penduduk_keluar !== null &&
                data.data_penduduk_keluar !== undefined ? (
                <Typography className={classes.detailText}>
                  <Link
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(
                        `/penduduk_keluar/${data.data_penduduk_keluar._id}/d`
                      );
                    }}
                    underline="none"
                  >
                    Lihat Detail
                  </Link>
                </Typography>
              ) : (
                <Typography className={classes.detailTextEmpty}>-</Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
