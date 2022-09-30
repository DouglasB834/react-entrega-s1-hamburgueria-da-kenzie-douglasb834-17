import styled from "styled-components";

export const MainStyled = styled.main`

width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;

@media (min-width: 950px) {
    width: 98%;
    flex-direction: row;
}

@media (min-width:1130px ){
width: 90%;
}


`