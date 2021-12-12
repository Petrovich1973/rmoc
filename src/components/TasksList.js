import * as React from "react"
import { makeStyles } from '@mui/styles'
import TasksListItem from "./TasksListItem"


const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        padding: 16,
        '& > * + *': {
            marginTop: 10
        }
    }
}))

export default function TasksList(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {[1,2,3,4,5].map((item, i) => <TasksListItem key={i} item/>)}
        </div>
    )
}
