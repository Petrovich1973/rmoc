import * as React from "react"
// import {HOST} from "../constants"
import TaskHeader from "../components/TaskHeader"
import ReportTable from "../components/ReportTable"
import {makeStyles} from '@mui/styles'
import ReportFilter from "../components/ReportFilter"

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

    const classes = useStyles()

    const handleFilterVisible = () => {
        console.log(!filterIsOpen)
        setFilterIsOpen(!filterIsOpen)
    }

    return (
        <div className={classes.root}>
            <TaskHeader onFilter={handleFilterVisible}/>
            {filterIsOpen && <ReportFilter/>}
            <ReportTable/>
            {/*<ReportNavigation/>*/}
        </div>
    )
}
