import { inject, observer } from 'mobx-react'
import { opacify } from 'polished'
import * as React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../'
import { STORE_COMMENTS } from '../../constants'
import { CommentModel, StoryModel, UserModel } from '../../models'
import { CommentsStore } from '../../stores'

interface IAddComment {
  commentsStore?: CommentsStore
  user: UserModel
  story: StoryModel
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: calc(100% - 40px);
  height: auto;
  padding: 0 20px;
  transition: background-color 0.5s;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 2px;
    margin: 0;
  }
`
const Textarea = styled.textarea`
  width: calc(100% - 20px);
  overflow: hidden;
  min-height: 50px;
  padding: 10px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  resize: none;
  outline: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: ${props => `1px solid ${opacify(0.6, props.theme.colors.secondaryText)}`};
  background: ${props => props.theme.colors.activeBackground};
  color: ${props => props.theme.colors.primaryText};
`
const Footer = styled.div`
  margin-top: 10px;
  width: calc(100% + 2px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Counter = styled.div`
  margin-right: 20px;
  font-size: 12px;
  color: ${props => props.theme.colors.secondaryText};
`

@inject(stores => ({ commentsStore: stores[STORE_COMMENTS] }))
@observer
export class AddComment extends React.Component<IAddComment> {
  public state = {
    comment: '',
  }

  public setComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event

    target.style.height = '0'
    target.style.height = `${target.scrollHeight}px`

    const comment = target.value.slice(0, 1000)
    this.setState({ comment })
  }

  public addComment = () => {
    const { commentsStore, user, story } = this.props
    const { comment } = this.state

    commentsStore!.addComment(new CommentModel(comment, user.id, story.id))
    this.setState({ comment: '' })

  }

  public render() {
    const { comment } = this.state

    return (
      <Wrapper>
        <Textarea
          value={comment}
          onChange={this.setComment}
        />
        <Footer>
          <Counter>{comment.length} / 1000</Counter>
          <PrimaryButton disabled={!comment.length} onClick={this.addComment}>Add Comment</PrimaryButton>
        </Footer>
      </Wrapper>
    )
  }
}
