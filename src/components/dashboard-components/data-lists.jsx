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

export const DataListsComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="baseline"
        justifyContent="space-between"
        width="100%"
        marginLeft={4}
      >
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="max-content"
          >
            <Box>
              <img src={peopleIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
                <Typography className={classes.header}>
                  Jumlah Semua Penduduk
                </Typography>
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={femaleIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
                <Typography className={classes.header}>
                  Jumlah Penduduk Wanita
                </Typography>
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={plusIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
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
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={kartuKeluargaIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
                <Typography className={classes.header}>
                  Jumlah Kartu Keluarga
                </Typography>
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={pendudukMasukIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
                <Typography className={classes.header}>
                  Jumlah Penduduk Masuk
                </Typography>
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={minusIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
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
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={maleIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
                <Typography className={classes.header}>
                  Jumlah Penduduk Pria
                </Typography>
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={pendudukKeluarIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
                <Typography className={classes.header}>
                  Jumlah Penduduk Keluar
                </Typography>
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
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
              <img src={kematianIcon} alt="icon" />
            </Box>
            <Box marginLeft={4}>
              <Box>
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
              </Box>
              <Box marginTop={1} marginBottom={1}></Box>
              <Box>
                <Typography className={classes.values}>1.000.000</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
