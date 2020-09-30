import React, { useContext, useEffect, useState } from 'react'

import { Redirect, Link } from 'react-router-dom'

// Hooks
import { useTranslation } from 'hooks/useTranslation'

// Context
import AppContext from 'context/AppContext'

// Servicios
import { fetchListOfTasks } from 'firebase/client'

// Componentes
import ListOfTasks from 'components/ListOfTasks'
import TasksInput from 'components/TasksInput'
import { MainPage, TaskSection } from './styles'
import Loading from 'components/Loading'

const Main = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { user, setListOfTasks } = useContext(AppContext)
    const [timeout, setTimeout] = useState(false)

    // Traducciones
    const { getLabel } = useTranslation()

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeout(true)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        user && getTasks(user.uid)
    }, [user])

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const getTasks = async userId => {
        const listOfTasks = await fetchListOfTasks(userId)
        setListOfTasks(listOfTasks)
    }

    if (timeout && !user) {
        return <Redirect to='/login' />
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <MainPage>
            {user ? (
                <>
                    <h1>{getLabel('tasks.section.title')}</h1>
                    <TaskSection>
                        <TasksInput />
                        <ListOfTasks />
                    </TaskSection>
                </>
            ) : (
                <Loading />
            )}
        </MainPage>
    )
}

export default Main
