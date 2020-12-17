import * as yup from "yup";

const mutasiKeluarInsertValidation = yup.object({
  nama_lengkap_keluarga: yup
    .string()
    .required("Nama Lengkap tidak boleh kosong"),
  jenis_kelamin_keluarga: yup
    .string()
    .required("Jenis Kelamin tidak boleh kosong"),
  umur_keluarga: yup.string().required("Umur tidak boleh kosong"),
  status_perkawinan_keluarga: yup
    .string()
    .required("Status perkawinan tidak boleh kosong"),
  pendidikan_terakhir_keluarga: yup
    .string()
    .required("Pendidikan terakhir tidak boleh kosong"),
  nik_keluarga: yup.string().required("NIK tidak boleh kosong"),
  keterangan_dalam_keluarga: yup
    .string()
    .required("Posisi dalam keluarga tidak boleh kosong"),
});

export { mutasiKeluarInsertValidation };
