import * as React from "react"
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        flexShrink: 0,
        padding: '16px',
        margin: '16px 16px 0',
        borderRadius: '16px',
        backgroundColor: 'white'
    }
}))

export default function ReportFilter () {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>ghfgfhghgf</div>
            <div>ghfgfhghgf</div>
            <div>ghfgfhghgf</div>
        </div>
    )
}
