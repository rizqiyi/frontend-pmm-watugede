import {
  Box,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { InsertComponents } from "../../../components/penduduk-keluar-components/insert-keterangan-keluar/insert";
import dataIsNull from "../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../components/typography/typography";
import { useStyles } from "./details.style";
import KeteranganKeluarComponent from "../../../components/penduduk-keluar-components/keterangan-keluar/keterangan-keluar";
import { PengusulKeluarComponent } from "../../../components/penduduk-keluar-components/pengusul-keluar/pengusul-keluar";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DialogDeleteComponent from "../../../components/penduduk-keluar-components/dialog-delete/dialog-delete";
import DialogEditComponent from "../../../components/penduduk-keluar-components/dialog-edit/dialog-edit";
import DialogDetailsComponent from "../../../components/penduduk-keluar-components/dialog-details/dialog-details";

const PendudukKeluarDetailPage = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);

  return (
    <React.Fragment>
      <InsertComponents />
      <Box marginTop={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">
              Detail Informasi Penduduk Keluar
            </Typography>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            {/* <Box display="flex" flexDirection="column">
              <Box>
                <img
                  src={dataIsNull}
                  className={classes.dataIsNull}
                  alt="Data Keterangan Keluar Not Found"
                />
              </Box>
              <Box display="flex" marginTop={4} justifyContent="center">
                <Typography className={classes.textIsNull}>
                  DATA KETERANGAN KELUAR KOSONG
                </Typography>
              </Box>
              <Box
                display="flex"
                marginTop={2}
                marginBottom={1}
                justifyContent="center"
              >
                <GreyText
                  text="Silakan tambah data keterangan keluar penduduk terlebih dahulu"
                  className={classes.textCons}
                />
              </Box>
            </Box> */}
            <KeteranganKeluarComponent />
            <Box marginTop={3}>
              <Typography variant="h6">Pengusul Penduduk Keluar</Typography>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <PengusulKeluarComponent />
          </Box>
        </Paper>
        <Box marginTop={3} marginLeft={3}>
          <Typography variant="h6">Pengikut Keluar Desa</Typography>
        </Box>
        <Box marginTop={2} marginBottom={2}>
          <Divider />
        </Box>
        <Grid container spacing={1}>
          <Grid container justify="center" item xs={12} spacing={2}>
            <Grid item>
              <Paper>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      setAnchorEl(e.currentTarget);
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={(e) => {
                      e.preventDefault();
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem
                      onClick={(e) => {
                        e.preventDefault();
                        setAnchorEl(null);
                        setOpenDialogEdit(true);
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        e.preventDefault();
                        setAnchorEl(null);
                        setOpenDialogDelete(true);
                      }}
                    >
                      Hapus
                    </MenuItem>
                  </Menu>
                </Box>
                <Box p={3} paddingTop={0}>
                  <Box>
                    <Typography style={{ lineHeight: 2 }}>
                      Nama Lengkap : Rizqiyanto Imanullah
                    </Typography>
                  </Box>
                  <Box>
                    <Typography style={{ lineHeight: 2 }}>Umur : 20</Typography>
                  </Box>
                  <Box>
                    <Typography style={{ lineHeight: 2 }}>
                      Pendidikan Terakhir : S3
                    </Typography>
                  </Box>
                  <Box>
                    <Typography style={{ lineHeight: 2 }}>
                      Kedudukan dalam Keluarga : Anak
                    </Typography>
                  </Box>
                  <Box>
                    <Typography style={{ lineHeight: 2 }}>
                      Pekerjaan : Freelancer
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    <Typography
                      component={Link}
                      to="#!"
                      className={classes.textLink}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDialogDetails(true);
                      }}
                    >
                      Lihat Detail
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <DialogDeleteComponent
        open={openDialogDelete}
        handleClose={setOpenDialogDelete}
      />
      <DialogEditComponent
        open={openDialogEdit}
        handleClose={setOpenDialogEdit}
      />
      <DialogDetailsComponent
        open={openDialogDetails}
        handleClose={setOpenDialogDetails}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukKeluarDetailPage);
