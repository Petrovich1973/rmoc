import * as React from "react"
import {makeStyles} from '@mui/styles'
import CreateTaskHeader from "../components/CreateTaskHeader"
import CreateTaskWrap from "../components/CreateTaskWrap"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'hidden'
    }
}))

export default function TaskCreate() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CreateTaskHeader/>
            <CreateTaskWrap/>
        </div>
    )
}
