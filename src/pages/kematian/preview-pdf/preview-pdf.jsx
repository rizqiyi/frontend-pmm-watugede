import { Box, Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { getDataKematianById } from "../../../reducers/kematian/kematian.actions";
import { useStyles } from "./preview-pdf.style";
import { SuratKematianComponent } from "../../../components/templating-letters/surat-kematian/surat-kematian";

const PreviewPdfKematianPage = ({ ...props }) => {
  const {
    getDataKematianById,
    match,
    dataKematian,
    childDataKematian,
    isLoading,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const previewPDF = useRef(null);

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
        <Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <ReactToPrint
              documentTitle={`surat-kematian-${childDataKematian.nama_lengkap}`}
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
      <SuratKematianComponent
        dataKematian={dataKematian}
        dataPenduduk={childDataKematian}
        isFetching={isLoading}
        ref={previewPDF}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataKematian: state.kematian.kematian_details,
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
