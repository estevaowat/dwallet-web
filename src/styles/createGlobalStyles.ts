import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&family=Sawarabi+Gothic&display=swap');

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
   font-family: 'Noto Sans JP', sans-serif;
   font-size: 16px;
   height: 100%;
   -webkit-font-smoothing: antialiased;
}

input {
   font-family: 'Noto Sans JP', sans-serif;
}

button {
   cursor: pointer;
   font-family: 'Noto Sans JP', sans-serif;
}

`;

export default GlobalStyle;
