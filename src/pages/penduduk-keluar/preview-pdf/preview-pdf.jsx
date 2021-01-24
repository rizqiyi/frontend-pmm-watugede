import { Box, Button, CircularProgress, Paper } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./preview-pdf.style";
import ReactToPrint from "react-to-print";
import { SuratKeluarComponent } from "../../../components/templating-letters/surat-keluar/surat-keluar";
import { getPendudukKeluarById } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import DialogEditSignatureComponent from "../../../components/penduduk-keluar-components/signatures/dialog-edit/dialog-edit";
import DialogInsertSignatureComponent from "../../../components/penduduk-keluar-components/signatures/dialog-insert/dialog-insert";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

const PreviewPdfPendudukKeluarPage = ({ ...props }) => {
  const classes = useStyles();
  const printReference = useRef(null);
  const history = useHistory();
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);

  const {
    match,
    getPendudukKeluarById,
    pendudukKeluarByID,
    keteranganKeluar,
    isLoading,
    signature,
  } = props;

  const paramsId = match.params.id;

  useEffect(() => {
    getPendudukKeluarById(paramsId);
  }, [getPendudukKeluarById, paramsId]);

  const firstData = pendudukKeluarByID.length === 0 ? [{}] : pendudukKeluarByID;

  const checkValues = (val) => {
    return val ? val : "";
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Button
            onClick={() => history.push(`/penduduk_keluar/${paramsId}/d`)}
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
                trigger={() => (
                  <Button
                    className={classes.downloadButton}
                    startIcon={<GetAppIcon />}
                  >
                    Unduh PDF
                  </Button>
                )}
                documentTitle={`surat-keterangan-keluar-${checkValues(
                  firstData[0].nama_lengkap
                )}`}
                content={() => printReference.current}
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
          alignItems="center"
          margin="10rem auto 0px auto"
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Paper style={{ boxShadow: "none", marginTop: "2rem" }}>
          <SuratKeluarComponent
            dataPenduduk={pendudukKeluarByID}
            dataKeterangan={keteranganKeluar}
            isFetching={isLoading}
            ref={printReference}
            signature={signature}
          />
        </Paper>
      )}
      <DialogInsertSignatureComponent
        open={openDialogInsert}
        id={paramsId}
        handleClose={setOpenDialogInsert}
      />
      {signature ? (
        <React.Fragment>
          <DialogEditSignatureComponent
            open={openDialogEdit}
            handleClose={setOpenDialogEdit}
            signature={signature}
            id={paramsId}
          />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pendudukKeluarByID: state.penduduk_keluar.penduduk_keluar_by_id,
    signature: state.penduduk_keluar.signature,
    keteranganKeluar: state.penduduk_keluar.keterangan_keluar_by_id,
    isLoading: state.penduduk_keluar.isLoadingKeterangan,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPendudukKeluarById: (id) => dispatch(getPendudukKeluarById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPdfPendudukKeluarPage);
