import { inject, observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Avatar, Button, Card, PrimaryButton } from '../components'
import { STORE_USERS } from '../constants'
import { UserModel } from '../models'
import { UsersStore } from '../stores'

interface IWriteProps {
  user: UserModel
  usersStore: UsersStore
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  min-height: calc(100vh - 90px);
  padding: 20px 20px 0 20px;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
    padding: 20px 10px 0 10px;
  };
`
const Content = styled(Card)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 60px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const NameContainer = styled.div`
  display: flex;
  width: calc(100% - 20px);
  padding: 10px 0;
  margin-bottom: 10px;
`
const Title = styled.div`
  text-align: center;
  width: calc(100% - 20px);
  font-size: 24px;
  padding: 10px;
  margin-bottom: 10px;
`
const NameInput = styled.input`
  flex: 1;
  font-size: 24px;
  padding: 10px;
  text-transform: capitalize;
  outline: none;
  background: ${(props) => props.theme.colors.primaryBackground};
  color: ${(props) => props.theme.colors.primaryText};
  border: ${(props) => `1px solid ${props.theme.colors.secondaryBackground}`};
  max-width: calc(100% - 80px);
`
const AvatarContainer = styled.div`
  display: flex;
  width: calc(100% - 20px);
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`
const ThemeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`
const ChangeIcon = styled(PrimaryButton)`
  margin-left: 10px;
`
const DarkButton = styled(PrimaryButton)`
  margin-left: 10px;
`

@inject((stores: any) => ({
  user: stores[STORE_USERS].user,
  usersStore: stores[STORE_USERS],
}))
@observer
class SettingsContainer extends React.Component<IWriteProps> {
  public state = {
    name: this.props.user.name,
  }

  public setTheme = (theme: string) => {
    const { usersStore } = this.props
    usersStore.setTheme(theme)
  }

  public render() {
    const { user, usersStore } = this.props
    const { name } = this.state

    return (
      <Wrapper>
        <Content>
          <Title>You can change your name and avatar here</Title>
          <NameContainer>
            <NameInput maxLength={120} value={name} onChange={(e) => this.setState({ name: e.target.value })} />
            <PrimaryButton disabled={!name} onClick={() => usersStore.changeName(name)}>
              Save
            </PrimaryButton>
          </NameContainer>
          <AvatarContainer>
            <Avatar>{user.avatar}</Avatar>
            <ChangeIcon onClick={() => usersStore.generateAvatar()}>Generate new</ChangeIcon>
          </AvatarContainer>
          <ThemeContainer>
            <Button onClick={() => this.setTheme('light')}>Light theme</Button>
            <DarkButton onClick={() => this.setTheme('dark')}>Dark Theme</DarkButton>
          </ThemeContainer>
        </Content>
      </Wrapper>
    )
  }
}

export default SettingsContainer
