import { injectGlobal } from 'styled-components'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
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
  background: #EDEEF0;
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