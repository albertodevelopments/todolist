import React, { useReducer } from 'react'

// Context
import {
    TRANSLATIONS_ARRAY,
    AUTHENTICATED_USER,
    DELETE_TASK,
    LIST_OF_TASKS,
    TASK_COMPLETED,
    TASK_OPEN,
} from 'types'
import AppContext from './AppContext'
import AppReducer from './AppReducer'

const AppService = ({ children }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const initialState = {
        translationsArray: null,
        user: null,
        listOfTasks: [],
    }
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const { translationsArray, user, listOfTasks } = state

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const setTranslationsArray = translationsArray => {
        dispatch({
            type: TRANSLATIONS_ARRAY,
            payload: translationsArray,
        })
    }

    const setUser = user => {
        dispatch({
            type: AUTHENTICATED_USER,
            payload: user,
        })
    }

    const setListOfTasks = listOfTasks => {
        dispatch({
            type: LIST_OF_TASKS,
            payload: listOfTasks,
        })
    }

    const setTaskDeleted = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId,
        })
    }

    const setTaskCompleted = taskId => {
        dispatch({
            type: TASK_COMPLETED,
            payload: taskId,
        })
    }

    const setTaskOpen = taskId => {
        dispatch({
            type: TASK_OPEN,
            payload: taskId,
        })
    }

    return (
        <AppContext.Provider
            value={{
                translationsArray,
                user,
                listOfTasks,
                setTranslationsArray,
                setUser,
                setTaskDeleted,
                setListOfTasks,
                setTaskCompleted,
                setTaskOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppService
