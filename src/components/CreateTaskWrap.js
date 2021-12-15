import * as React from 'react'
import {Paper, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Button} from "@mui/material"
import {makeStyles} from "@mui/styles"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CircleIcon from '@mui/icons-material/Circle'
import {createTitle} from "../helpers"
import moment from 'moment'
import axios from "axios"
import {HOST} from "../constants"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
        maxHeight: '100%',
        overflow: "auto",
        borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, .6)',
        padding: '32px'
    },
    textField: {},
    radioGroupLabel: {},
    radioLabel: {
        color: 'inherit',
        '&:focus': {
            color: 'inherit'
        }
    },
    step: {
        borderRadius: '16px',
        backgroundColor: 'white',
        padding: '32px',
        marginBottom: 32
    },
    stepTitle: {
        display: "flex",
        alignItems: "center"
    },
    stepContent: {
        padding: '32px 0 0 41px'
    },
    sep: {
        width: 16
    },
    footer: {
        margin: 0,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
}))

const optionsListStorage = [
    {value: '1', label: 'Один день'},
    {value: '2', label: 'Два дня'},
    {value: '5', label: 'Пять дней'}
]

const stepStatusIcon = status => {
    switch (status) {
        case (0):
            return <CircleIcon sx={{color: '#54aa64'}}/>
        case (1):
            return <CircleIcon sx={{color: '#54aa64'}}/>
        case (2):
            return <CheckCircleOutlineIcon sx={{color: '#54aa64'}}/>
        default:
            return <FavoriteBorderIcon/>
    }
}

const StepReport = () => {
    const classes = useStyles()
    const title = createTitle('test')
    return (
        <div className={classes.step}>
            <div className={classes.stepTitle}>
                {stepStatusIcon(2)}
                <div className={classes.sep}/>
                <span>{title}</span>
            </div>
        </div>
    )
}
const StepUnit = () => {
    const classes = useStyles()
    return (
        <div className={classes.step}>
            <div className={classes.stepTitle}>
                {stepStatusIcon(2)}
                <div className={classes.sep}/>
                <span>38 Тб / все ОСБ / все ВСП</span>
            </div>
        </div>
    )
}
const StepConfig = ({form = {}, onChangeFormConfigure}) => {

    const classes = useStyles()

    return (
        <div className={classes.step}>
            <div className={classes.stepTitle}>
                {stepStatusIcon(0)}
                <div className={classes.sep}/>
                <span>Конфигурация отчета</span>
            </div>
            <div className={classes.stepContent}>
                <FormControl component="fieldset" className={classes.textField}>
                    <FormLabel
                        className={classes.radioGroupLabel}
                        component="legend">
                        Результат&nbsp;хранить
                    </FormLabel>
                    <RadioGroup
                        value={form.lifetimeLimit}
                        aria-label="durationStorage"
                        row
                        name="durationStorage"
                        onChange={(event, newValue) => {
                            onChangeFormConfigure({lifetimeLimit: newValue})
                        }}>
                        {optionsListStorage.map((option, idx) => (
                            <FormControlLabel
                                className={classes.radioLabel}
                                key={idx}
                                value={option.value}
                                control={<Radio sx={{
                                    color: '#54aa64',
                                    '&.Mui-checked': {
                                        color: '#54aa64',
                                    },
                                }}/>}
                                label={option.label}/>
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default function CreateTaskWrap() {
    const [load, setLoad] = React.useState(false)
    const [form, setForm] = React.useState({
        reportId: 'test',
        tb: '38',
        osb: null,
        vsp: null,
        reportDate: '',
        schedulingType: '0',
        lifetimeLimit: '1'
    })

    const {
        // reportId,
        // tb,
        // osb,
        // vsp,
        reportDate,
        schedulingType,
        lifetimeLimit
    } = form

    const classes = useStyles()

    const handleFormUpdate = data => {
        setForm({...form, ...data})
    }

    const onSend = async (data) => {
        setLoad(true)
        await axios({
            method: 'POST',
            url: `${HOST}/task`,
            data: {
                ...data,
                reportDate: moment(new Date(), 'YYYY-MM-DD HH:mm:ss', 'UTC').format()
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoad(false))
    }

    return (
        <Paper sx={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            backgroundColor: 'transparent',
            padding: '16px'
        }}>
            <div className={classes.root}>
                <StepReport/>
                <StepUnit/>
                <StepConfig
                    onChangeFormConfigure={handleFormUpdate}
                    form={{reportDate, schedulingType, lifetimeLimit}}/>
                <div className={classes.footer}>
                    <Button
                        disabled={load}
                        onClick={() => onSend(form)}
                        sx={{backgroundColor: '#54aa64'}}
                        variant="contained">Создать</Button>
                </div>
            </div>
        </Paper>
    )
}
