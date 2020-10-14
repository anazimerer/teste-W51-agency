import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 5vh;
    padding: 10px;
    img{
        height: 80%;
        margin: 0 10%;
    }
`

export const HeaderLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin: 0px 10%;
    p{
        margin: 5px 20px; 
        :hover{
            font-weight: bold;
        }
    }
    input{
        height: 20px;
        margin: 2px 5px;
    }
   
`