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
`

export const Navigation = styled.ul`
    color: var(--dark);

    ul {
        margin-right: 1rem;
    }

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
`
