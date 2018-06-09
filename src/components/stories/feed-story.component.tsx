import { lighten } from 'polished'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from '../'
import { StoryModel, UserModel } from '../../models'
import { StoryInfo } from './'

interface IUserInfo {
  story: StoryModel
  user: UserModel
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
  cursor: pointer;
  transition: all 0.5s;
  border: 1px solid transparent;
  &:hover {
    background: ${props => lighten(0.1, props.theme.colors.primaryBackground)};
    border: ${props => `1px solid ${lighten(0.2, props.theme.colors.primaryBorder)}`};
  }
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 48px;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
  line-height: 54px;
  max-height: 162px;
  max-width: 100%;
`
const Text = styled.div`
  font-size: 16px;
  max-width: 100%;
  font-weight: 300;
  line-height: 20px;
`
const StyledLink = styled(NavLink)`
  display: block;
  max-width: 100%;
  width: 100%;
`

export class FeedStory extends React.Component<IUserInfo> {
  public render() {
    const { className, story, user } = this.props

    return (
      <Wrapper className={className}>
        <StyledLink to={`/story/${story.id}`}>
          <Title>{story.title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: story.textPreview }} />
          <StoryInfo story={story} user={user} />
        </StyledLink>
      </Wrapper>
    )
  }
}
