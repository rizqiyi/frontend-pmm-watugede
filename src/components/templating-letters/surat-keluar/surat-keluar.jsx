import React, { forwardRef } from "react";
import { photoPath } from "../../../helpers/getAvatars";
import { useStyles } from "./surat-keluar.style";
import angkaTerbilang from "@develoka/angka-terbilang-js";
import { BodyComponent } from "../surat-keluar/body/body";

export const SuratKeluarComponent = forwardRef(({ ...props }, ref) => {
  const classes = useStyles();
  const { isFetching, dataKeterangan, dataPenduduk, signature } = props;

  const firstData = dataPenduduk.length === 0 ? [{}] : dataPenduduk;

  const checkValues = (val) => {
    return val ? val : "";
  };

  const path = photoPath(
    dataKeterangan.foto_pengusul ? dataKeterangan.foto_pengusul : "//"
  );

  const isUndefined =
    dataKeterangan.pengikut === undefined ? 0 : dataKeterangan.pengikut;

  const numberToBahasa =
    angkaTerbilang(isUndefined).charAt(0).toUpperCase() +
    angkaTerbilang(isUndefined).slice(1);

  return (
    <React.Fragment>
      <div ref={ref}>
        {isFetching ? null : (
          <React.Fragment>
            <BodyComponent
              path={path}
              numberToBahasa={numberToBahasa}
              checkValues={checkValues}
              firstData={firstData}
              classes={classes}
              dataPenduduk={dataPenduduk}
              dataKeterangan={dataKeterangan}
              signature={signature}
            />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
});
