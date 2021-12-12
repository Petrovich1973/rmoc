import * as React from "react"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import {IconButton} from "@mui/material"
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignSelf: 'flex-start',
        backgroundColor: "white",
        height: 60,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingRight: 10
    }
}))

export default function RmocHeader() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <IconButton>
                <HelpOutlineIcon/>
            </IconButton>
        </div>
    )
}
