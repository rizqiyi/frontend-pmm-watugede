import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useState } from "react";
import { photoPath } from "../../../helpers/getAvatars";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./keterangan-keluar.style";
import PersonIcon from "@material-ui/icons/Person";

const KeteranganKeluarComponent = ({ ...props }) => {
  const {
    data,
    isLoading,
    setOpenDialogEdit,
    setOpenDialogDeleteKeterangan,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const path = photoPath(data.foto_pengusul ? data.foto_pengusul : "//");

  return (
    <React.Fragment>
      <Box p={3} paddingBottom={0}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={10}
        >
          <Grid item>
            <Box display="flex" flexDirection="row">
              <Box>
                {isLoading ? (
                  <Skeleton variant="rect" width={275} height={275} />
                ) : path === "//" ? (
                  <Box
                    width={270}
                    height={270}
                    style={{ backgroundColor: "#9e9e9e" }}
                    borderRadius={10}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <PersonIcon
                        style={{ width: 100, height: 100, color: "#fff" }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <React.Fragment>
                    <img
                      alt="Foto Pengusul"
                      className={classes.controlImage}
                      src={path}
                    />
                  </React.Fragment>
                )}
              </Box>
              <Box marginLeft={12}>
                <Box marginBottom={2}>
                  <Box marginBottom={1}>
                    {isLoading ? (
                      <Skeleton width={200} />
                    ) : (
                      <Typography className={classes.header_number}>
                        Nomor Surat
                      </Typography>
                    )}{" "}
                  </Box>
                  <Box>
                    {isLoading ? (
                      <Skeleton width={120} />
                    ) : (
                      <Typography className={classes.values_number}>
                        {data.nomor_surat}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box marginBottom={2}>
                  <Box marginBottom={1}>
                    {isLoading ? (
                      <Skeleton width={200} />
                    ) : (
                      <Typography className={classes.header}>
                        Tanggal KTP
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    {isLoading ? (
                      <Skeleton width={120} />
                    ) : (
                      <Typography className={classes.values}>
                        {data.tanggal_ktp}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box marginBottom={2}>
                  <Box marginBottom={1}>
                    {isLoading ? (
                      <Skeleton width={200} />
                    ) : (
                      <Typography className={classes.header}>
                        Alamat Pindah
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    {isLoading ? (
                      <Skeleton width={120} />
                    ) : (
                      <Typography className={classes.values}>
                        {data.alamat_pindah}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box marginBottom={2}>
                  <Box marginBottom={1}>
                    {isLoading ? (
                      <Skeleton width={200} />
                    ) : (
                      <Typography className={classes.header}>
                        Alasan Pindah
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    {isLoading ? (
                      <Skeleton width={120} />
                    ) : (
                      <Typography className={classes.values}>
                        {data.alasan_pindah}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Box marginBottom={2}>
                <Box marginBottom={1}>
                  {isLoading ? (
                    <Skeleton width={200} />
                  ) : (
                    <Typography className={classes.header}>Pengikut</Typography>
                  )}
                </Box>
                <Box>
                  {isLoading ? (
                    <Skeleton width={120} />
                  ) : (
                    <Typography className={classes.values}>
                      {data.pengikut}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box marginBottom={2}>
                <Box marginBottom={1}>
                  {isLoading ? (
                    <Skeleton width={200} />
                  ) : (
                    <Typography className={classes.header}>
                      Meninggalkan Desa Pada
                    </Typography>
                  )}
                </Box>
                <Box>
                  {isLoading ? (
                    <Skeleton width={120} />
                  ) : (
                    <Typography className={classes.values}>
                      {data.meninggalkan_desa_pada}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box marginBottom={2}>
                <Box marginBottom={1}>
                  {isLoading ? (
                    <Skeleton width={200} />
                  ) : (
                    <Typography className={classes.header}>
                      Kewarganegaraan
                    </Typography>
                  )}
                </Box>
                <Box>
                  {isLoading ? (
                    <Skeleton width={120} />
                  ) : (
                    <Typography className={classes.values}>
                      {data.kewarganegaraan}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box marginBottom={2}>
                <Box marginBottom={1}>
                  {isLoading ? (
                    <Skeleton width={200} />
                  ) : (
                    <Typography className={classes.header}>Catatan</Typography>
                  )}
                </Box>
                <Box>
                  {isLoading ? (
                    <Skeleton width={120} />
                  ) : (
                    <Typography className={classes.values}>
                      {data.catatan}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box position="relative" top={-15}>
              <Box>
                {isLoading ? (
                  <Skeleton variant="circle" width="50px" height="50px" />
                ) : (
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      setAnchorEl(e.currentTarget);
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                )}
              </Box>
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
                    setOpenDialogDeleteKeterangan(true);
                  }}
                >
                  Hapus
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default KeteranganKeluarComponent;
