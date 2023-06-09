import {Button, CircularProgress, colors, SxProps, TablePagination} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import {useEffect} from "react";
import {getUsersByPage} from "../fetchData";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

interface Column{
  label: string,
  id: number
}

export const UsersTable = () => {

  let navigate = useNavigate();
  const [page, setPage] = React.useState<number>(0);
  const [users, setUsers] = React.useState<any>(null);
  const [columns, setColumns] = React.useState<any>(null);
  const [rows, setRows] = React.useState<any>(null);
  const [total, setTotal] = React.useState<any>(null);
  const [perPage, setPerPage] = React.useState<any>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const goTo = (path: string): void => {
    navigate(path);
  };

  useEffect(()=>{
    if(page != null){
      console.log('get users by page', page+1)
      getUsersByPage(page+1).then((data) => {
        setUsers(data.data)
        setTotal(data.data.total)
        setPerPage(data.data.per_page)
      })
    }
  }, [page])

  useEffect(()=>{
        if (users){
          setRows(users.data)
          console.log(rows)
        }
  }, [users])


  useEffect(()=>{
    let columnsTemp = new Array<Column>;
    if(users){
      let id = 1;
      for (let key in users.data[0]) {
        columnsTemp.push({label: key, id: id})
        id++;
      }
    }
    setColumns(columnsTemp)
  }, [users])

  const tableContainerSx: SxProps = {
    width: "max-content",
    maxHeight: 550,
    border: "1px solid rgba(128,128,128,0.4)",
    marginLeft: "auto",
    marginRight: "auto"
  }

  return (
    <Paper sx={tableContainerSx} >
      <TableContainer sx={tableContainerSx}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              <TableCell />
              {columns? columns.map((column:any) => (
                <TableCell key={column.id} align="left">
                  {column.label}
                </TableCell>
              )) : <></>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows? rows.map((row: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={0}>
                <TableCell>
                  <Button onClick={()=>{goTo(`users/${row.id}`)}} style={{textDecoration:"none"}}>Перейти</Button>
                </TableCell>
                  {columns? columns.map((column:any) => {
                    const value = (row as any)[column.label];
                    if (column.label == 'avatar'){
                      return (
                        <TableCell key={column.id} align="left">
                          <img src={value} alt='Avatar'/>
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align="left">
                          {value}
                        </TableCell>
                      );
                    }
                  }): <></>}
                </TableRow>
              );
            }):
              <TableCell>
                <CircularProgress/>
              </TableCell>
            }
          </TableBody>
        </Table>
      </TableContainer>
      {total && perPage?
      <TablePagination
        component="div"
        count={total}
        rowsPerPage={perPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[0]}
      />: <></>}
    </Paper>
  );
};
