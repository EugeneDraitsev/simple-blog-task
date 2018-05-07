import * as React from 'react'
import styled from 'styled-components'
import { Avatar, Show } from '../'
import { PostModel, UserModel } from '../../models'

interface IPostInfo {
  post: PostModel
  user: UserModel
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
const Name = styled.div`
  display: flex;
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

export class PostInfo extends React.Component<IPostInfo> {
  public render() {
    const { className, post, user } = this.props

    return (
      <Wrapper className={className}>
        <Avatar>{post.author.avatar}</Avatar>
        <Info>
          <Name>
            {post.author.name}
            <Show if={user.id === post.author.id}>
              <You>(you)</You>
            </Show>
          </Name>
          <Date>{post.formattedDate}</Date>
        </Info>
      </Wrapper>
    )
  }
}
