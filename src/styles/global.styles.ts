import { injectGlobal } from 'styled-components'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
html, body, #root {
  height: calc(100% - 70px);
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: #F3F3F3;
}

a {
    text-decoration: none;
}

.bm-menu-wrap {
  top: 0;
}

.bm-burger-button {
  display: none;
}
`
