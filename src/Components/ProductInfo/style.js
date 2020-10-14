import styled from 'styled-components'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    img{
        width: 90%;
        margin: 10px;
    }
`
export const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    p{  
        width: 100%;
        font-size: 2em;
        font-weight: bold;
        color: #070606;
        margin-bottom: 80%;
    }
    button{
        margin: 5px;
        height: 60px;
        width: 200px;
        position: end;
        border-radius: 3px;
        font-size: 1em;
        padding: 15px 5px;
        :hover{
                opacity: 0.7;
            }   
        :first-of-type{
            background-color: #799AFB;
            border: none; 
            color: white;   
            font-weight: bold; 
               
        }
        :last-of-type{
            background-color: transparent;
            border: solid 2px grey;
            color: #070606;
        }
    }
   span{
       margin-left: 10px;
   }

`
