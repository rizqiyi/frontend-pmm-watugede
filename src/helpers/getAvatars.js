export const photoPath = (imagePath) => {
  if (imagePath === "//" || imagePath === undefined || imagePath === null) {
    return imagePath;
  }
  const splitPath = imagePath.split("\\");
  const path = splitPath[splitPath.length - 1];

  const fixPhotoPath = `${process.env.REACT_APP_BASE_URI}/${path}`;

  return fixPhotoPath;
};
