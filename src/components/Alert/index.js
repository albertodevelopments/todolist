import React from 'react'

// Componentes
import styled from 'styled-components'

const AlertBody = styled.div`
    width: ${props => props.width};
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    background-color: #c73535;
    color: #fff;
    user-select: none;
    border-radius: 0.25rem;
`

const Alert = ({ message, width }) => {
    return <AlertBody width={width}>{message}</AlertBody>
}

export default Alert
