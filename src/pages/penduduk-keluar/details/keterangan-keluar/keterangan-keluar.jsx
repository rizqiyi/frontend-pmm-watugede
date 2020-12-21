import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

export const KeteranganKeluarComponent = ({ isLoading, data }) => {
  const isEmpty = data.length === 0;

  return (
    <React.Fragment>
      <Box marginLeft={4}>
        <Typography variant="subtitle1" style={{ textDecoration: "underline" }}>
          Data Keterangan Keluar
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Box marginLeft={4}>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={250} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Tanggal KTP : {isEmpty ? "" : data[0].tanggal_ktp}
              </Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={250} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Alamat Pindah : {isEmpty ? "" : data[0].alamat_pindah}
              </Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={250} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Alasan Pindah : {isEmpty ? "" : data[0].alasan_pindah}
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
                Pengikut : {isEmpty ? "" : data[0].pengikut}
              </Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={250} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Meninggalkan Desa Pada :{" "}
                {isEmpty ? "" : data[0].meninggalkan_desa_pada}
              </Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={250} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Catatan : {isEmpty ? "" : data[0].catatan}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
