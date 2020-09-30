import React, { useEffect, useRef, useContext, useState } from 'react'

// Dependencias
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Servicios
import { createNewTask } from 'firebase/client'

// Hooks
import { useTranslation } from 'hooks/useTranslation'

// Context
import AppContext from 'context/AppContext'

// Componentes
import Alert from 'components/Alert'
import { AppButton } from 'components/ui'
import { SelectionsBlock, InputField, ColorRadio, DateInput } from './styles'

const TasksInput = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [colorChecked, setColorChecked] = useState('')
    const { user, setListOfTasks } = useContext(AppContext)
    const [errorMessage, setErrorMessage] = useState('')
    const taskRef = useRef()
    const today = new Date()

    // Formateamos la fecha actual como YYYY-MM-DD para poder usarla en el atributo min del campo fecha
    const todayString =
        today.getMonth() <= 9
            ? `${today.getFullYear()}-0${today.getMonth() + 1}-${
                  today.getDate() + 1
              }`
            : `${today.getFullYear()}-${today.getMonth() + 1}-${
                  today.getDate() + 1
              }`

    // Traducciones
    const { getLabel } = useTranslation()

    // Formulario y validación con Formik y Yup
    const formik = useFormik({
        initialValues: {
            description: '',
            color: '',
            taskDate: '',
        },
        validationSchema: Yup.object({
            description: Yup.string().required(getLabel('task.required')),
            color: Yup.string().required(getLabel('color.required')),
            taskDate: Yup.date().required(getLabel('date.required')),
        }),
        onSubmit: async (inputData, { resetForm }) => {
            await createTask(inputData)
            resetForm({
                description: '',
                color: '',
                taskDate: '',
            })
            setColorChecked('')
            taskRef.current.focus()
        },
    })

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        taskRef.current.focus()
    }, [])

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const createTask = async task => {
        if (!user) {
            setErrorMessage(getLabel('tasks.user.not.found'))
            return
        }

        // Añadimos los campos extra que no vienen en el formulario
        task.completed = false
        task.userId = user.uid

        try {
            const newListOfTasks = await createNewTask(task)
            setListOfTasks(newListOfTasks)
        } catch (error) {
            setErrorMessage(getLabel('tasks.create.error'))
        }
    }

    // Función que nos ayudará a deseleccionar todos los valores del radio button de colores
    const handleColorClick = color => {
        setColorChecked(color)
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <form onSubmit={formik.handleSubmit}>
            <InputField
                id='description'
                ref={taskRef}
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder={getLabel('task.label.placeholder')}
            />
            {formik.touched.description && formik.errors.description && (
                <Alert message={formik.errors.description} />
            )}
            <SelectionsBlock>
                <div>
                    <ColorRadio color='#09f' borderColor='#0665a5'>
                        <input
                            type='radio'
                            name='color'
                            id='blue'
                            value='#09f'
                            checked={colorChecked === 'blue'}
                            onClick={() => handleColorClick('blue')}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor='blue'></label>
                    </ColorRadio>
                    <ColorRadio color='#0b960bed' borderColor='#054a05'>
                        <input
                            type='radio'
                            name='color'
                            id='green'
                            value='#0b960bed'
                            checked={colorChecked === 'green'}
                            onClick={() => handleColorClick('green')}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor='green'></label>
                    </ColorRadio>
                    <ColorRadio color='#c73535' borderColor='#501414'>
                        <input
                            type='radio'
                            name='color'
                            id='red'
                            value='#c73535'
                            checked={colorChecked === 'red'}
                            onClick={() => handleColorClick('red')}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor='red'></label>
                    </ColorRadio>
                    <ColorRadio color='#f35a29' borderColor='#ad3f1d'>
                        <input
                            type='radio'
                            name='color'
                            id='orange'
                            value='#f35a29'
                            checked={colorChecked === 'orange'}
                            onClick={() => handleColorClick('orange')}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor='orange'></label>
                    </ColorRadio>
                </div>
                {formik.touched.color && formik.errors.color && (
                    <Alert message={formik.errors.color} width='100%' />
                )}
                <div>
                    <label htmlFor='date-task'>{getLabel('date.label')}</label>
                    <DateInput
                        type='date'
                        min={todayString}
                        id='taskDate'
                        value={formik.values.taskDate}
                        onChange={formik.handleChange}
                    />
                </div>
            </SelectionsBlock>

            {formik.touched.taskDate && formik.errors.taskDate && (
                <Alert message={formik.errors.taskDate} />
            )}
            {errorMessage !== '' && (
                <Alert message={errorMessage} width='100%' />
            )}
            <AppButton width='100%' type='submit'>
                {getLabel('task.submit')}
            </AppButton>
        </form>
    )
}

export default TasksInput
