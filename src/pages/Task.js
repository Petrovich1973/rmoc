import * as React from "react"
import TaskHeader from "../components/TaskHeader"
import ReportTable from "../components/ReportTable"
import ReportNavigation from "../components/ReportNavigation"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "red"
    }
}))

export default function Task() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TaskHeader/>
            <ReportTable/>
            <ReportNavigation/>
        </div>
    )
}
