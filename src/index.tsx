import 'core-js'
import { createBrowserHistory } from 'history'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import RootContainer from './containers/root.container'
import registerServiceWorker from './registerServiceWorker'
import { createStores } from './stores'
import './styles/global.styles'
import theme from './styles/themes/default.theme'

configure({ enforceActions: true })
const history = createBrowserHistory()

const stores = createStores(history)

ReactDOM.render(
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <RootContainer history={history} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
)

registerServiceWorker()
