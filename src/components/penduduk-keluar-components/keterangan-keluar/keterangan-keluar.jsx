import { Avatar, Box, Container, Typography } from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";

const KeteranganKeluarComponent = (props) => {
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Box>
          <Avatar
            style={{ width: "120px", height: "120px" }}
            alt="Foto Pengusul"
          >
            <PersonIcon style={{ width: "70px", height: "70px" }} />
          </Avatar>
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
              <Typography
                style={{ lineHeight: 2, textDecoration: "underline" }}
              >
                Nomor Surat : 12/ASIDAS/2020132
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Tanggal KTP Pengusul : 21 Desember 2020
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Alamat Pindah : Menteng, Jakarta
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Alasan Pindah : Pekerjaan
              </Typography>
            </Box>
          </Box>
          <Box marginRight={1}>
            <Box>
              <Typography style={{ lineHeight: 2 }}>Pengikut : 2</Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Meninggalkan Desa Pada : 21 Desember 2020
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{ lineHeight: 1.8, textAlign: "justify", maxWidth: 370 }}
              >
                Catatan : lorem ipsum dolor sit amet, lorem ipsum dolor sit
                amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
                lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
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
)(KeteranganKeluarComponent);
