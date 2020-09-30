import React, { useContext, useEffect } from 'react'

// Componentes
import Header from 'components/Header'

// Servicios
import { getTranslations } from 'services/translations'
import { onAuthStateChanged } from 'firebase/client'

// Context
import AppContext from 'context/AppContext'

const Layout = ({ children }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const {
        translationsArray,
        setTranslationsArray,
        setLanguage,
        setUser,
    } = useContext(AppContext)

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    /* Cargamos el array de traducciones para hacerlo visible en toda la
        aplicación a través del contexto
    */
    useEffect(() => {
        // Cargamos el contexto con el usuario autenticado al recargar la página
        onAuthStateChanged(setUser)

        const language =
            localStorage.getItem('todolist-language') ||
            navigator.language ||
            'es-ES'
        getTranslations(language).then(setTranslationsArray)
        setLanguage(language.substring(0, 2))
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
