import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const FILE_SIZE = 10 * 1048576;

export const arsipKematianInsertValidation = yup.object({
  arsip_kematian: yup
    .mixed()
    .required("A file is Required")
    .test(
      "fileSize",
      "Maximum size is 10mb",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format, We just Support : jpg/jpeg/png",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
