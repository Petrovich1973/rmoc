import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import axios from "axios"
import {HOST} from "../constants"
import {LinearProgress} from "@mui/material"
import moment from 'moment'

const dateformat = 'DD.MM.YYYY'
// const dateTimeformat = 'DD.MM.YYYY hh:mm:ss'
const col = [
    {id: 'idMinor', label: 'idMinor', align: 'left', minWidth: 120, format: (value) => value},
    {id: 'idMajor', label: 'idMajor', align: 'left', minWidth: 120, format: (value) => value},
    {id: 'opday', label: 'opday', align: 'left', minWidth: 120, format: (value) => moment(value).format(dateformat)},
    {
        id: 'optransday',
        label: 'optransday',
        align: 'left',
        minWidth: 120,
        format: (value) => moment(value).format(dateformat)
    },
    {id: 'office', label: 'office', align: 'left', minWidth: 70, format: (value) => value},
    {id: 'branchno', label: 'branchno', align: 'left', minWidth: 70, format: (value) => value},
    {id: 'idMega', label: 'idMega', align: 'left', minWidth: 70, format: (value) => value},
    {id: 'balance', label: 'balance', align: 'left', minWidth: 100, format: (value) => value},
    {id: 'state', label: 'state', align: 'left', minWidth: 60, format: (value) => value},
    {id: 'opno', label: 'opno', align: 'left', minWidth: 50, format: (value) => value},
    {
        id: 'expirationday',
        label: 'expirationday',
        align: 'left',
        minWidth: 120,
        format: (value) => moment(value).format(dateformat)
    },
    {id: 'opkind', label: 'opkind', align: 'left', minWidth: 50, format: (value) => value},
    {
        id: 'prolongday',
        label: 'prolongday',
        align: 'left',
        minWidth: 120,
        format: (value) => moment(value).format(dateformat)
    }
]

export default function ReportTable() {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(15)
    const [rows, setRows] = React.useState([])
    const [lLoad, setLoad] = React.useState(false)

    React.useEffect(() => {
        setLoad(true)
        axios(`${HOST}/report`)
            .then(res => setRows([...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data]))
            .catch(err => alert(err))
            .finally(() => setLoad(false))
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    if (lLoad && !rows.length) return <LinearProgress color="inherit"/>

    return (
        <Paper sx={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            backgroundColor: 'transparent',
            padding: '16px'
        }}>
            <TableContainer sx={{
                flexGrow: 1,
                maxWidth: '100%',
                overflow: "auto",
                borderRadius: '16px 16px 0 0',
                backgroundColor: 'white'
            }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {col.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, i) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                        {col.map((column) => {
                                            const value = row[column.id]
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format(value)}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{
                    flexShrink: 0,
                    borderRadius: '0 0 16px 16px',
                    backgroundColor: 'white'
                }}
                rowsPerPageOptions={[10, 15, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}


// export default function ReportTable() {
//     return (
//         <div>
//             ReportTable
//         </div>
//     )
// }
