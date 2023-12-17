import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { TablePagination } from "@mui/material";
import NavBar from './../Components/NavBar';
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import SearchBar from "material-ui-search-bar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#054470",
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: "18px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: `1px solid ${theme.palette.divider}`,

  },
}));

// function createData(name, id, status, views) {
//   return { name, id, status, views };
// }

// const rows = [
//   createData("Customer 1", "12345", "Approved"),
//   createData("Customer 2", "67890", "Pending"),
//   createData("Customer 3", "54321", "Incomplete"),
//   createData("Customer 4", "98765", "Rejected"),
//   createData("Customer 5", "11111", "Approved"),
//   createData("Customer 6", "11431", "Rejected"),
//   createData("Customer 7", "54646", "Pending"),
//   createData("Customer 8", "64566", "Incomplete"),
//   createData("Customer 9", "23424", "Approved"),
// ];
async function fetchCustomerData() {
  try {
    const response = await fetch('http://localhost:4000/dashboard');
    if (response.ok) {

      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching customer data: ', error);
    return [];
  }
}

export default function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCustomerData();
      setCustomers(data);
      setOriginalData(data); // Save original data

    }
    fetchData();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();

  const handleViewForm = (id) => {
    console.log("View Form for ID:", id);
    navigate(`/details/${id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, customers.length - page * rowsPerPage);

  const slicedRows = customers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const requestSearch = (searchedVal) => {
    const filteredRows = originalData.filter((row) => {
      return (
        row.customerName.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.enquiry.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.contact.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setCustomers(filteredRows);
  };

  const cancelSearch = () => {
    setCustomers(originalData); // Reset to original data
    fetchData(); // Restore original data

  };

  return (
    <div>
      <NavBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          justifyContent: "center",
          mt: "5rem",
          position: "relative"

        }}
      >
        <Paper>
          <SearchBar

            value={''}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{ margin: "20px" }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Customer Name</StyledTableCell>
                  <StyledTableCell align="center">Customer ID</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">Details</StyledTableCell>
                  <StyledTableCell align="center">Download PDF</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {slicedRows.map((customer) => (
                  <StyledTableRow key={customer.customerName}>
                    <StyledTableCell component="th" scope="row">
                      {customer.customerName}
                    </StyledTableCell>
                    <StyledTableCell align="center">{customer.enquiry}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color={

                          customer.status === "Success"
                            ? "success"
                            : customer.status === "Rejected"
                              ? "error"
                              : "primary"
                        }
                        style={{ minWidth: "8rem" }}
                      >
                        {customer.status}
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        style={{ background: "#3E5C72D9", minWidth: "100px" }}
                        onClick={() => handleViewForm(customer.enquiry)}
                        disabled={customer.status === "Rejected"}
                      >
                        View Form
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        style={{ background: "#3E5C72D9", minWidth: "100px" }}
                        onClick={() => handleViewForm(customer.enquiry)}
                        disabled={customer.status !== "Success"}
                      >
                        Download
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <StyledTableCell colSpan={4} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count}`
          }
          backIconButtonText="Previous Page"
          nextIconButtonText="Next Page"
        />
      </Container>
    </div>
  );
}