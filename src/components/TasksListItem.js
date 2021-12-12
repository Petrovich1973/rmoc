import * as React from "react"
import { makeStyles } from '@mui/styles'
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import {NavLink} from "react-router-dom"
import {CalendarToday} from "@mui/icons-material"
import {Chip, Typography} from "@mui/material"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        fontSize: '80%',
        minHeight: 100,
        padding: 16,
        backgroundColor: 'white',
        textDecoration: "none",
        lineHeight: '210%',
        color: 'rgba(38, 38, 38, 0.7)',
        borderRadius: 8,
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0px 1px 2px rgba(38, 38, 38, 0.04), 0px 2px 4px rgba(38, 38, 38, 0.16)',
        '&:hover, &:active': {
            backgroundColor: '#DEE9FF'
        }
    },
    title: {
        fontSize: '120%',
        fontWeight: '600',
        color: 'black',
        maxWidth: 700,
        whiteSpace: 'nowrap',
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    header: {
        display: 'flex',
        alignItems: "center"
    },
    unit: {

    },
    data: {
        paddingLeft: 20,
        fontSize: '80%'
    },
    footer: {
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        paddingTop: 10,
        marginTop: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    calendar: {
        display: 'flex',
        alignItems: "center",
        '& > * + *': {
            display: 'block',
            paddingTop: '4%',
            paddingLeft: 6
        }
    },
    status: {
        backgroundColor: '#F4E3FF'
    }
}))

export default function TasksListItem({item = {}}) {
    const {
        link = '/task/1212',
        title = 'ВКЛ-14 Счета по которым не совершались операции более 2-х лет'
    } = item
    const classes = useStyles()

    return (
        <NavLink to={link} className={classes.root}>
            <div className={classes.title}>{title}</div>
            <div className={classes.header}>
                <div className={classes.unit}>38 Тб / 3454 ОСБ / 0034 ВСП</div>
                <div className={classes.data}>Filter</div>
            </div>
            <div className={classes.footer}>
                <div className={classes.calendar}>
                    <CalendarToday/>
                    <span>12.12.2021</span>
                </div>
                <Chip label="Формируется" className={classes.status} sx={{ backgroundColor: '#F4E3FF' }} />
            </div>
        </NavLink>
    )
}
