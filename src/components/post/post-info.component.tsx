import * as React from 'react'
import styled from 'styled-components'
import { CommentViewsInfo, UserPostInfo } from '../'
import { PostModel, UserModel } from '../../models'

interface IPostInfo {
  post: PostModel
  user: UserModel
  className?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export class PostInfo extends React.Component<IPostInfo> {
  public render() {
    const { className, post, user } = this.props

    return (
      <Wrapper className={className}>
        <UserPostInfo
          name={post.author.name}
          avatar={post.author.avatar}
          formattedDate={post.formattedDate}
          isYou={post.author.id === user.id}
        />
        <CommentViewsInfo post={post}/>
      </Wrapper>
    )
  }
}
