import * as React from 'react'
import styled from 'styled-components'
import { Show } from '../common'
import { Avatar } from './'

interface IUserPostInfo {
  avatar: string
  name: string
  isYou: boolean
  formattedDate: string
  className?: string
}

const Wrapper = styled.div`
  display: flex;
  width: 175px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  height: 45px;
  margin-left: 10px;
`
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 115px;
`
const Name = styled.div`
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100px;
  white-space: nowrap;
`
const Date = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.secondaryText}
`
const You = styled.div`
  font-weight: bold;
  margin-left: 5px;
`

export const UserPostInfo: React.SFC<IUserPostInfo> =
  ({ className, avatar, name, isYou, formattedDate }) => (
    <Wrapper className={className}>
      <Avatar>{avatar}</Avatar>
      <Info>
        <NameWrapper>
          <Name>{name}</Name>
          <Show if={isYou}>
            <You>(you)</You>
          </Show>
        </NameWrapper>
        <Date>{formattedDate}</Date>
      </Info>
    </Wrapper>
  )
