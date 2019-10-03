import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  
  #root {
    margin-top: -70px;
    padding-top: 70px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    &.disable-transitions {
      #page-wrap {
        * {
          transition: none !important;
        }
      }
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  .bm-menu-wrap {
    top: 0;
  }
  
  .bm-burger-button {
    display: none;
  }
`
