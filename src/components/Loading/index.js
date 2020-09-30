import React from 'react'

import { useTranslation } from 'hooks/useTranslation'

import './Spinner.css'

const Loading = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */

    // Traducciones
    const { getLabel } = useTranslation()

    return (
        <>
            <div className='sk-circle'>
                <div className='sk-circle1 sk-child'></div>
                <div className='sk-circle2 sk-child'></div>
                <div className='sk-circle3 sk-child'></div>
                <div className='sk-circle4 sk-child'></div>
                <div className='sk-circle5 sk-child'></div>
                <div className='sk-circle6 sk-child'></div>
                <div className='sk-circle7 sk-child'></div>
                <div className='sk-circle8 sk-child'></div>
                <div className='sk-circle9 sk-child'></div>
                <div className='sk-circle10 sk-child'></div>
                <div className='sk-circle11 sk-child'></div>
                <div className='sk-circle12 sk-child'></div>
            </div>
            <h3 className='text-center'>{getLabel('loading')}</h3>
        </>
    )
}

export default Loading
