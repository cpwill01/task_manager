import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  paper: {
    borderRadius: "10px !important",
    width: "100%",
  },
  topBar: {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
  },
  barTitle: {
    flex: "1 1 100%",
    fontSize: "1.2rem",
    component: "div",
    align: "left",
  },
}));
