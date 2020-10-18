import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    html, body, #root{

        height:100vh;
        width:100vw;

    }
    #root{
        padding:0px 8vw;
    }

`
