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

export default function TasksList({list = []}) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {list.map((item, i) => <TasksListItem key={i} item={item}/>)}
        </div>
    )
}
