import { inject, observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import { FeedPost } from '../components/post'
import { STORE_FEED, STORE_USER } from '../constants'
import { FeedStore, UserStore } from '../stores/'

interface IFeedProps {
  feed: FeedStore
  user: UserStore
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
    padding: 10px 10px 0 10px;
  };
`

@inject(stores => ({ feed: stores[STORE_FEED], user: stores[STORE_USER] }))
@observer
class FeedContainer extends React.Component<IFeedProps> {
  public render() {
    const { feed: { feed }, user: { user } } = this.props

    return (
      <Wrapper>
        {feed.map(post => <FeedPost key={post.id} post={post} user={user} />)}
      </Wrapper>
    )
  }
}

export default FeedContainer
