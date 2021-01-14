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

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const keteranganKeluarInsertValidation = yup.object({
  nomor_surat: yup.string().required("Nomor Surat tidak boleh kosong"),
  pengikut: yup
    .number()
    .typeError("Input harus berupa angka")
    .required("Pengikut tidak boleh kosong"),
  alamat_pindah: yup.string().required("Alamat Pindah tidak boleh kosong"),
  tanggal_ktp: yup.string().required("Tanggal ktp tidak boleh kosong"),
  meninggalkan_desa_pada: yup
    .string()
    .required("Tanggal meninggalkan desa tidak boleh kosong"),
  foto_pengusul: yup.mixed(),
  kewarganegaraan: yup.string().required("Kewarganegaraan tidak boleh kosong"),
  alasan_pindah: yup.string().required("Alasan pindah tidak boleh kosong"),
});

const keteranganKeluarUpdateValidation = yup.object({
  nomor_surat: yup.string().required("Nomor Surat tidak boleh kosong"),
  pengikut: yup
    .number()
    .typeError("Input harus berupa angka")
    .required("Pengikut tidak boleh kosong"),
  alamat_pindah: yup.string().required("Alamat Pindah tidak boleh kosong"),
  tanggal_ktp: yup.string().required("Tanggal ktp tidak boleh kosong"),
  meninggalkan_desa_pada: yup
    .string()
    .required("Tanggal meninggalkan desa tidak boleh kosong"),
  foto_pengusul: yup.mixed(),
  alasan_pindah: yup.string().required("Alasan pindah tidak boleh kosong"),
});

export {
  mutasiKeluarInsertValidation,
  keteranganKeluarInsertValidation,
  keteranganKeluarUpdateValidation,
};
