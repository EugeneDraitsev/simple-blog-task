import { inject, observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Show } from '../components/common'
import { PrimaryButton } from '../components/controls'
import { WritePageStory } from '../components/stories'
import { STORE_FEED, STORE_ROUTER, STORE_USERS } from '../constants'
import { StoryModel, UserModel } from '../models'
import { FeedStore, RouterStore } from '../stores'

interface IWriteProps {
  feed: StoryModel[]
  feedStore: FeedStore
  router: RouterStore
  user: UserModel
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  min-height: calc(100vh - 90px);
  padding: 20px 20px 0 20px;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
    padding: 20px 10px 0 10px;
  };
`
const StoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 300;
`

@inject((stores: any) => ({
  feed: stores[STORE_FEED].feed,
  feedStore: stores[STORE_FEED],
  router: stores[STORE_ROUTER],
  user: stores[STORE_USERS].user,
}))
@observer
class WriteContainer extends React.Component<IWriteProps> {
  public addNewStory = () => {
    const { user, router, feedStore } = this.props
    const newStory = new StoryModel('', '', user.id)
    feedStore.addDraftStory(newStory)
    router.push(`/edit/${newStory.id}`)
  }

  public render() {
    const { feed, user, feedStore } = this.props
    const usersPosts = feed.filter((story) => story.author.id === user.id)

    return (
      <Wrapper>
        <PrimaryButton onClick={this.addNewStory}>Add New Story 📝</PrimaryButton>
        <StoriesWrapper>
          <Show if={Boolean(usersPosts.length)}>
            <div>
              {usersPosts.map((story) => (
                <WritePageStory
                  removePost={feedStore.deleteStory}
                  key={story.id}
                  story={story}
                  user={user}
                />
              ))}
            </div>
          </Show>
          <Show if={!usersPosts.length}>
            <Text>You don&apos;t have any stories yet</Text>
          </Show>
        </StoriesWrapper>
      </Wrapper>
    )
  }
}

export default WriteContainer
