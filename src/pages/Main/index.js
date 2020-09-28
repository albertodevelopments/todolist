import React, { useContext, useEffect } from 'react'

import { Redirect } from 'react-router-dom'

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

const Main = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { user, setListOfTasks } = useContext(AppContext)

    // Traducciones
    const { getLabel } = useTranslation()

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
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

    // Lo comento temporalmente durante las pruebas, para que al guardar no vaya a la pantalla de Login
    // if(!user){
    //     return <Redirect to='/login' />
    // }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <MainPage>
            <h1>{getLabel('tasks.section.title')}</h1>
            <TaskSection>
                <TasksInput />
                <ListOfTasks />
            </TaskSection>
        </MainPage>
    )
}

export default Main
