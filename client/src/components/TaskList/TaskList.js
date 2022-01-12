import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

import useCommonStyles from "../styles";

function descendingComparator(a, b, orderBy) {
  if (orderBy === "priority") {
    if (
      (b[orderBy] === "Low" &&
        (a[orderBy] === "High" || a[orderBy] === "Medium")) ||
      (b[orderBy] === "Medium" && a[orderBy] === "High")
    ) {
      return -1;
    }
    if (
      (b[orderBy] === "High" &&
        (a[orderBy] === "Low" || a[orderBy] === "Medium")) ||
      (b[orderBy] === "Medium" && a[orderBy] === "Low")
    ) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Task",
  },
  {
    id: "team",
    numeric: false,
    disablePadding: false,
    label: "Team",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Created by",
  },
  {
    id: "createdAt",
    numeric: false,
    disablePadding: false,
    label: "Date created (yyyy-mm-dd)",
  },
  {
    id: "priority",
    numeric: false,
    disablePadding: false,
    label: "Priority",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const EnhancedTableToolbar = () => {
  const commonClasses = useCommonStyles();

  return (
    <Toolbar className={commonClasses.topBar}>
      <Typography className={commonClasses.barTitle} id="tableTitle">
        Task List
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default function TaskList({ isCompleted, setSelected }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("createdAt");
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 8;
  const rows = useSelector((state) =>
    state.tasksReducer.filter((task) => task.isCompleted === isCompleted)
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, row) => {
    setSelected(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const commonClasses = useCommonStyles();

  return (
    <Box sx={{ width: "100%" }}>
      <Paper className={commonClasses.paper} elevation={2}>
        <EnhancedTableToolbar showCompleted={isCompleted} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      tabIndex={-1}
                      key={row._id}
                    >
                      <TableCell component="th" scope="row" padding="normal">
                        {row.title}
                      </TableCell>
                      <TableCell align="left">{row.team}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">
                        {row.createdAt.slice(0, 10)}
                      </TableCell>
                      <TableCell align="left">{row.priority}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
}
