import React from "react"
import {CONST_UPDATE_GLOBAL, CONST_UPDATE_USER} from "./constants"
import Moment from "moment"
Moment.locale('ru')
export const ContextApp = React.createContext()

export const initialState = {
    theme: true,
    auth: true,
    user: {
        name: 'Выгодин В.В',
        login: 'Vigodin-VV',
        position: 'Ведущий экономист',
        permission: ['admin']
    }
}

export const reducerApp = (state, action) => {
    switch(action.type) {
        case CONST_UPDATE_GLOBAL:
            return {
                ...state,
                ...action.payload
            }
        case CONST_UPDATE_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        default:
            return state
    }
}
