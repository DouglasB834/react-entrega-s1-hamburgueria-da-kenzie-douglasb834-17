import styled from "styled-components";
//HEADER
export const HeaderStyled = styled.header`
width: 100%;
height: 139px;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--gray-0);
box-shadow: -1px -2px 8px 0px var(--gray-50);

>div{
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
}

div > div {
    margin-bottom: 1rem;
}

div >div img{
    width: 100%;
}

.search div{
    width: 100%;
    display: flex;
    padding: .3rem;
    border-radius: 7px;
    background-color: #fff ;
    border: solid 2px var(--gray-20);

}

.search div input{
    padding: .7rem;
    border: none;
    outline: none;
}

.search div input::placeholder{
    color: var(--gray-20);
}

.search div button{
    border-radius: 5px;
}

@media (min-width: 720px){
    height: 80px;
    >div{
        width: 90%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

div > div {
    margin: 0;
}

div >div img{
    width: 100%;
    margin-left: 1.2rem;

}
}

`