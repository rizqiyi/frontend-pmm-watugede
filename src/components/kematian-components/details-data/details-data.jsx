import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./details-data.style";

export const DetailsDataComponent = ({ ...props }) => {
  const classes = useStyles();

  const { childData, data, isLoading, setOpenDialogSignature } = props;

  return (
    <React.Fragment>
      <Box
        p={2}
        paddingRight={0}
        paddingLeft={0}
        display="flex"
        justifyContent="space-around"
      >
        <Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Nama Lengkap</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{childData.nama_lengkap}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Umur</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{childData.umur}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Alamat</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3} maxWidth={230}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{childData.alamat_asal}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Pekerjaan</Typography>
            </Box>
            <Box marginTop={1}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{childData.pekerjaan}</Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tempat Tanggal Lahir
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{childData.tempat_tanggal_lahir}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Pendidikan Terakhir
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{childData.pendidikan_terakhir}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Hari</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{data.hari_meninggal}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Nomor Surat Kematian
              </Typography>
            </Box>
            <Box marginTop={1}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{data.nomor_surat_kematian}</Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tanggal Meninggal
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{data.tanggal_meninggal}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tempat Meninggal
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{data.tempat_meninggal}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Penyebab Meninggal
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography>{data.penyebab_meninggal}</Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tanda Tangan Surat
              </Typography>
            </Box>
            <Box marginTop={1}>
              {isLoading ? (
                <Skeleton animation="wave" height={20} />
              ) : (
                <Typography
                  component={Link}
                  to="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDialogSignature(true);
                  }}
                  className={classes.textLink}
                >
                  Lihat Detail
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
