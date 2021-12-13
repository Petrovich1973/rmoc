import * as React from "react"
import RmocUser from "./RmocUser"
import RmocNav from "./RmocNav"
import {Divider} from "@mui/material"
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
// import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
// import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
// import HighlightOffIcon from '@mui/icons-material/HighlightOff'
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
// import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
// import AdjustIcon from '@mui/icons-material/Adjust'
// import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import {
    ArrowDropDownCircle,
    ArrowDropUp,
    InsertInvitation,
    CheckCircleOutline,
    PlaylistAddCheck,
    HighlightOff,
    PlaylistAdd,
    PlaylistPlay,
    Adjust,
    ChangeHistory
} from '@material-ui/icons'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 320,
        backgroundColor: "white",
        borderRight: '1px solid #ccc'
    }
}))

const rmocLinks = [
    {icon: <ArrowDropDownCircle/>, label: 'Новые', link: '/example1'},
    {icon: <ArrowDropUp/>, label: 'В работе', link: '/example2'},
    {icon: <InsertInvitation/>, label: 'Отложено', link: '/example2'},
    {icon: <CheckCircleOutline/>, label: 'Выполнено', link: '/example2'},
    {icon: <HighlightOff/>, label: 'Отказано', link: '/example2'}
]
const boflLinks = [
    {icon: <PlaylistPlay/>, label: 'Заказанные отчеты', link: '/tasks'},
    {icon: <PlaylistAdd/>, label: 'Создать новый', link: '/create'}
]
const isuLinks = [
    {icon: <Adjust/>, label: 'ИСУ', link: '/isu'}
]

export default function RmocSide() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <RmocUser/>
            <RmocNav
                links={rmocLinks}
                paddingLeft={32}
                title="Задачи"
                icon={<PlaylistAddCheck/>}/>
            <Divider color={'#f0f0f0'}/>
            <RmocNav
                links={boflLinks}
                paddingLeft={32}
                title="Отчеты по вкладам"
                icon={<ChangeHistory/>}/>
            <Divider/>
            <RmocNav
                links={isuLinks}
                paddingLeft={16}/>
        </div>
    )
}
