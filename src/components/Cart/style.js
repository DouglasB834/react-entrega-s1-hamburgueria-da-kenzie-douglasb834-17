import styled from "styled-components";

export const DivCart  = styled.div`
width: 90%;
max-width: 378px;
margin: 3rem auto;
max-height: 495px;
background-color: var(--gray-0);


.title2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;    
    background-color: var(--color-primary); 
    border-radius: 5px 5px 0 0;

}

.title2 h2, p{
    margin-left: 16px;
    font-size: 1.1rem;
    color: var(--gray-0);
    font-weight: 600;
    
}
.title2 p{
    margin-right: 1rem ;
} 

`
export const UlCart  = styled.ul`
gap: 1rem;
display: flex;
height: 305px;
overflow: auto;
flex-direction: column;

`

export const DivCartEmpty =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 158px;

h2{
    font-size: 18px;
    color: var(--gray-100);
}

p{
    font-size: 14px;
    color: var(--gray-50);
}

`