import * as React from "react"
import {Link} from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import {IconButton, Typography} from "@mui/material"
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
        fontSize: '90% !important',
        textTransform: "inherit !important"
    }
}))

export default function CreateTaskHeader() {

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
                Создание нового отчета
            </Typography>
        </div>
    )
}
