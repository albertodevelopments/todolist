import React, { useContext } from 'react'

// Dependencias
import styled from 'styled-components'

// Context
import AppContext from 'context/AppContext'

// Componentes
import Task from 'components/Task'

const ListBlock = styled.section`
    display: grid;
    grid-gap: 0.5rem;
    margin-top: 2rem;
`

const ListOfTasks = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { listOfTasks } = useContext(AppContext)

    if (!listOfTasks) return null

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <ListBlock>
            {listOfTasks.map(task => {
                return <Task key={task.id} task={task} />
            })}
        </ListBlock>
    )
}

export default ListOfTasks
