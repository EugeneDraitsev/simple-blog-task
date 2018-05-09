import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import { Avatar, UserPostInfo, UserInfo } from '../src/components'
import Theme from '../src/styles/themes/light.theme'

const StoriesWrapper = styled.div`
  min-height: calc(100vh - 20px);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDecorator = story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
)


export default () => {
  return storiesOf('User', module)
    .addDecorator(StyledDecorator)
    .add('Avatar', () => (
      <StoriesWrapper>
        <Avatar>🐊</Avatar>
        <Avatar small>🐣</Avatar>
        <Avatar background="lime">🌔</Avatar>
        <Avatar background="lightblue" small>🌎</Avatar>
      </StoriesWrapper>
    ))
    .add('User info', () => {
      const StyledWrapper = styled(StoriesWrapper)`
      flex-direction: column;
    `
      const StyledUserInfo = styled(UserInfo)`
      background: #349884;
      margin-top: 20px;
    `
      return (
        <StyledWrapper>
          <StyledUserInfo user={{ name: 'Eugene', avatar: '🦖' }} />
          <StyledUserInfo user={{ name: 'Very long name Very long nameVery long nameVery long name', avatar: '🐉' }} />
        </StyledWrapper>
      )
    })
    .add('User post info', () => {
      const StyledWrapper = styled(StoriesWrapper)`
      flex-direction: column;
    `
      return (
        <StyledWrapper>
          <UserPostInfo avatar="⚽" name="User" isYou formattedDate="09.05.2018 03:17" />
          <UserPostInfo avatar="⛄" name="Looooong name" isYou formattedDate="09.05.2018 03:17" />
          <UserPostInfo avatar="🐥" name="Not you" formattedDate="09.05.2018 03:17" />
        </StyledWrapper>
      )
    })
}