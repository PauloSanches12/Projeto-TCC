import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100vh; /** Sempre ocupar 100% da tela */
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: "Roboto", sans-serif;
  }

  body {
    background: var(--principal);
  }

  :root {
        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;
        --white: #FFF;
        --colorText: #4682B4;
        --colorTextButton: #DB7093;
        
        --principal: #E5E6F0;
        --top-section: #2C387E;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
        --link: #5d80d6;
        --rocketseat: #6633cc;
    }
`