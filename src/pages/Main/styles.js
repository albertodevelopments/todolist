import styled from 'styled-components'

export const MainPage = styled.main`
    margin: 0 auto;
    margin-top: 5rem;
    padding: 2rem;
    text-align: center;

    /* Vista de portátil */
    @media (max-width: 1024px) {
        margin-top: 10rem;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        width: 100%;
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

    /* Vista de portátil */
    @media (max-width: 1240px) {
        width: 90%;
    }

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 952px) {
        width: 100%;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        padding: 0;
    }
`
