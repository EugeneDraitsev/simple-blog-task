import { isEmpty, random, times } from 'lodash'
import * as loremIpsum from 'lorem-ipsum'
import { create } from 'mobx-persist'
import { CommentModel, PostModel, UserModel } from '../models'
import { CommentsStore, FeedStore, UsersStore } from '../stores'

const USERS = 5
const POSTS = 10
const COMMENTS = [1, 4]

export const generateInitialData = async () => {
  // Load or generate stores
  const usersStore = await getUsersStore()
  const feedStore = await getFeedStore()
  const commentsStore = await getCommentsStore(usersStore, feedStore)

  return { usersStore, feedStore, commentsStore }
}

const getUsersStore = async () => {
  const hydrate = create({})

  // initial user for UsersStore
  const usersResult = hydrate('user', new UsersStore())
  const usersStore = await usersResult
  await usersResult.rehydrate()

  if (!usersStore.user) {
    const user = new UserModel('Eugene')
    usersStore.setUser(user)
  }

  if (isEmpty(usersStore.users)) {
    usersStore.addUser(usersStore.user)
    const names = times(USERS).map(() =>
      loremIpsum(({ count: random(1, 3), units: 'words' })))

    names.forEach(name => usersStore.addUser(new UserModel(name)))
    console.log(usersStore.users)
  }

  return usersStore
}

const getFeedStore = async () => {
  const hydrate = create({})

  // try to fetch feed from localStorage
  const feedResult = hydrate('feed', new FeedStore([]))
  const feedStore = await feedResult
  await feedResult.rehydrate()

  if (isEmpty(feedStore.feed)) {
    // generate start feed data
    const texts = times(POSTS).map(() => loremIpsum(
      { count: random(6, 17), format: 'html', units: 'paragraphs' }))

    const titles = times(POSTS).map(() =>
      loremIpsum(({ count: Math.round(3 * Math.random()) + 1, units: 'words' })))

    // put data into feed
    titles.forEach((title, i) =>
      feedStore.addPost(new PostModel(title, texts[i], random(1, USERS))))
  }

  return feedStore
}

const getCommentsStore = async (usersStore: UsersStore, feedStore: FeedStore) => {
  const hydrate = create({})

  // try to fetch feed from localStorage
  // try to fetch comments from localStorage
  const commentsResult = hydrate('comments', new CommentsStore([]))
  const commentsStore = await commentsResult
  await commentsResult.rehydrate()

  if (isEmpty(commentsStore.comments)) {
    feedStore.feed.forEach((post) => {
      const amount = random(COMMENTS[0], COMMENTS[1])

      const postCommentsText = times(amount).map(() =>
        loremIpsum(({ count: random(2, 3), units: 'sentences' })))

      // put data into comments
      postCommentsText.forEach(x =>
        commentsStore.addComment(new CommentModel(x, random(1, USERS), post.id)))

    })
  }

  return commentsStore
}
