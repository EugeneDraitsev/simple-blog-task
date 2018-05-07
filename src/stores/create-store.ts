import { History } from 'history'
import * as loremIpsum from 'lorem-ipsum'
import { create } from 'mobx-persist'
import { STORE_FEED, STORE_ROUTER, STORE_SIDEBAR, STORE_USER } from '../constants'
import { PostModel, UserModel } from '../models'
import { RouterStore, SidebarStore, UserStore } from './'
import { FeedStore } from './feed.store'

const generateInitialData = async () => {
  const hydrate = create({})

  // initial user for UserStore
  const userResult = hydrate('user', new UserStore())
  const userStore = await userResult
  await userResult.rehydrate()

  if (!userStore.user) {
    const user = new UserModel('Eugene')
    userStore.setUser(user)
  }

  // try to fetch feed from localStorage
  const feedResult = hydrate('feed', new FeedStore([]))
  const feedStore = await feedResult
  await feedResult.rehydrate()

  if (!feedStore.feed.length) {
    // generate authors for posts
    const { user } = userStore
    const user2 = new UserModel('Tyrell Burke')
    const user3 = new UserModel('Ashley Mullins')
    const user4 = new UserModel('Marc Doyle')

    // generate start feed
    const texts = Array.from({ length: 6 }).map(() => loremIpsum(
      {
        count: Math.round(11 * Math.random()) + 2,
        format: 'html',
        paragraphLowerBound: 6,
        paragraphUpperBound: 7,
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        units: 'paragraphs',
      },
    ))

    const titles = Array.from({ length: 6 }).map(() =>
      loremIpsum(({ count: Math.round(3 * Math.random()) + 1, units: 'words' })))

    const post1 = new PostModel(titles[0], texts[0], user)
    const post2 = new PostModel(titles[1], texts[1], user2)
    const post3 = new PostModel(titles[2], texts[2], user3)
    const post4 = new PostModel(titles[3], texts[3], user3)
    const post5 = new PostModel(titles[4], texts[4], user4)
    const post6 = new PostModel(titles[5], texts[5], user4)
    // generate feed
    const feed = [post1, post2, post3, post4, post5, post6]

    feed.forEach(post => feedStore.addPost(post))
    console.log(feedStore)
  }

  return { userStore, feedStore }
}

export async function createStores(history: History) {
  const { userStore, feedStore } = await generateInitialData()

  const sidebarStore = new SidebarStore()
  const routerStore = new RouterStore(history)

  return {
    [STORE_FEED]: feedStore,
    [STORE_SIDEBAR]: sidebarStore,
    [STORE_ROUTER]: routerStore,
    [STORE_USER]: userStore,
  }
}
