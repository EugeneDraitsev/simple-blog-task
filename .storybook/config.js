import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from 'mobx-react'
import { createStores } from '../src/stores'
import { createBrowserHistory } from 'history'
import { useAsync } from 'react-use'
import { ThemeProvider } from 'styled-components/macro'

import Theme from '../src/styles/themes/light.theme'
import GlobalStyles from '../src/styles/global.styles'

const StoreDecorator = ({ story }) => {
  const history = createBrowserHistory()
  const { value } = useAsync(async () => await createStores(history), [])

  if (value) {
    return (
      <Provider {...value}>
        {story()}
      </Provider>
    )
  }

  return (
    <>
      {story()}
    </>
  )
}

const StyledDecorator = ({ story }) => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      {story()}
    </>
  </ThemeProvider>
)


addDecorator((story) => <StoreDecorator story={story} />)
addDecorator((story) => <StyledDecorator story={story} />)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
