import { Box, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./pengikut-keluar.style";
import { Link } from "react-router-dom";
import { DialogDetails } from "../dialog-details/dialog-details";

export const PaperPengikutKeluar = ({ d, fixedData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Paper style={{ width: "fit-content" }}>
        <Box display="flex" flexDirection="column">
          <Box display="flex" p={3} flexDirection="row">
            <Box display="flex" flexDirection="column">
              <Box>
                <Typography
                  variant="subtitle2"
                  className={classes.textPengusul}
                >
                  Pengikut Keluar : {d.nama_lengkap_keluarga}
                </Typography>
              </Box>
              <Box marginTop={1}>
                <Typography
                  variant="subtitle2"
                  className={classes.textPengusul}
                >
                  NIK : {d.nik_keluarga}
                </Typography>
              </Box>
              <Box marginTop={1}>
                <Typography
                  variant="subtitle2"
                  className={classes.textPengusul}
                >
                  Tempat Tgl. Lahir : {d.jenis_kelamin_keluarga}
                </Typography>
              </Box>
              <Box marginTop={1}>
                <Typography
                  variant="subtitle2"
                  className={classes.textPengusul}
                >
                  Umur : {d.umur_keluarga}
                </Typography>
              </Box>
              <Box marginTop={1}>
                <Typography
                  variant="subtitle2"
                  className={classes.textPengusul}
                >
                  Posisi Dalam Keluarga : {d.keterangan_dalam_keluarga}
                </Typography>
              </Box>
              <Box marginTop={3}>
                <Typography
                  color="primary"
                  className={classes.textLink}
                  variant="subtitle1"
                  component={Link}
                  to="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setData(d);
                    setOpen(true);
                  }}
                >
                  Lihat Detail
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <DialogDetails
        open={open}
        fixedData={fixedData}
        handleClose={handleClose}
        dataId={data}
      />
    </React.Fragment>
  );
};
