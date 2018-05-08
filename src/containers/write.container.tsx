import { inject, observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import { Show } from '../components/common'
import { WritePagePost } from '../components/post'
import { STORE_FEED, STORE_USERS } from '../constants'
import { PostModel, UserModel } from '../models'
import { FeedStore } from '../stores'

interface IWriteProps {
  feed: PostModel[]
  feedStore: FeedStore
  user: UserModel
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  padding: 20px 20px 0 20px;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
    padding: 20px 10px 0 10px;
  };
`
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 90px);
  font-size: 25px;
  font-weight: 300;
`

@inject(stores => ({
  feed: stores[STORE_FEED].feed,
  feedStore: stores[STORE_FEED],
  user: stores[STORE_USERS].user,
}))
@observer
class WriteContainer extends React.Component<IWriteProps> {
  public render() {
    const { feed, user, feedStore } = this.props
    const usersPosts = feed.filter(post => post.author.id === user.id)

    return (
      <Wrapper>
        <Show if={Boolean(usersPosts.length)}>
          <div>
            {usersPosts.map(post => (
              <WritePagePost
                removePost={feedStore.deletePost}
                key={post.id}
                post={post}
                user={user}
              />
            ))}
          </div>
        </Show>
        <Show if={!Boolean(usersPosts.length)}>
          <Text>You have no any stories😿  <br />
            Possibility to add new stories is under construction<br />
            To generate new stories you can clear local storage
          </Text>
        </Show>
      </Wrapper>
    )
  }
}

export default WriteContainer
