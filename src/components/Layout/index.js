import React, { useContext, useEffect } from 'react'

// Componentes
import Header from 'components/Header'

// Servicios
import { getTranslations } from 'services/translations'

// Context
import AppContext from 'context/AppContext'

const Layout = ({ children }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { translationsArray, setTranslationsArray } = useContext(AppContext)

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    /* Cargamos el array de traducciones para hacerlo visible en toda la
        aplicación a través del contexto
    */
    useEffect(() => {
        const language =
            localStorage.getItem('todolist-language') ||
            navigator.language ||
            'es-ES'
        getTranslations(language).then(setTranslationsArray)
    }, [])

    if (!translationsArray) return null

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
