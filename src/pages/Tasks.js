import * as React from "react"
import { makeStyles } from '@mui/styles'
import TasksList from "../components/TasksList"
import TasksHeader from "../components/TasksHeader"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(255, 255, 255, .6)',
        minWidth: 500,
        borderRight: '1px solid #ccc'
    }
}))

export default function Tasks() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TasksHeader/>
            <TasksList/>
        </div>
    )
}
