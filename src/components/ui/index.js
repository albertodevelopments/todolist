import styled from 'styled-components'

export const AppButton = styled.button`
    display: flex;
    width: ${props => props.width};
    margin: 0.5rem auto;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    outline: none;
    border-radius: 0.25rem;
    border: 1px solid var(--orange);
    color: var(--orange);
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 0 0 4px #e0c0b6 inset;
    letter-spacing: 0.2rem;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    :first-of-type {
        margin-top: 1.4rem;
    }

    :hover {
        cursor: pointer;
        color: #fff;
        background-color: var(--orange);
        border: 1px solid var(--font-gray);
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        height: 2.2rem;
        font-size: 0.9rem;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`

export const AuthenticationCard = styled.div`
    background-color: #fff;
    width: 35%;
    height: auto;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 0.2rem;
    text-align: center;
    padding: 2rem 1rem;
    color: var(--font-gray);
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px gray;

    h1 {
        margin-bottom: 1.5rem;
    }

    a,
    span {
        display: flex;
        justify-content: flex-start;
        margin: 0 auto;
        padding-top: 1rem;
        width: 80%;
        color: var(--font-gray);
        font-style: italic;
        font-size: 0.9rem;
        cursor: pointer;
    }

    span {
        padding-top: 0.5rem;
    }

    /* Vista portátil */
    @media (max-width: 1024px) {
        width: 60%;
    }

    /* Vista tableta */
    @media (max-width: 800px) {
        width: 70%;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        width: 100%;
        margin-top: 7rem;
        border: none;
        box-shadow: none;

        a,
        span {
            font-size: 0.75rem;
        }
    }
`

export const AuthenticationInputGroup = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 0.6rem;

    :last-of-type {
    }

    i {
        position: absolute;
        right: ${props => props.iconRight || '12%'};
        top: ${props => props.iconTop};
        pointer-events: none;
    }

    input[type='email'],
    input[type='password'],
    input[type='text'] {
        width: ${props => props.fieldWidth};
        padding: 0.375rem 0.75rem;
        padding-right: 10%;
        height: 2.8rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
    }

    input[type='email']:focus,
    input[type='password']:focus,
    input[type='text']:focus {
        outline: none;
        border: 2px solid #8cb1ca;
        box-shadow: 0 0 2px #7494b1;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        input[type='email'],
        input[type='password'],
        input[type='text'] {
            height: 2.5rem;
            font-size: 0.8rem;
        }
    }
`
