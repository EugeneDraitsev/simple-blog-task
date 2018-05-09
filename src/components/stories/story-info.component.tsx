import * as React from 'react'
import styled from 'styled-components'
import { CommentViewsInfo, UserPostInfo } from '../'
import { StoryModel, UserModel } from '../../models'

interface IPostInfo {
  story: StoryModel
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

export class StoryInfo extends React.Component<IPostInfo> {
  public render() {
    const { className, story, user } = this.props

    return (
      <Wrapper className={className}>
        <UserPostInfo
          name={story.author.name}
          avatar={story.author.avatar}
          formattedDate={story.formattedDate}
          isYou={story.author.id === user.id}
        />
        <CommentViewsInfo story={story}/>
      </Wrapper>
    )
  }
}
