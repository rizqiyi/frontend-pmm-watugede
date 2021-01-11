import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./data-lists.style";
import peopleIcon from "../../assets/icons/icon-semua-penduduk.svg";
import femaleIcon from "../../assets/icons/female-icon.svg";
import maleIcon from "../../assets/icons/male-icon.svg";
import kartuKeluargaIcon from "../../assets/icons/kartukeluarga-icon-dashboard.svg";
import pendudukMasukIcon from "../../assets/icons/pendudukmasuk-icon-dashboard.svg";
import pendudukKeluarIcon from "../../assets/icons/pendudukkeluar-icon-dashboard.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";
import minusIcon from "../../assets/icons/minus-icon.svg";
import kematianIcon from "../../assets/icons/kematian-icon-dashboard.svg";
import { Skeleton } from "@material-ui/lab";

export const DataListsComponent = ({ data, isLoading }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="baseline"
        justifyContent="space-between"
        width="100%"
      >
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={peopleIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography className={classes.header}>
                    Jumlah Semua Penduduk
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.data_penduduk}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
            marginTop={4}
            marginBottom={4}
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={femaleIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography className={classes.header}>
                    Jumlah Penduduk Wanita
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.data_wanita}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={plusIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      maxWidth: "280px",
                    }}
                    className={classes.header}
                  >
                    Jumlah Data Kurang Lengkap Penduduk Masuk
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.inc_data_penduduk_masuk}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
            marginTop={4}
            marginBottom={4}
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={kartuKeluargaIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography className={classes.header}>
                    Jumlah Kartu Keluarga
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.data_kk}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
            marginTop={4}
            marginBottom={4}
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={pendudukMasukIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography className={classes.header}>
                    Jumlah Penduduk Masuk
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.data_penduduk_masuk}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={minusIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      maxWidth: "280px",
                    }}
                    className={classes.header}
                  >
                    Jumlah Data Kurang Lengkap Penduduk Keluar
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.inc_data_penduduk_keluar}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={maleIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography className={classes.header}>
                    Jumlah Penduduk Pria
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.data_pria}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
            marginTop={4}
            marginBottom={4}
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={pendudukKeluarIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography className={classes.header}>
                    Jumlah Penduduk Keluar
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.data_penduduk_keluar}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
          >
            <Box>
              {isLoading ? (
                <Skeleton variant="rect" width={40} height={40} />
              ) : (
                <img src={kematianIcon} alt="icon" />
              )}
            </Box>
            <Box marginLeft={4}>
              <Box>
                {isLoading ? (
                  <Skeleton width={220} />
                ) : (
                  <Typography
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      maxWidth: "280px",
                    }}
                    className={classes.header}
                  >
                    Jumlah Data Kurang Lengkap Kematian
                  </Typography>
                )}
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Typography className={classes.values}>
                    {data.inc_data_kematian}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
