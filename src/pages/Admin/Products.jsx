import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Loading from "./loading";
import Button from "@mui/material/Button";
import { axiosInstance } from "./axiosInstance";

// import toast, { Toaster } from "react-hot-toast";


function Products({ data, getData }) {

  function createData(
    id,
    name,
    unitsInStock,
    quantityPerUnit,

  ) {
    return { id, name, unitsInStock, quantityPerUnit };
  }

  const rows = data?.map((d) => {
    return createData(
      d.id,
      d.name,
      d.unitsInStock,
      d.quantityPerUnit,
    );
  });


  const handleDelete = async (id) => {
    await axiosInstance.delete(`products/${id}`);

    getData();
  };

  return (
    <TableContainer component={Paper}>

      {/* <Toaster /> */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">unitsInStock</TableCell>
            <TableCell align="left">quantityPerUnit</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.unitsInStock}</TableCell>
              <TableCell align="left">{row.quantityPerUnit}</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                {" "}
                <Button
                  onClick={(id) => handleDelete(row.id)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Products;