import styled from 'styled-components'

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    border-bottom: 1px solid var(--orange);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10rem;
    padding-right: 1rem;
    user-select: none;

    h1 {
        color: var(--orange);
    }

    span {
        color: var(--dark);
    }

    /* Vista teléfono móvil */
    @media (max-width: 360px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        height: auto;

        h1 {
            font-size: 1.5rem;
            margin-left: 0.25rem;
            margin-bottom: 0.5rem;
        }
    }
`

export const Navigation = styled.ul`
    color: var(--dark);

    li {
        display: inline;
        margin-left: 3rem;
    }

    li:last-of-type {
        cursor: pointer;
    }

    select {
        padding: 0.2rem;
        width: 10rem;
        border-radius: 0.2rem;
    }

    select:focus {
        outline: none;
    }

    li i {
        margin-right: 0.2rem;
    }

    /* Vista teléfono móvil */
    @media (max-width: 360px) {
        width: 100%;

        li {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            margin-left: 0.25rem;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            padding-bottom: 0.4rem;
            border-bottom: 1px solid #c2c2c2;
            width: 100%;
        }

        label {
            line-height: 1.5rem;
        }

        select {
            margin-left: 0.25rem;
            padding: 0.1rem;
        }
    }
`
