import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
const List = () => {
  const rows = [
    {
      id: 1,
      
      
      date:"Project 1",
      
      
    },
    {
      id: 2,
      
      
      date:"Project 2",
      
      
    },
    {
      id: 3,
     
      
      date:"Project 3",
     
     
    },
    {
      id: 4,
     
      
      date:"Project 4",
      
      
    },
    {
      id: 5,
      
      
      date:"Project 5",
      
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">No.</TableCell>
            
            
            <TableCell className="tableCell">Project</TableCell>
            
            <TableCell className="tableCell">Update Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              {/* <TableCell className="tableCell">{row.customer}</TableCell> */}
              <TableCell className="tableCell">{row.date}</TableCell>
              {/* <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell> */}
              <TableCell className="tableCell">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">Update</div>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
