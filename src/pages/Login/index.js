import React, { useState, useContext } from 'react'

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
import GoogleLogo from 'components/Icons'

// Servicios
import { signInByEmail, signInWithGoogle } from 'firebase/client'

// Hooks
import { useTranslation } from 'hooks/useTranslation'

// Context
import AppContext from 'context/AppContext'

const Login = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [errorMessage, setErrorMessage] = useState('')
    const { setUser } = useContext(AppContext)
    const history = useHistory()

    // Traducciones
    const { getLabel } = useTranslation()

    // Formulario y validación con Formik y Yup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email(getLabel('email.invalid'))
                .required(getLabel('email.required')),
            password: Yup.string().required(getLabel('password.required')),
        }),
        onSubmit: inputData => {
            login(inputData)
        },
    })

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const login = async inputData => {
        try {
            const response = await signInByEmail(inputData)
            const { user } = response
            const { displayName, uid } = user
            setUser({
                uid,
                name: displayName,
            })
            history.push('/main')
        } catch (error) {
            const { code } = error
            handleError(code)
        }
    }

    const handleError = errorCode => {
        if (errorCode === 'auth/user-not-found') {
            setErrorMessage(getLabel('user.not.found'))
        } else if (errorCode === 'auth/wrong-password') {
            setErrorMessage(getLabel('wrong.password'))
        } else {
            setErrorMessage(getLabel('login.general.error'))
        }
    }

    const handleLoginWithGoogle = async () => {
        try {
            const user = await signInWithGoogle()
            if (user) {
                history.push('/main')
            }
        } catch (error) {
            console.log(error)
        }
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <AuthenticationCard>
            <h1>{getLabel('login.header')}</h1>
            <form onSubmit={formik.handleSubmit}>
                <AuthenticationInputGroup
                    fieldWidth='80%'
                    iconTop='45%'
                    iconRight='11.6%'
                >
                    <input
                        type='email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder={getLabel('login.email.placeholder')}
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
                        placeholder={getLabel('login.password.placeholder')}
                    />
                    <i className='fa fa-lock fa-lg'></i>
                </AuthenticationInputGroup>
                {formik.touched.password && formik.errors.password && (
                    <Alert message={formik.errors.password} width='80%' />
                )}
                {errorMessage !== '' && (
                    <Alert message={errorMessage} width='80%' />
                )}
                <AppButton type='submit' width='80%'>
                    {getLabel('login.submit')}
                </AppButton>
                <AppButton
                    type='button'
                    onClick={handleLoginWithGoogle}
                    width='80%'
                >
                    <div>
                        <GoogleLogo />
                        <span>{getLabel('login.submit.google')}</span>
                    </div>
                </AppButton>
                <Link to='/new-account'>
                    {getLabel('login.newAccount.link')}
                </Link>
            </form>
        </AuthenticationCard>
    )
}

export default Login
