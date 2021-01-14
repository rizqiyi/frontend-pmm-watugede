import * as yup from "yup";

export const pendudukInsertValidation = yup.object({
  nik: yup.string().required("NIK tidak boleh kosong"),
  nama_lengkap: yup.string().required("Nama Lengkap tidak boleh kosong"),
  jenis_kelamin: yup.string().required("Jenis Kelamin tidak boleh kosong"),
  tempat_tanggal_lahir: yup
    .string()
    .required("Tempat Tanggal Lahir tidak boleh kosong"),
  umur: yup.string().required("Umur tidak boleh kosong"),
  agama: yup.string().required("Agama tidak boleh kosong"),
  status_perkawinan: yup
    .string()
    .required("Status perkawinan tidak boleh kosong"),
  pekerjaan: yup.string().required("Pekerjaan tidak boleh kosong"),
  pendidikan_terakhir: yup
    .string()
    .required("Pendidikan terakhir tidak boleh kosong"),
  posisi_dalam_keluarga: yup
    .string()
    .required("Posisi dalam keluarga tidak boleh kosong"),
  alamat_asal: yup.string().required("Alamat tidak boleh kosong"),
});
