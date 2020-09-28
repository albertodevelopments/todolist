import styled from 'styled-components'

export const SelectionsBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InputField = styled.input`
    width: 100%;
    padding-top: 0.6rem;
    padding: 0.375rem 0.75rem;
    padding-right: 10%;
    height: calc(1.7em + 0.75rem + 2px);
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 1rem;

    :focus {
        outline: none;
        border: 2px solid #8cb1ca;
        box-shadow: 0 0 2px #7494b1;
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
`
export const DateInput = styled.input`
    width: 200px;
    padding: 0.375rem 0.75rem;
    padding-right: 10%;
    height: calc(1.7em + 0.75rem + 2px);
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
`
