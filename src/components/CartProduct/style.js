import styled from "styled-components";
import 'animate.css';
export const LiCart = styled.li`
min-width: 300px;
width: 92%;
display: flex;
background-color: var(--gra-0);
margin: 10px 0 0 10px;

figure{
    max-width: 70px;
    max-height: 70px;
    background-color: var(--gray-20);
    border-radius: 5px;
    margin-right: .8rem;

}

figure img{
    width: 100%;

}

.content{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
   
}

.content > div {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
}


.content > div h3{
    font-size: 1rem ;
    overflow: hidden;
    width: 160px;
    text-overflow: ellipsis;
    white-space: nowrap
}

.content > div p{
    font-size: .7rem ;
    background-color: red;
  
}

.content >span{
    color: var(--gray-50);
    font-size: .75rem;

}

svg{
    cursor: pointer;
    background-color: var(--gra-100);
}

.btnremove:hover{
    color: #eb4235;

}



`