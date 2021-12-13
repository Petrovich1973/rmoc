import * as React from "react"
// import MenuIcon from '@mui/icons-material/Menu'
// import SearchIcon from '@mui/icons-material/Search'
// import FilterAltIcon from '@mui/icons-material/FilterAlt'
import {Menu, Search, Filter} from '@material-ui/icons'
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

export default function TasksHeader() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Menu/>
            <div className={classes.sep}/>
            <Typography className={classes.title} variant="h6" component="h6" color={'black'}>
                Заказанные отчеты
            </Typography>
            <IconButton>
                <Search/>
            </IconButton>
            <IconButton>
                <Filter/>
            </IconButton>
        </div>
    )
}
