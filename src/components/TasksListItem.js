import * as React from "react"
import { makeStyles } from '@mui/styles'
import {NavLink} from "react-router-dom"
import {CalendarToday} from "@mui/icons-material"
import {Chip} from "@mui/material"
import moment from 'moment'
import {createTitle} from'../helpers/reportName'

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
        lineHeight: '1.2',
        color: 'black',
        maxWidth: 600,
        // whiteSpace: 'nowrap',
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
        taskId = null,
        reportId = 'test',
        // title = 'ВКЛ-14 Счета по которым не совершались операции более 2-х лет',
        taskCreationDate = "2021-12-13T16:32:12.919",
        tb = '28',
        osb = '',
        vsp = '',
        taskStatus = 0
    } = item

    const unit = ['tb', 'osb', 'vsp']

    const createUnit = un => {
        switch (un) {
            case 'tb':
                if(!tb) return null
                return (`${tb} Тб`)
            case 'osb':
                if(!osb) return null
                return (`${osb} ОСБ`)
            case 'vsp':
                if(!vsp) return null
                return (`${vsp} ВСП`)
            default:
                return (`Не существует`)
        }
    }

    const createStatus = st => {
        switch (st) {
            case 0:
                return (`Ожидает`)
            case 1:
                return (`Не знаю 1`)
            case 2:
                return (`Формируется`)
            case 3:
                return (`Ошибка`)
            case 4:
                return (`Готово`)
            case 5:
                return (`Не знаю 5`)
            case 6:
                return (`Не знаю 6`)
            default:
                return (`Не известно`)
        }
    }

    const createStatusColor = st => {
        switch (st) {
            case 0:
                return (`transparent`)
            case 1:
                return (`Не знаю`)
            case 2:
                return (`#F4E3FF`)
            case 3:
                return (`#ffaf87`)
            case 4:
                return (`#E0FFE0`)
            case 5:
                return (`transparent`)
            case 6:
                return (`transparent`)
            default:
                return (`transparent`)
        }
    }

    const classes = useStyles()

    return (
        <NavLink to={`/tasks/${taskId}`} className={classes.root}>
            <div className={classes.title}>{createTitle(reportId)}</div>
            <div className={classes.header}>
                <div className={classes.unit}>{unit.map(m => (createUnit(m))).filter(f => f).join(' / ')}</div>
                <div className={classes.data}>Filter</div>
            </div>
            <div className={classes.footer}>
                <div className={classes.calendar}>
                    <CalendarToday/>
                    <span>{moment(taskCreationDate).format('DD.MM.YYYY HH:mm:ss')}</span>
                </div>
                <Chip
                    label={createStatus(taskStatus)}
                    className={classes.status}
                    sx={{ backgroundColor: createStatusColor(taskStatus) }} />
            </div>
        </NavLink>
    )
}
