import { createGlobalStyle } from "styled-components";



export const StyleGlobal = createGlobalStyle`

:root{
    --color-primary:#27AE60;
    --color-primary-50:#93D7AF;
    --color-secondary:#EB5757;

    //Grey Scale Palette
    --gray-100: #333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F4F4F5;

    --bg:#fff
    
    //Feedback Palette
    --negativo:#E60000;

    --warning:#FFCD07;
    --sucess:#168821;
    --information:#155BCB;

    --headin1 :  1.6rem;

    --headin2 : 1.4rem;
    --headin4 : .9rem;
    --body_600: .88rem;
    --caption: .75rem;    
    --text : .98rem;
    

}   


.title{
    font-size: .88rem;
    font-weight: 700;
    color: var(--gray-100);
}


.btnText{
    display: inline-flex;
    align-items: center;
    background-color: var(--color-primary);
    font-size: .9rem;
    padding: 0px 20px;
    font-weight: 500;
    color: var(--gray-0);
    border-radius: 5px;
    padding: .6rem;
    cursor: pointer;
    transition: .2s linear;
}

.btnText:hover{
    background-color: var(--color-primary-50);
}



.headin1{
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--gray-100)
}

.headin2{
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--gray-100)
}

.headin3{
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--gray-100)
}


.headline{
    font-size:.9rem;
    font-size: 400;
}


.body{
    font-size: .88rem ;
}

.body_600{
    font-style: SemiBold;
    font-size: .88rem ;
}

caption{
    font-size: .75rem;
}

.boxContent{
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;
}

`