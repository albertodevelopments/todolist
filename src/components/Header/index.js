import React, { useContext } from 'react'

// Dependencias
import { useHistory } from 'react-router-dom'

// Servicios
import { getTranslations } from 'services/translations'
import { signOut } from 'firebase/client'

// hooks
import { useTranslation } from 'hooks/useTranslation'

// Context
import AppContext from 'context/AppContext'

// Componentes
import { HeaderStyled, Navigation } from './styles'

const Header = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { user, setUser, setTranslationsArray, setLanguage } = useContext(
        AppContext
    )
    const { getLabel } = useTranslation()
    const history = useHistory()

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const handleChange = e => {
        getTranslations(e.target.value).then(setTranslationsArray)
        localStorage.setItem('todolist-language', e.target.value)
        setLanguage(e.target.value.substring(0, 2))
    }

    const handleLogOut = () => {
        signOut()
        setUser(null)
        history.push('/login')
    }

    return (
        <HeaderStyled>
            <h1>
                TODO <span>List</span>
            </h1>
            <Navigation>
                <li>
                    <label htmlFor='language'>
                        {getLabel('select.language')}{' '}
                    </label>
                    <select onChange={handleChange}>
                        <option value=''>
                            {getLabel('select.language.default')}
                        </option>
                        <option value='es-ES'>
                            {getLabel('select.language.spanish')}
                        </option>
                        <option value='en-US'>
                            {getLabel('select.language.english')}
                        </option>
                    </select>
                </li>
                {user && (
                    <li>
                        <i className='fa fa-user fa-lg'></i>
                        <span>{user.name}</span>
                    </li>
                )}
                {user && (
                    <li onClick={handleLogOut}>
                        <span>{getLabel('logout')}</span>
                    </li>
                )}
            </Navigation>
        </HeaderStyled>
    )
}

export default Header
