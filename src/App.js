import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {ContextApp, initialState, reducerApp} from "./reducer.js"
import {CssBaseline} from "@mui/material"
import Wrap from "./wrap"
import Tasks from "./pages/Tasks"
import Task from "./pages/Task"
import TaskCreate from "./pages/TaskCreate"

function App() {

    const [state, dispatch] = React.useReducer(reducerApp, initialState)

    return (
        <ContextApp.Provider value={{state, dispatch}}>
            <div className="App">
                <BrowserRouter>
                    <CssBaseline/>
                    <Wrap>
                        <Routes>
                            <Route path="/" element={<Navigate to="/tasks"/>}/>
                            <Route path={'/tasks'} element={<Tasks/>}/>
                            <Route path={'/tasks/:id'} element={<Task/>}/>
                            <Route path={'/create'} element={<TaskCreate/>}/>
                            <Route path="*" element={<Navigate to="/tasks"/>}/>
                        </Routes>
                    </Wrap>
                </BrowserRouter>
            </div>
        </ContextApp.Provider>
    )
}

export default App
