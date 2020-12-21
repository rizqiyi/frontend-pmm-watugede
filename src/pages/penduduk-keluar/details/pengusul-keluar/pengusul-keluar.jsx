import { Box, Typography, Avatar } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { photoPath } from "../../../../helpers/getAvatars";

export const PengusulKeluarComponent = ({ isLoading, data, path }) => {
  const avatarsIsNull =
    path === undefined || path.length === 0 ? "//" : path[0].foto_pengusul;

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box>
          {isLoading ? (
            <Skeleton
              variant="circle"
              width={140}
              height={140}
              animation="wave"
            />
          ) : (
            <Avatar
              style={{ height: "140px", width: "140px" }}
              src={photoPath(avatarsIsNull)}
            ></Avatar>
          )}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="baseline">
        <Box>
          <Box marginTop={4}>
            {isLoading ? (
              <Skeleton width={230} height={30} />
            ) : (
              <Typography variant="subtitle1">NIK : {data.nik}</Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={230} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Nama Pengusul : {data.nama_lengkap}
              </Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={230} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Tempat Tanggal Lahir : {data.tempat_tanggal_lahir}
              </Typography>
            )}
          </Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={230} height={30} />
            ) : (
              <Typography variant="subtitle1">Umur : {data.umur}</Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={230} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Jenis Kelamin : {data.jenis_kelamin}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={230} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Status Perkawinan : {data.status_perkawinan}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={230} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Pendidikan Terakhir : {data.pendidikan_terakhir}
                </Typography>
              )}
            </Box>
            <Box marginTop={2}>
              {isLoading ? (
                <Skeleton width={230} height={30} />
              ) : (
                <Typography variant="subtitle1">
                  Agama : {data.agama}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box marginTop={2}>
            {isLoading ? (
              <Skeleton width={230} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Posisi Dalam Keluarga : {data.posisi_dalam_keluarga}
              </Typography>
            )}
          </Box>
          <Box
            marginTop={2}
            style={{
              maxWidth: "340px",
            }}
          >
            {isLoading ? (
              <Skeleton width={230} height={30} />
            ) : (
              <Typography variant="subtitle1">
                Alamat Asal : {data.alamat_asal}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
