import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  topBar: {
    pl: { sm: 2 },
    pr: { xs: 1, sm: 1 },
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));
