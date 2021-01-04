import { baseURL } from "../utilities/baseURL";

export const photoPath = (imagePath) => {
  if (imagePath === "//" || imagePath === undefined || imagePath === null) {
    return imagePath;
  }
  const splitPath = imagePath.split("\\");
  const path = splitPath[splitPath.length - 1];

  const fixPhotoPath = `${baseURL}${path}`;

  return fixPhotoPath;
};
