import * as React from "react"
import {Link} from "react-router-dom"
// import SearchIcon from '@mui/icons-material/Search'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
// import InfoIcon from '@mui/icons-material/Info'
import DeleteIcon from '@mui/icons-material/Delete'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import {Button, IconButton, Typography} from "@mui/material"
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        height: 60,
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: '0 16px'
    },
    sep: {
        width: 10
    },
    title: {
        flexGrow: 1
    },
    nbsp: {
        width: 100
    },
    btn: {
        fontSize: '80% !important',
        textTransform: "initial"
    }
}))

export default function TasksHeader({title = '', onFilter = () => console.log('onFilter')}) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Link to={'/tasks'}>
                <IconButton>
                    <ArrowBackIosIcon/>
                </IconButton>
            </Link>
            <div className={classes.sep}/>
            <Typography
                className={classes.title}
                sx={{lineHeight: 1}}
                variant="h6"
                component="h6"
                color={'black'}>
                {title}
            </Typography>
            <Button size="small" className={classes.btn} startIcon={<FileDownloadIcon />}>
                скачать
            </Button>
            <div className={classes.nbsp}/>
            <IconButton onClick={onFilter}>
                <FilterAltIcon/>
            </IconButton>
        </div>
    )
}
