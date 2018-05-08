import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Card, DangerButton, DeleteModal, PrimaryButton } from '../'
import { PostModel, UserModel } from '../../models'
import { CommentViewsInfo } from '../post/comment-views-info.component'

interface IWritePagePost {
  post: PostModel
  user: UserModel
  className?: string
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 40px);
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
  };
`
const Flex = styled.div`
  flex: 1;
  min-width: 10px;
`
const CommentInfo = styled(CommentViewsInfo)`
  margin-right: 20px;
`

export class WritePagePost extends React.Component<IWritePagePost> {
  public state = {
    isOpen: false,
  }

  public openModal = () => this.setState({ isOpen: true })
  public closeModal = () => this.setState({ isOpen: false })

  public render() {
    const { className, post } = this.props

    return (
      <Wrapper className={className}>
        <Title>{post.title}</Title>
        <Flex />
        <CommentInfo post={post} />
        <DangerButton onClick={this.openModal}>Delete</DangerButton>
        <NavLink to={`edit/${post.id}`}>
          <PrimaryButton>Edit</PrimaryButton>
        </NavLink>
        <DeleteModal isOpen={this.state.isOpen} onRequestClose={this.closeModal}>
          Are you really want to delete your post?
        </DeleteModal>
      </Wrapper>
    )
  }
}
