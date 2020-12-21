import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useStyles } from "./keterangan-keluar.style";
import dataIsNullImage from "../../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../../components/typography/typography";

export const KeteranganKeluarComponent = ({ isLoading, data }) => {
  const isEmpty = data === undefined || data.length === 0;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box marginLeft={4}>
        <Typography variant="subtitle1" style={{ textDecoration: "underline" }}>
          Data Keterangan Keluar
        </Typography>
      </Box>
      {isEmpty ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="0 auto"
          marginBottom={4}
        >
          <Box display="flex" flexDirection="column">
            <Box>
              <img
                src={dataIsNullImage}
                className={classes.dataIsNull}
                alt="Data Not Found"
              />
            </Box>
            <Box display="flex" marginTop={4} justifyContent="center">
              <Typography className={classes.textIsNull}>
                DATA KETERANGAN KELUAR KOSONG
              </Typography>
            </Box>
            <Box display="flex" marginTop={2} justifyContent="center">
              <GreyText
                text="Silakan tambah data keterangan keluar terlebih dahulu pada halaman mutasi keluar."
                className={classes.textCons}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
      {isEmpty ? null : (
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          p={2}
        >
          <Box marginLeft={4}>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={250} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Tanggal KTP : {data.tanggal_ktp}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={250} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Alamat Pindah : {data[0].alamat_pindah}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={250} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Alasan Pindah : {data[0].alasan_pindah}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={250} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Pengikut : {data[0].pengikut}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={250} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Meninggalkan Desa Pada : {data[0].meninggalkan_desa_pada}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={250} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Catatan : {data[0].catatan}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};
