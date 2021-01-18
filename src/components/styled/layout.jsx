import styled from 'styled-components'


export const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    > main {
        flex: 1;
    }
`

export const Nav = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 4vw;
    justify-content: space-between;
    background: purple;
    >  h1{
        font-size: 2rem;
        font-weight: 600;
        color: white;
    }
    > ul {
        display: flex;
        list-style: none;
        > li {
            color: white;
            margin: 0 1em;
            > a {
                text-decoration: none;
                color: white;
            }
        }
    }
`