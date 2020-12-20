const headCellsPenduduk = [
  { id: "nik", numeric: false, disablePadding: false, label: "NIK" },
  {
    id: "nama_lengkap",
    numeric: false,
    disablePadding: false,
    label: "Nama Lengkap",
  },
  {
    id: "ttl",
    numeric: false,
    disablePadding: false,
    label: "Tempat Tgl. Lahir",
  },
  {
    id: "umur",
    numeric: true,
    disablePadding: false,
    label: "Umur",
  },
  {
    id: "alamat",
    numeric: false,
    disablePadding: false,
    label: "Alamat",
  },
  {
    id: "jenis_kelamin",
    numeric: false,
    disablePadding: false,
    label: "Jenis Kelamin",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

const headCellsPengikutKeluar = [
  { id: "nik", numeric: false, disablePadding: false, label: "NIK" },
  {
    id: "nama_pengusul",
    numeric: false,
    disablePadding: false,
    label: "Nama Pengusul",
  },
  {
    id: "jenis_kelamin",
    numeric: false,
    disablePadding: false,
    label: "Jenis Kelamin",
  },
  {
    id: "ttl",
    numeric: false,
    disablePadding: false,
    label: "Tempat Tgl. Lahir",
  },
  {
    id: "alamat_asal",
    numeric: false,
    disablePadding: false,
    label: "Alamat Asal",
  },
  {
    id: "jumlah_pengikut",
    numeric: true,
    disablePadding: false,
    label: "Jumlah Pengikut",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

export { headCellsPenduduk, headCellsPengikutKeluar };
