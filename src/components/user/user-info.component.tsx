import * as React from 'react'
import styled from 'styled-components'
import { UserModel } from '../../models'
import { Avatar } from './'

interface IUserInfo {
  user: UserModel
  className?: string
}

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  min-width: 200px;
  align-items: center;
`
const Name = styled.div`
  color: ${props => props.theme.colors.activeText};
  width: 100px;
  text-align: right;
  padding-right: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const UserInfo: React.SFC<IUserInfo> = ({ user, className }) => {
  return (
    <Wrapper className={className}>
      <Name>{user.name}</Name>
      <Avatar>{user.avatar}</Avatar>
    </Wrapper>
  )
}
