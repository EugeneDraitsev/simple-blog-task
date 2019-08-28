import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { configure } from 'mobx'
import { inject, observer, Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { STORE_USERS } from './constants'
import RootContainer from './containers/root.container'
import { UserModel } from './models'
import { createStores, IStores } from './stores'
import GlobalStyles from './styles/global.styles'
import themes from './styles/themes'

configure({ enforceActions: 'observed' })
const history = createBrowserHistory()
// eslint-disable-next-line import/no-mutable-exports
export let stores: IStores

history.listen(() => {
  if (window && window.scrollTo) {
    window.scrollTo(0, 0)
  }
})

const createRoot = async () => {
  stores = await createStores(history)

  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
  )
}

interface IAppProps {
  user?: UserModel
}

@inject((x: any) => ({ user: x[STORE_USERS].user }))
@observer
class App extends React.Component<IAppProps> {
  public render() {
    const { user } = this.props
    return (
      <ThemeProvider theme={(themes as any)[user!.theme]}>
        <>
          <GlobalStyles />
          <RootContainer history={history} />
        </>
      </ThemeProvider>
    )
  }
}

createRoot()
