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
    --gray-0: #F5F5F5;
    
    //Feedback Palette
    --negative:#E60000;
    --warning:#FFCD07;
    --sucess:#168821;
    --information:#155BCB;

    --headin1 : font-size: 1.6rem;
    --headin2 : font-size: 1.4rem;
    --headin3 : font-size: 1.1rem;
    --headin4 : font-size: .9rem;
    --body_600: font-size: .88rem;
    --caption: font-size: .75rem:

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
    font-size:.9,2rem;
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


`