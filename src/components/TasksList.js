import * as React from "react"
import { makeStyles } from '@mui/styles'
import moment from 'moment'
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
            {list
                .sort((a, b) => moment.utc(a.taskCreationDate).diff(moment.utc(b.taskCreationDate)))
                .reverse()
                .map((item, i) => <TasksListItem key={i} item={item}/>)}
        </div>
    )
}
