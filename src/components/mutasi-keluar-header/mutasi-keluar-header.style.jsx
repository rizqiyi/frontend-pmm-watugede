import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  textPengusul: {
    fontWeight: 400,
  },
  paperPengikut: {
    width: "auto",
  },
  textDetail: {
    fontSize: 14,
    fontWeight: 450,
    cursor: "pointer",
  },
  iconButton: {
    width: "100px",
    height: "100px",
    marginBottom: "5px",
  },
  addIcon: {
    width: "60px",
    height: "60px",
  },
  textIsNull: {
    color: theme.palette.primary.main,
    opacity: "0.6",
  },
}));
