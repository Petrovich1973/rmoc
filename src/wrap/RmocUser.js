import * as React from "react"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import {makeStyles} from '@mui/styles'
import {IconButton, Typography} from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'


const useStyles = makeStyles((theme) => ({
    root: {
        height: 60,
        padding: '0 10px',
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    group: {
        flexGrow: 1,
        paddingLeft: 8,
        display: 'flex',
        flexDirection: 'column'
    }
}))

export default function RmocUser({userName = 'Денис'}) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <InsertEmoticonIcon sx={{fontSize: 48, color: '#81abf3'}}/>
            <div className={classes.group}>
                <Typography variant="h6" component="h6" color={'black'}>{userName}</Typography>
                <Typography variant="subtitle2">Специалист</Typography>
            </div>
            <IconButton>
                <LogoutIcon/>
            </IconButton>
        </div>
    )
}
