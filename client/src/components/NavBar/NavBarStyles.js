import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    height: "124px",
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    background: "linear-gradient(45deg, #7ec9ec 50%, #4b76ec 70% 100%)",
  },
  innerBar: {
    justifyContent: "space-between",
  },
  profileContainer: {
    alignItems: "right",
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  avatarIcon: {
    marginRight: "1rem",
  },
  userName: {
    marginRight: "2rem !important",
    display: "flex",
    alignItems: "center",
  },
  pageName: {
    flexGrow: 1,
    color: "white",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
