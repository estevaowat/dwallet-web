import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   transition: all 0.5s;
}

html,
body,
#root {
   font-family: url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap'), 'Monospace';
   font-size: 16px;
   height: 100%;
   -webkit-font-smoothing: antialiased;
}

button {
   cursor: pointer;
}

`;

export default GlobalStyle;
