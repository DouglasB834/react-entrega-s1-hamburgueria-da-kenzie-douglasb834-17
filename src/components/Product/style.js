import styled from "styled-components";

export const Li = styled.li`
width: 300px;
height: 346px;
border-radius: 5px;
transition: .2s linear;

margin-left: .3rem;
margin-bottom: 0.5rem;
border: solid 2px var(--gray-20);
:hover{
    transform: scale(1.01);
    box-shadow: 0px 1px 8px 0px var(--gray-50);
} 


`
export const DivStyle = styled.div`
width: 300px;
display: flex;
border-radius: 5px;
flex-direction: column;
justify-content: center;






figure{
    display: flex;
    max-width: 300px;
    width: 99%;
    z-index: -1;
    background-color: var(--gray-0);
    justify-content: center;
    

}

figure img{
    height: 177px;
    /* width: 177px; */
}

h2{
   font-size:.98rem;

}

span{
    font-size: 12px;
    color: var(--gray-50);
}

p{
    font-size: .9rem;
    color: var(--color-primary);
    font-weight: 600;
}



`
