import * as React from "react"
import RmocSide from "./RmocSide"
import RmocHeader from "./RmocHeader"
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    header: {
        flexGrow: '1'
    }
}))

export default function Wrap(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <RmocSide/>
            {props.children}
            <RmocHeader/>
        </div>
    )
}
