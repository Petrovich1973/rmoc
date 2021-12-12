import * as React from "react"
import RmocUser from "./RmocUser"
import RmocNav from "./RmocNav"
import {Divider} from "@mui/material"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import AdjustIcon from '@mui/icons-material/Adjust'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 320,
        backgroundColor: "white",
        borderRight: '1px solid #ccc'
    }
}))

const rmocLinks = [
    {icon: <ArrowCircleDownIcon/>, label: 'Новые', link: '/example1'},
    {icon: <ArrowCircleUpIcon/>, label: 'В работе', link: '/example2'},
    {icon: <InsertInvitationIcon/>, label: 'Отложено', link: '/example2'},
    {icon: <CheckCircleOutlineIcon/>, label: 'Выполнено', link: '/example2'},
    {icon: <HighlightOffIcon/>, label: 'Отказано', link: '/example2'}
]
const boflLinks = [
    {icon: <PlaylistPlayIcon/>, label: 'Заказанные отчеты', link: '/tasks'},
    {icon: <PlaylistAddIcon/>, label: 'Создать новый', link: '/create'}
]
const isuLinks = [
    {icon: <AdjustIcon/>, label: 'ИСУ', link: '/isu'}
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
                icon={<PlaylistAddCheckIcon/>}/>
            <Divider color={'#f0f0f0'}/>
            <RmocNav
                links={boflLinks}
                paddingLeft={32}
                title="Отчеты по вкладам"
                icon={<HistoryEduIcon/>}/>
            <Divider/>
            <RmocNav
                links={isuLinks}
                paddingLeft={16}/>
        </div>
    )
}
