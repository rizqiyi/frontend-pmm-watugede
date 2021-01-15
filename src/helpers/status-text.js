export const textStatus = (val) => {
  switch (val) {
    case "":
      return "Hidup";

    case "penduduk_keluar":
      return "Penduduk Keluar Desa";

    case "penduduk_masuk":
      return "Penduduk Masuk Desa";

    case "meninggal":
      return "Meninggal";

    default:
      return val;
  }
};
