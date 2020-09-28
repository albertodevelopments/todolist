import React, { useState } from 'react'

// Dependencias
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

// Componentes
import Alert from 'components/Alert'
import {
    AppButton,
    AuthenticationCard,
    AuthenticationInputGroup,
} from 'components/ui'

// Servicios
import { signUpByEmail } from 'firebase/client'

// Hooks
import { useTranslation } from 'hooks/useTranslation'

const NewAccount = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    // Traducciones
    const { getLabel } = useTranslation()

    // Formulario y validación con Formik y Yup
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(getLabel('name.required')),
            email: Yup.string()
                .email(getLabel('email.invalid'))
                .required(getLabel('email.required')),
            password: Yup.string()
                .required(getLabel('password.required'))
                .min(6, getLabel('password.length')),
            passwordConfirmation: Yup.string()
                .required(getLabel('confirmPassword.required'))
                .oneOf(
                    [Yup.ref('password'), null],
                    getLabel('passwords.must.match')
                ),
        }),
        onSubmit: inputData => {
            signUp(inputData)
        },
    })

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const signUp = async inputData => {
        try {
            await signUpByEmail(inputData)
            history.push('/main')
        } catch (error) {
            const { code } = error
            handleError(code)
        }
    }

    const handleError = errorCode => {
        if (errorCode === 'auth/email-already-in-use') {
            setErrorMessage(getLabel('email.already.in.use'))
        } else {
            setErrorMessage(getLabel('newAccount.general.error'))
        }
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <AuthenticationCard>
            <h1>{getLabel('newAccount.header')}</h1>
            <form onSubmit={formik.handleSubmit}>
                <AuthenticationInputGroup fieldWidth='80%' iconTop='42%'>
                    <input
                        type='text'
                        id='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder={getLabel('newAccount.name.placeholder')}
                    />
                    <i className='fa fa-user fa-lg'></i>
                </AuthenticationInputGroup>
                {formik.touched.name && formik.errors.name && (
                    <Alert message={formik.errors.name} width='80%' />
                )}
                <AuthenticationInputGroup
                    fieldWidth='80%'
                    iconTop='45%'
                    iconRight='11.7%'
                >
                    <input
                        type='email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder={getLabel('newAccount.email.placeholder')}
                    />
                    <i className='fa fa-at fa-lg'></i>
                </AuthenticationInputGroup>
                {formik.touched.email && formik.errors.email && (
                    <Alert message={formik.errors.email} width='80%' />
                )}
                <AuthenticationInputGroup fieldWidth='80%' iconTop='45%'>
                    <input
                        type='password'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder={getLabel(
                            'newAccount.password.placeholder'
                        )}
                    />
                    <i className='fa fa-lock fa-lg'></i>
                </AuthenticationInputGroup>
                {formik.touched.password && formik.errors.password && (
                    <Alert message={formik.errors.password} width='80%' />
                )}
                <AuthenticationInputGroup fieldWidth='80%' iconTop='35%'>
                    <input
                        type='password'
                        name='passwordConfirmation'
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                        placeholder={getLabel(
                            'newAccount.confirmPassword.placeholder'
                        )}
                    />
                    <i className='fa fa-lock fa-lg'></i>
                </AuthenticationInputGroup>
                {formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation && (
                        <Alert
                            message={formik.errors.passwordConfirmation}
                            width='80%'
                        />
                    )}
                {errorMessage !== '' && (
                    <Alert message={errorMessage} width='80%' />
                )}
                <AppButton type='submit' width='80%'>
                    {getLabel('newAccount.submit')}
                </AppButton>
            </form>
            <Link to='/login'>{getLabel('newAccount.login.link')}</Link>
        </AuthenticationCard>
    )
}

export default NewAccount
