import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  questionText: {
    fontSize: 16,
    fontWeight: 500,
  },
  consText: {
    fontSize: 15,
    fontWeight: 350,
    textAlign: "center",
    maxWidth: 450,
    marginBottom: 2,
  },
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(16),
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
  },
  textButton: {
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px ",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    marginBottom: 4,
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
  deleteButton: {
    background: theme.palette.warning.main,
    color: "#fff",
    width: theme.spacing(15),
    padding: "12px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.warning.main,
    },
  },
  primaryButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: theme.spacing(15),
    padding: "12px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
