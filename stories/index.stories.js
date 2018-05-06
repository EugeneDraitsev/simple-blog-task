import React from 'react'

import { storiesOf } from '@storybook/react'
import { PopupStory } from './popup.story'
import '../src/styles/css/index.css'

storiesOf('Popup', module)
  .add('Simple popup', () => <PopupStory />)
  .add('Popup with overlay', () => <PopupStory overlay />)
  .add('Popup with title', () => <PopupStory overlay title="test title" />)
  .add('Popup with animation', () => <PopupStory animated overlay title="test title" />)
