import React, { useContext, useState } from 'react'

// Context
import AppContext from 'context/AppContext'

// Servicios
import { deleteTask, completeTask } from 'firebase/client'

// Hooks
import { useTranslation } from 'hooks/useTranslation'

// Componentes
import { TaskCard, TaskHeader, Color } from './styles'
import Alert from 'components/Alert'

const Task = ({ task }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [errorMessage, setErrorMessage] = useState('')
    const { setTaskDeleted, setTaskCompleted, setTaskOpen } = useContext(
        AppContext
    )
    const { getLabel } = useTranslation()
    const { id, description, color, taskDate, completed } = task

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const handleDelete = async () => {
        try {
            await deleteTask(id)
            setTaskDeleted(id)
        } catch (error) {
            setErrorMessage(getLabel('tasks.delete.error'))
        }
    }

    const handleComplete = async () => {
        try {
            if (completed) {
                task.completed = false
                await completeTask(task)
                setTaskOpen(task.id)
            } else {
                task.completed = true
                await completeTask(task)
                setTaskCompleted(id)
            }
        } catch (error) {
            setErrorMessage(getLabel('tasks.complete.error'))
        }
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <TaskCard completed={completed}>
            <TaskHeader>
                <Color color={color} />
                <div>
                    {task.completed ? (
                        <span
                            onClick={handleComplete}
                            title={getLabel('task.reopen')}
                        >
                            &#9100;
                        </span>
                    ) : (
                        <span
                            onClick={handleComplete}
                            title={getLabel('task.complete')}
                        >
                            &#10003;
                        </span>
                    )}
                    <span
                        onClick={handleDelete}
                        title={getLabel('task.delete')}
                    >
                        &times;
                    </span>
                </div>
            </TaskHeader>
            <p>{description}</p>
            <span>{taskDate}</span>
            {errorMessage !== '' && (
                <Alert message={errorMessage} width='100%' />
            )}
        </TaskCard>
    )
}

export default Task
