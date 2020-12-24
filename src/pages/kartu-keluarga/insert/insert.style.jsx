import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  largeTextField: {
    width: "150%",
    // margin: "10px",
    margin: "28px 0px 0px 0px",
  },
  lastField: {
    width: "130%",
    // margin: "10px",
    margin: "28px 0px 0px 0px",
  },
  paper: {
    width: "100%",
  },
  alamatTextField: {
    width: "280%",
    // height: "100%",
    margin: "28px 0px 0px 0px",
  },
  resetText: {
    color: theme.palette.grey.main,
    fontWeight: 400,
    wordSpacing: "1px",
    cursor: "pointer",
    textDecoration: "none",
  },
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(16),
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
    // "&:hover": {
    //   backgroundColor: "white",
    // },
  },
  constText: {
    color: theme.palette.grey.main,
    fontSize: 12,
    fontWeight: 550,
    wordSpacing: "1px",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  controlButton: {
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
}));
