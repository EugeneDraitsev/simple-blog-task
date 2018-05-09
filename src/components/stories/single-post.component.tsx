import { isEmpty } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { Card, Show } from '../'
import { CommentModel, StoryModel, UserModel } from '../../models'
import { AddComment, Comment } from '../comment'
import { StoryInfo } from './'

interface ISinglePost {
  story: StoryModel
  user: UserModel
  comments: CommentModel[]
  className?: string
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 40px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 48px;
  text-transform: capitalize;
  word-break: break-all;
`
const Text = styled.div`
  max-width: 100%;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`
const Comments = styled.div`
  margin-top: 30px;
  width: 100%;
`
const NoComments = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: ${p => p.theme.colors.secondaryText};
`

export class SingleStory extends React.Component<ISinglePost> {
  public render() {
    const { className, story, user, comments } = this.props
    const storyComments = comments.filter(x => x.storyId === story.id)

    return (
      <Wrapper className={className}>
        <Title>{story.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: story.text }} />
        <StoryInfo story={story} user={user} />
        <Comments>
          {storyComments.map(comment =>
            <Comment key={comment.id} comment={comment} user={user} />)
          }
        </Comments>
        <Show if={isEmpty(storyComments)}>
          <NoComments>
            There are no comments here yet.
          </NoComments>
        </Show>
        <AddComment story={story} user={user} />
      </Wrapper>
    )
  }
}
