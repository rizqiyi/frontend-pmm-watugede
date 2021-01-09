import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10000000,
    background: "rgba(0, 0, 0, 0.5)",
  },
  imageModal: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "85%",
    margin: "90px auto",
    zIndex: 10000000,
    boxShadow: "3px 5px 7px rgba(0, 0, 0, 0.5)",
    border: "3px solid white",
  },
}));
