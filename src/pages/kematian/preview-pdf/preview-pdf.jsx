import { Box, Button, CircularProgress, Paper } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { getDataKematianById } from "../../../reducers/kematian/kematian.actions";
import { useStyles } from "./preview-pdf.style";
import { SuratKematianComponent } from "../../../components/templating-letters/surat-kematian/surat-kematian";
import DialogInsertSignatureComponent from "../../../components/kematian-components/signatures/dialog-insert/dialog-insert";
import DialogEditSignatureComponent from "../../../components/kematian-components/signatures/dialog-edit/dialog-edit";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

const PreviewPdfKematianPage = ({ ...props }) => {
  const {
    getDataKematianById,
    match,
    dataKematian,
    childDataKematian,
    signature,
    isLoading,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const previewPDF = useRef(null);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getDataKematianById(paramsId);
  }, [paramsId, getDataKematianById]);

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box marginRight={2}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              history.push(`/kematian/${paramsId}/d`);
            }}
            className={classes.backButton}
          >
            Kembali
          </Button>
        </Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <ReactToPrint
                documentTitle={`surat-kematian-${childDataKematian.nama_lengkap}`}
                trigger={() => (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    startIcon={<GetAppIcon />}
                    className={classes.seeButton}
                  >
                    Unduh PDF
                  </Button>
                )}
                content={() => previewPDF.current}
              />
            </Box>
            {signature ? (
              <Box marginLeft={3}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDialogEdit(true);
                  }}
                  startIcon={<EditIcon />}
                  className={classes.updateButton}
                >
                  Perbarui Nama TTD
                </Button>
              </Box>
            ) : null}
            {!signature ? (
              <Box marginLeft={3}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDialogInsert(true);
                  }}
                  startIcon={<AddIcon />}
                  className={classes.insertButton}
                >
                  Tambah Nama TTD
                </Button>
              </Box>
            ) : null}
          </Box>
        )}
      </Box>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          marginTop="2rem"
          alignItems="center"
        >
          <CircularProgress color="primary" />
        </Box>
      ) : null}
      {isLoading ? null : (
        <Paper style={{ boxShadow: "none", marginTop: "2rem" }}>
          <SuratKematianComponent
            dataKematian={dataKematian}
            dataPenduduk={childDataKematian}
            isFetching={isLoading}
            ref={previewPDF}
            signature={signature}
          />
        </Paper>
      )}
      <DialogInsertSignatureComponent
        open={openDialogInsert}
        handleClose={setOpenDialogInsert}
        data={dataKematian}
      />
      <DialogEditSignatureComponent
        open={openDialogEdit}
        handleClose={setOpenDialogEdit}
        signature={signature}
        dataKematian={dataKematian}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataKematian: state.kematian.kematian_details,
    signature: state.kematian.signature,
    childDataKematian: state.kematian.kematian_obj,
    isLoading: state.kematian.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataKematianById: (id) => dispatch(getDataKematianById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPdfKematianPage);
