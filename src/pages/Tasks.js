import * as React from "react"
import {makeStyles} from '@mui/styles'
import {LinearProgress} from "@mui/material"
import TasksList from "../components/TasksList"
import TasksHeader from "../components/TasksHeader"
import axios from "axios"
import {HOST} from "../constants"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(255, 255, 255, .6)',
        minWidth: 500,
        borderRight: '1px solid #ccc'
    }
}))

export default function Tasks() {
    const [list, setList] = React.useState([])
    const [load, setLoad] = React.useState(false)

    const classes = useStyles()

    React.useEffect(() => {
        setLoad(true)
        axios(`${HOST}/task`)
            .then(res => setList(res.data))
            .catch(err => alert(err))
            .finally(() => setLoad(false))
    }, [])

    return (
        <div className={classes.root}>
            <TasksHeader/>
            {load && !list.length ? <LinearProgress color="inherit"/> : <TasksList list={list}/>}
        </div>
    )
}
