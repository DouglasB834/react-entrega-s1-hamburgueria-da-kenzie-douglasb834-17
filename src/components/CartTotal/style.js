import styled from "styled-components";

export const CartTotalStyle = styled.div`
margin:1rem 0;
border-top: solid 1px var(--gray-20);

.valorTotal{
    width: 90%;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
}

.valorTotal p{
    font-size: .9rem;
    font-weight: 600;
    color: var(--gray-100);
}

.valorTotal span{
    font-size: .9rem;
    font-weight: 600;
    color: var(--gray-50);

}

div{
    width: 90%;
    margin: auto;
}

div button{   
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem;
    text-align: center;
    background-color: var(--gray-20);
   
}



`