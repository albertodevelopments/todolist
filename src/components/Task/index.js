import React, { useContext, useState, useEffect } from 'react'

// Context
import AppContext from 'context/AppContext'

// Servicios
import { deleteTask, completeTask } from 'firebase/client'

// Dependencias
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import { es } from 'date-fns/locale'

// Hooks
import { useTranslation } from 'hooks/useTranslation'

// Componentes
import { TaskCard, TaskHeader, Color } from './styles'
import Alert from 'components/Alert'

const Task = ({ task }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [expired, setExpired] = useState(false)
    const [dateToPrint, setDateToPrint] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const {
        language,
        setTaskDeleted,
        setTaskCompleted,
        setTaskOpen,
    } = useContext(AppContext)
    const { getLabel } = useTranslation()
    const { id, description, color, taskDate, completed } = task

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        if (!language) return

        // Formateamos la fecha para que aparezca según el idioma
        const today = new Date()
        const dateToPrint =
            language === 'es'
                ? formatDistanceStrict(new Date(taskDate), today, {
                      locale: es,
                      roundingMethod: 'floor',
                      addSuffix: true,
                  })
                : formatDistanceStrict(new Date(taskDate), today, {
                      roundingMethod: 'floor',
                      addSuffix: true,
                  })
        setDateToPrint(dateToPrint)

        // Controlamos si una tarea ha vencido
        setExpired(!completed && new Date(taskDate) < today)
    }, [language, taskDate, completed])

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
        <TaskCard completed={completed} expired={expired}>
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
            <p>
                {description}{' '}
                {expired ? ` (${getLabel('task.expired')})` : null}
            </p>
            <span>{dateToPrint}</span>
            {errorMessage !== '' && (
                <Alert message={errorMessage} width='100%' />
            )}
        </TaskCard>
    )
}

export default Task
