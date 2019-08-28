import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'

import { ButtonsModalStory, ModalStory } from './modal.story'
import getStoriesStory from './stories.story'
import getUserStory from './user.story'
import getCommentsStory from './comments.story'
import { Spinner, Button, DangerButton, PrimaryButton, Toggle } from '../components'
import dark from '../styles/themes/dark.theme'

const StoriesWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.primaryBackground};
  color: ${(p) => p.theme.colors.primaryText};
`

const DarkStyledDecorator = (story) => (
  <ThemeProvider theme={dark}>
    {story()}
  </ThemeProvider>
)

storiesOf('Buttons', module)
  .add('Simple buttons', () => (
    <StoriesWrapper>
      <Button>Default</Button>
      <PrimaryButton>Primary</PrimaryButton>
      <DangerButton>Danger</DangerButton>
      <Button disabled>Disabled</Button>
      <PrimaryButton disabled>Disabled</PrimaryButton>
      <DangerButton disabled>Disabled</DangerButton>
      <Button>🍔 Emoji</Button>
      <PrimaryButton>🍔 Emoji</PrimaryButton>
    </StoriesWrapper>
  ))

storiesOf('Toggle', module)
  .add('Awesome toggle 🌚🌞', () => (
    <StoriesWrapper>
      <Toggle />
    </StoriesWrapper>
  ))

storiesOf('Modal', module)
  .add('Simple modal', () => <ModalStory overlay />)
  .add('Modal with title', () => <ModalStory overlay title="test title" />)
  .add('Modal with animation', () => <ModalStory animated overlay title="test title" />)
  .add('Modal with buttons', () => <ButtonsModalStory />)

storiesOf('Spinner', module)
  .add('Spinners 🌀', () => (
    <StoriesWrapper>
      <Spinner />
      <Spinner strokeWidth={1} />
      <Spinner width={100} height={100} />
      <Spinner color="red" />
    </StoriesWrapper>
  ))

getUserStory()
getStoriesStory()
getCommentsStory()

storiesOf('Dark theme', module)
  .addDecorator(DarkStyledDecorator)
  .add('Dark modal', () => <ButtonsModalStory />)
  .add('Dark spinners 🌀', () => (
    <StoriesWrapper>
      <Spinner />
      <Spinner strokeWidth={1} />
      <Spinner width={100} height={100} />
      <Spinner color="red" />
    </StoriesWrapper>
  ))
