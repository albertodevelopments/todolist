import styled from 'styled-components'

export const MainPage = styled.main`
    margin: 0 auto;
    margin-top: 5rem;
    padding: 2rem;
    text-align: center;

    /* Vista teléfono móvil */
    @media (max-width: 360px) {
        width: 100%;
        margin-top: 10rem;
        padding-top: 1rem;

        h1 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }
    }
`

export const TaskSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: auto;
    min-height: 60%;
    margin: 1rem auto;
    padding: 2rem;

    form {
        width: 100%;
    }

    /* Vista teléfono móvil */
    @media (max-width: 360px) {
        width: 100%;
        padding: 0;
    }
`
