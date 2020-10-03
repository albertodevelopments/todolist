import styled from 'styled-components'

export const SelectionsBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Vista tableta pequeña */
    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        text-align: left;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        text-align: left;

        label {
            font-size: 0.8rem;
            height: 2.2rem;
        }
    }
`

export const InputField = styled.input`
    width: 100%;
    padding-top: 0.6rem;
    padding: 0.375rem 0.75rem;
    padding-right: 10%;
    height: 2.8rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 1rem;

    :focus {
        outline: none;
        border: 2px solid #8cb1ca;
        box-shadow: 0 0 2px #7494b1;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        height: 2.2rem;
        font-size: 0.8rem;
        padding: 0.375rem;
    }
`

export const ColorRadio = styled.span`
    display: inline-block;
    margin-top: 1rem;
    margin-right: 3rem;

    label {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-color: ${props => props.color};
        border-radius: 100%;
    }

    label:hover {
        cursor: pointer;
    }

    input {
        display: none;
    }

    input:checked + label {
        border: 5px solid ${props => props.borderColor};
    }

    /* Vista tableta pequeña */
    @media (max-width: 782px) {
        label {
            width: 40px;
            height: 40px;
        }
    }

    /* Vista tableta pequeña */
    @media (max-width: 782px) {
        margin-top: 0.5rem;
        margin-right: 1rem;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        margin-top: 0.5rem;
        margin-right: 1rem;

        label {
            width: 30px;
            height: 30px;
        }
    }
`
export const DateInput = styled.input`
    width: 200px;
    padding: 0.375rem 0.75rem;
    height: 2.8rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
    margin-left: 0.5rem;

    :focus {
        outline: none;
        border: 2px solid #8cb1ca;
        box-shadow: 0 0 2px #7494b1;
    }

    /* Vista teléfono móvil */
    @media (max-width: 412px) {
        font-size: 0.8rem;
        height: 2.2rem;
        padding: 0.375rem;
    }
`
