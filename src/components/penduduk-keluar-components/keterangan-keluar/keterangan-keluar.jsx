import { Avatar, Box, Container, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { photoPath } from "../../../helpers/getAvatars";

const KeteranganKeluarComponent = ({ ...props }) => {
  const { data, isLoading } = props;
  const path = photoPath(data.foto_pengusul ? data.foto_pengusul : "//");

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Box>
          {isLoading ? (
            <Skeleton variant="circle" width="120px" height="120px" />
          ) : (
            <Avatar
              style={{ width: "120px", height: "120px" }}
              alt="Foto Pengusul"
              src={path}
            ></Avatar>
          )}
        </Box>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="baseline"
          marginTop={2}
        >
          <Box>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography
                  style={{ lineHeight: 2, textDecoration: "underline" }}
                >
                  Nomor Surat : {data.nomor_surat}
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography style={{ lineHeight: 2 }}>
                  Tanggal KTP Pengusul : {data.tanggal_ktp}
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography style={{ lineHeight: 2 }}>
                  Alamat Pindah : {data.alamat_pindah}
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography style={{ lineHeight: 2 }}>
                  Alasan Pindah : {data.alasan_pindah}
                </Typography>
              )}
            </Box>
          </Box>
          <Box marginRight={1}>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography style={{ lineHeight: 2 }}>
                  Pengikut : {data.pengikut}
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography style={{ lineHeight: 2 }}>
                  Meninggalkan Desa Pada : {data.meninggalkan_desa_pada}
                </Typography>
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Skeleton width="250px" height="40px" />
              ) : (
                <Typography
                  style={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    maxWidth: 370,
                  }}
                >
                  Catatan : {data.catatan}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default KeteranganKeluarComponent;
