import { Box, Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { SuratKelahiranComponent } from "../../../components/templating-letters/surat-kelahiran/surat-kelahiran";
import { fetchKelahiranId } from "../../../reducers/kelahiran/kelahiran.actions";
import { useStyles } from "./preview-pdf.style";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import DialogEditSignatureComponent from "../../../components/kelahiran-components/signatures/dialog-edit/dialog-edit";
import DialogInsertSignatureComponent from "../../../components/kelahiran-components/signatures/dialog-insert/dialog-insert";

const PreviewPdfKelahiranPage = ({ ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  const previewPDF = useRef(null);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);
  const {
    match,
    isLoading,
    dataKelahiran,
    dataAyah,
    dataIbu,
    fetchKelahiranId,
    signature,
  } = props;

  const paramsId = match.params.id;

  const signatureIsUndefined = signature === undefined;

  useEffect(() => {
    fetchKelahiranId(paramsId);
  }, [fetchKelahiranId, paramsId]);

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        marginBottom={5}
      >
        <Box marginRight={2}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              history.push(`/kelahiran/${paramsId}/d`);
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
              <Box marginLeft={4}>
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
              <Box marginLeft={4}>
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
      <SuratKelahiranComponent
        ref={previewPDF}
        isFetching={isLoading}
        dataKelahiran={dataKelahiran}
        dataAyah={dataAyah}
        dataIbu={dataIbu}
        signature={signature}
      />
      {signatureIsUndefined ? null : (
        <DialogEditSignatureComponent
          open={openDialogEdit}
          dataKelahiran={dataKelahiran}
          handleClose={setOpenDialogEdit}
          signature={signature}
        />
      )}
      <DialogInsertSignatureComponent
        open={openDialogInsert}
        dataKelahiran={dataKelahiran}
        handleClose={setOpenDialogInsert}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.kelahiran.isLoading,
    dataKelahiran: state.kelahiran.kelahiran_obj,
    dataAyah: state.kelahiran.data_ayah,
    dataIbu: state.kelahiran.data_ibu,
    signature: state.kelahiran.signature,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKelahiranId: (id) => dispatch(fetchKelahiranId(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPdfKelahiranPage);
