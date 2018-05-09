import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Card, DangerButton, DeleteModal, PrimaryButton } from '../'
import { StoryModel, UserModel } from '../../models'
import { CommentViewsInfo } from './/comment-views-info.component'

interface IWritePagePost {
  story: StoryModel
  user: UserModel
  className?: string
  removePost: (id: number) => void
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 60px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  transition: all 0.5s;
  border: 1px solid transparent;
  flex-wrap: wrap;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 30px;
  text-transform: capitalize;
  @media (max-width: 800px) {
     width: 100%;
     margin-bottom: 20px;
     text-align: center;
  };
`
const Flex = styled.div`
  flex: 1;
  min-width: 10px;
  @media (max-width: 800px) {
    display: none;
  };
`
const CommentInfo = styled(CommentViewsInfo)`
  margin-right: 20px;
`
const Buttons = styled.div`
  display: flex;
  @media (max-width: 800px) {
    margin-top: 20px;
  };
`
const DeleteButton = styled(DangerButton)`
  margin-right: 10px;
`

export class WritePageStory extends React.Component<IWritePagePost> {
  public state = {
    isOpen: false,
  }

  public openModal = () => this.setState({ isOpen: true })
  public closeModal = () => this.setState({ isOpen: false })
  public removePost = () => {
    const { removePost, story } = this.props
    removePost(story.id)
  }

  public render() {
    const { className, story } = this.props

    return (
      <Wrapper className={className}>
        <Title>{story.title}</Title>
        <Flex />
        <CommentInfo story={story} />
        <Buttons>
          <DeleteButton onClick={this.openModal}>Delete</DeleteButton>
          <NavLink to={`edit/${story.id}`}>
            <PrimaryButton>Edit</PrimaryButton>
          </NavLink>
        </Buttons>
        <DeleteModal isOpen={this.state.isOpen} onDelete={this.removePost} onRequestClose={this.closeModal}>
          Are you really want to delete your story?
        </DeleteModal>
      </Wrapper>
    )
  }
}
