import * as React from "react"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
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
    }
}))

export default function TasksHeader({onFilter = () => console.log('onFilter')}) {

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
                ВКЛ-14 Счета по которым не совершались операции более 2-х лет
            </Typography>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <IconButton onClick={onFilter}>
                <FilterAltIcon/>
            </IconButton>
        </div>
    )
}
