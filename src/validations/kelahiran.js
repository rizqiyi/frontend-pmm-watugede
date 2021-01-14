import * as yup from "yup";

export const kelahiranInsertValidation = yup.object({
  nik: yup.string(),
  nama: yup.string(),
  tanggal_lahir: yup.string(),
  tempat_lahir: yup.string(),
  hubungan_pelapor: yup.string(),
  agama: yup.string(),
  jenis_kelamin: yup.string(),
  nomor_surat_kelahiran: yup.string(),
  jam_lahir: yup.string(),
  hari_kelahiran: yup.string(),
  nik_ayah: yup.string().required("NIK Ayah tidak boleh kosong"),
  nik_ibu: yup.string().required("NIK Ibu tidak boleh kosong"),
});
