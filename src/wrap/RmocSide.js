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
    {icon: <AdjustIcon/>, label: 'ИСУ', link: '/tasks'}
]

export default function RmocSide() {
    return (
        <div>
            <RmocUser/>
            <RmocNav links={rmocLinks} title="Задачи" icon={<PlaylistAddCheckIcon/>}/>
            <Divider />
            <RmocNav links={boflLinks} title="Отчеты по вкладам" icon={<HistoryEduIcon/>}/>
            <Divider />
            <RmocNav links={isuLinks}/>
        </div>
    )
}
