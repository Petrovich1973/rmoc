import * as React from "react"
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
// import LogoutIcon from '@mui/icons-material/Logout'
import {makeStyles} from '@mui/styles'
import {IconButton, Typography} from "@mui/material"
import {OutdoorGrill, InsertEmoticon} from '@material-ui/icons'


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

export default function RmocUser({userName = 'Алексей Щуренков'}) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <InsertEmoticon sx={{fontSize: 48, color: '#81abf3'}}/>
            <div className={classes.group}>
                <Typography variant="h6" component="h6" color={'black'}>{userName}</Typography>
                <Typography variant="subtitle2">Специалист</Typography>
            </div>
            <IconButton>
                <OutdoorGrill/>
            </IconButton>
        </div>
    )
}
