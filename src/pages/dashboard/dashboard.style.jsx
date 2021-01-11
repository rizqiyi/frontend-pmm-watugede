import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  greetingCard: {
    marginTop: "1.8rem",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(to right, #329DF7, #3DDEED)",
    boxShadow:
      "0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 10,
  },
  pendudukShape: {
    width: "27%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 250,
    color: "#fff",
    backgroundColor: "#329DF7",
    cursor: "pointer",
    position: "relative",
    top: 0,
    boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0), 0 3px 20px 0 rgba(0, 0, 0, 0.09)",
    "&:hover": {
      backgroundColor: "#078bf8",
      position: "relative",
      top: "-2px",
      transition:
        "background-color .5s ease-in-out, top .2s linear, box-shadow .2s ease",
      boxShadow:
        "0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.1)",
    },
  },
  pendudukMasukShape: {
    width: "27%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 250,
    color: "#fff",
    backgroundColor: "#6AB4F6",
    cursor: "pointer",
    position: "relative",
    top: 0,
    boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0), 0 3px 20px 0 rgba(0, 0, 0, 0.09)",
    "&:hover": {
      backgroundColor: "rgb(74, 164, 243)",
      position: "relative",
      top: "-2px",
      transition:
        "background-color .5s ease-in-out, top .2s linear, box-shadow .2s ease",
      boxShadow:
        "0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.1)",
    },
  },
  pendudukKeluarShape: {
    width: "27%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 250,
    color: "#fff",
    backgroundColor: "#A4D4FF",
    cursor: "pointer",
    position: "relative",
    top: 0,
    boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0), 0 3px 20px 0 rgba(0, 0, 0, 0.09)",
    "&:hover": {
      backgroundColor: "#7ebcf3",
      position: "relative",
      top: "-2px",
      transition:
        "background-color .5s ease-in-out, top .2s linear, box-shadow .2s ease",
      boxShadow:
        "0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.1)",
    },
  },
  values: {
    fontWeight: "600",
    fontSize: 20,
  },
}));
