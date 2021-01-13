import { Box, Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./preview-pdf.style";
import ReactToPrint from "react-to-print";
import { SuratKeluarComponent } from "../../../components/templating-letters/surat-keluar/surat-keluar";
import { getPendudukKeluarById } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";

const PreviewPdfPendudukKeluarPage = ({ ...props }) => {
  const classes = useStyles();
  const printReference = useRef(null);
  const history = useHistory();

  const {
    match,
    getPendudukKeluarById,
    pendudukKeluarByID,
    keteranganKeluar,
    isLoading,
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
        <Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <ReactToPrint
              trigger={() => (
                <Button className={classes.insertButton}>Unduh PDF</Button>
              )}
              documentTitle={`surat-keterangan-keluar-${checkValues(
                firstData[0].nama_lengkap
              )}`}
              content={() => printReference.current}
            />
          )}
        </Box>
      </Box>
      <SuratKeluarComponent
        dataPenduduk={pendudukKeluarByID}
        dataKeterangan={keteranganKeluar}
        isFetching={isLoading}
        ref={printReference}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pendudukKeluarByID: state.penduduk_keluar.penduduk_keluar_by_id,
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
