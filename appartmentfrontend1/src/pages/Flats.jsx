import "./flat.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

export const Flat = () => {
  const [resident, setResident] = useState([]);
  const [type, setType] = useState("");
  const [pages, setPages] = useState("");
  const [page, setPage] = useState("");

  const handleType = (event) => {
    setType(event.target.value);
  };

  function handleSort(value) {
    if (value == 1) {
      resident.sort(function (a, b) {
        return a.flatNumber - b.flatNumber;
      });
    } else {
      resident.sort(function (a, b) {
        return b.flatNumber - a.flatNumber;
      });
    }
    setResident([...resident]);
    console.log(resident);
  }

  function handlePagination(event) {
    console.log(event.target.innerText);
    setPage(event.target.innerText);
  }
  useEffect(() => {
    axios
      .get(`https://flat-management.herokuapp.com/flat?page=${page}`)
      .then((res) => {
        console.log(res.data.totalPages);
        setResident([...res.data.users]);
        setPages(res.data.totalPages);
      });
  }, [page]);
  return (
    <div>
      <div id="filterbuttons">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={type}
              label="Type"
              onChange={handleType}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"Owner"}>Owner</MenuItem>
              <MenuItem value={"Tenant"}>Tenant</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            onClick={() => {
              handleSort(1);
            }}
            variant="contained"
          >
            Sort flat by ASC{" "}
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              handleSort(-1);
            }}
            variant="contained"
          >
            Sort flat by DESC{" "}
          </Button>
        </div>
      </div>
      <div id="main">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">S.No</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Block</StyledTableCell>
                <StyledTableCell align="center">Flat No</StyledTableCell>
                <StyledTableCell align="center">Flat</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resident.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to={`/flat/${row._id}`}>{row.name}</Link>{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.flatblock}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.flatNumber}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to={`/flat/${row._id}`}>
                      <img id="flatimg" src={row.flatImage} alt="" />
                    </Link>
                    {/* {row.protein} */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div id="pagination">
        <Stack spacing={2}>
          <Pagination
            onChange={handlePagination}
            count={pages}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};
