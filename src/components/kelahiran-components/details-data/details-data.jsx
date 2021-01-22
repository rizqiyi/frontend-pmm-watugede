import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./details-data.style";

export const DetailsDataComponent = ({ ...props }) => {
  const classes = useStyles();
  const {
    isLoading,
    dataKelahiran,
    dataAyah,
    dataIbu,
    signature,
    setOpenDialogDetails,
    setDataToDialog,
    setOpenDialogSignature,
  } = props;

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="baseline"
        p={2}
        paddingLeft={1}
        paddingRight={1}
      >
        <Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Nama Lengkap</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.nama}</Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Jenis Kelamin</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.jenis_kelamin}</Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Agama</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.agama}</Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Pelapor</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.hubungan_pelapor}</Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Tempat Lahir</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.tempat_lahir}</Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Tanggal Lahir</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.tanggal_lahir}</Typography>
              )}
            </Box>
          </Box>

          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Hari Kelahiran</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.hari_kelahiran}</Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Jam Kelahiran</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.jam_lahir}</Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>
                Nomor Surat Kelahiran
              </Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography>{dataKelahiran.nomor_surat_kelahiran}</Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Data Ayah</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography
                  component={Link}
                  to="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDialogDetails(true);
                    setDataToDialog(dataAyah);
                  }}
                  className={classes.detailText}
                >
                  Lihat Detail
                </Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Data Ibu</Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography
                  component={Link}
                  to="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDialogDetails(true);
                    setDataToDialog(dataIbu);
                  }}
                  className={classes.detailText}
                >
                  Lihat Detail
                </Typography>
              )}
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>
                Tanda Tangan Surat
              </Typography>
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Typography
                  component={Link}
                  to="#!"
                  onClick={(e) => {
                    if (dataKelahiran.signatures !== undefined) {
                      setOpenDialogSignature(true);
                      setDataToDialog(signature);
                    }

                    e.preventDefault();
                  }}
                  className={
                    dataKelahiran.signatures !== undefined
                      ? classes.detailText
                      : classes.textIsEmpty
                  }
                >
                  {dataKelahiran.signatures !== undefined
                    ? "Lihat Detail"
                    : "Kosong"}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
