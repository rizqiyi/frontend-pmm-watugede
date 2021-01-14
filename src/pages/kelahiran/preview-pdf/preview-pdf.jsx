import { Box, Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { SuratKelahiranComponent } from "../../../components/templating-letters/surat-kelahiran/surat-kelahiran";
import { fetchKelahiranId } from "../../../reducers/kelahiran/kelahiran.actions";
import { useStyles } from "./preview-pdf.style";

const PreviewPdfKelahiranPage = ({ ...props }) => {
  const classes = useStyles();
  const history = useHistory();
  const previewPDF = useRef(null);
  const {
    match,
    isLoading,
    dataKelahiran,
    dataAyah,
    dataIbu,
    fetchKelahiranId,
  } = props;

  const paramsId = match.params.id;

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
        <Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <ReactToPrint
              trigger={() => (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className={classes.seeButton}
                >
                  Unduh PDF
                </Button>
              )}
              content={() => previewPDF.current}
            />
          )}
        </Box>
      </Box>
      <SuratKelahiranComponent
        ref={previewPDF}
        isFetching={isLoading}
        dataKelahiran={dataKelahiran}
        dataAyah={dataAyah}
        dataIbu={dataIbu}
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
