import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
    outline:none;
    
  }
  html,
  body {
    font-size:${({ theme }) => theme.font.sizes.small};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  html{
    font-size:62.5%;
  }
  a{
    color:${({ theme }) => theme.colors.secondary};
    text-decoration:none;
  }
  .__next{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
  }
  
`;

export default GlobalStyle;
