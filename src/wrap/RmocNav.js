import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import {NavLink} from "react-router-dom"
import {ExpandLess, ExpandMore} from "@mui/icons-material"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        color: '#393939'
    },
    sep: {
        width: 10
    },
    link: {
        color: '#393939'
    }
}))

export default function RmocNav({links = null, title = null, icon = <InboxIcon/>}) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
    const [data, setData] = React.useState([])


    React.useEffect(() => {
        links && setData(links)
    }, [])

    return (
        <div className={classes.root}>
            {title && <ListItemButton onClick={() => setOpen(!open)}>
                {icon}
                <div className={classes.sep}/>
                <ListItemText primary={title || 'Title'}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>}
            {
                open &&
                data.map((item) => (
                    <NavLink key={item.label} to={item.link} className={classes.link}>
                        <ListItemButton sx={{py: 0, minHeight: 32}}>
                            {item.icon}
                            <div className={classes.sep}/>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}/>
                        </ListItemButton>
                    </NavLink>
                ))
            }
        </div>
    )
}
