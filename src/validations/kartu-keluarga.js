import * as yup from "yup";

export const kartuKeluargaInsertValidation = yup.object({
  no_kk: yup.string().required("Nomor KK tidak boleh kosong"),
  nik: yup.string().required("NIK tidak boleh kosong"),
  nama_lengkap: yup.string().required("Nama Lengkap tidak boleh kosong"),
  jenis_kelamin: yup.string().required("Jenis Kelamin tidak boleh kosong"),
  tempat_tanggal_lahir: yup.string().required("Tidak boleh kosong"),
  umur: yup.string().required("Umur tidak boleh kosong"),
  agama: yup.string().required("Agama tidak boleh kosong"),
  status_perkawinan: yup
    .string()
    .required("Status Perkawinan tidak boleh kosong"),
  pekerjaan: yup.string().required("Pekerjaan tidak boleh kosong"),
  pendidikan_terakhir: yup
    .string()
    .required("Pendidikan Terakhir tidak boleh kosong"),
  alamat_asal: yup.string().required("Alamat Asal tidak boleh kosong"),
});
