import * as React from "react"
import TaskHeader from "../components/TaskHeader"
import ReportTable from "../components/ReportTable"
import {makeStyles} from '@mui/styles'
import ReportFilter from "../components/ReportFilter"
import axios from "axios"
import {HOST} from "../constants"
import {useParams} from "react-router-dom"
import {createTitle} from '../helpers'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'hidden'
    }
}))

export default function Task() {
    const [filterIsOpen, setFilterIsOpen] = React.useState(false)
    const [load, setLoad] = React.useState(true)
    const [task, setTask] = React.useState({})

    const {reportId = ''} = task || {}

    const classes = useStyles()
    const {id = 0} = useParams()

    React.useEffect(() => {
        const getTask = () => {
            setLoad(true)
            axios(`${HOST}/task/${id}`)
                .then(res => setTask(res.data))
                .catch(err => alert(err))
                .finally(() => setLoad(false))
        }
        getTask()
    }, [id])

    const handleFilterVisible = () => {
        console.log(!filterIsOpen)
        setFilterIsOpen(!filterIsOpen)
    }

    if(load) return (
        <div className={classes.root}>
            <TaskHeader title={'waiting...'}/>
        </div>
    )

    return (
        <div className={classes.root}>
            <TaskHeader title={createTitle(reportId)} onFilter={handleFilterVisible}/>
            {filterIsOpen && <ReportFilter/>}
            <ReportTable/>
            {/*<ReportNavigation/>*/}
        </div>
    )
}
