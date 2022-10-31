import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Forecast = (props) => {
  const { data } = props;

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            {
              data.map((day) => (
                <TableCell align="center" className="no-wrap">
                  {day.day}
                  <br />
                  {day.date}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Description</TableCell>
              {
                data.map((day) => (
                  <TableCell align="center" className="no-wrap" key={day.date}>
                    {day.description}
                  </TableCell>
                ))
              }
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">High | Low</TableCell>
              {
                data.map((day) => (
                  <TableCell align="center" className="no-wrap" key={day.date}>
                    {`${day.high}º | ${day.low}º`}
                  </TableCell>
                ))
              }
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Precipitation</TableCell>
              {
                data.map((day) => (
                  <TableCell align="center" className="no-wrap" key={day.date}>
                    {`${parseInt(day.precipitation_chance * 100)}%`}
                  </TableCell>
                ))
              }
            </TableRow>                  
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Forecast;
