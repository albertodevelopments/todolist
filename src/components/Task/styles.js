import styled from 'styled-components'

export const TaskCard = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border: 1px solid var(--orange);
    padding: 0.8rem;
    border-radius: 0.25rem;

    p {
        text-align: justify;
        color: ${props => props.expired && 'var(--red)'};
        color: ${props => props.completed && 'var(--green)'};
        text-decoration: ${props =>
            props.expired || props.completed ? 'line-through' : 'none'};
    }

    span {
        text-align: end;
        margin-top: 0.3rem;
        font-style: italic;
    }

    /* Vista teléfono móvil */
    @media (max-width: 360px) {
        padding: 0.4rem;

        p,
        p + span {
            font-size: 0.8rem;
        }
    }
`

export const TaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 0.3rem;
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    font-size: 1.3rem;

    span {
        cursor: pointer;
    }

    /* La entidad 'close' viene con un formato por defecto diferente de la 'ok',
       por lo que hay que ajustar */
    span:last-of-type {
        line-height: 2rem;
        margin-left: 0.4rem;
        font-size: 1.9rem;
    }

    /* Vista teléfono móvil */
    @media (max-width: 360px) {
        margin-bottom: 0.3rem;
        margin-top: -0.2rem;
        margin-right: 0;

        span {
            font-size: 0.8rem;
            line-height: 0.1rem;
        }

        span:last-of-type {
            margin-left: 0.4rem;
            font-size: 1.4rem;
            line-height: 0.6rem;
        }
    }
`
export const Color = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    border-radius: 100%;
`
