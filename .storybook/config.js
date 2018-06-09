import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from 'mobx-react'
import { createStores } from '../src/stores'
import { createBrowserHistory } from 'history'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx$/)


const createRoot = async () => {
  const history = createBrowserHistory()
  const stores = await createStores(history)

  addDecorator((story) => (
    <Provider {...stores}>
      {story()}
    </Provider>
  ))

  function loadStories() {
    req.keys().forEach(filename => req(filename))
  }

  configure(loadStories, module)
}

createRoot()



