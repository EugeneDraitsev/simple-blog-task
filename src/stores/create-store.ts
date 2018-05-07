import { History } from 'history'
import { STORE_COMMENTS, STORE_FEED, STORE_ROUTER, STORE_SIDEBAR, STORE_USERS } from '../constants'
import { generateInitialData } from '../utils'
import { CommentsStore, RouterStore, SidebarStore, UsersStore } from './'
import { FeedStore } from './feed.store'

export interface IStores {
  [STORE_COMMENTS]: CommentsStore
  [STORE_FEED]: FeedStore
  [STORE_SIDEBAR]: SidebarStore
  [STORE_ROUTER]: RouterStore
  [STORE_USERS]: UsersStore
}

export async function createStores(history: History) {
  const { usersStore, feedStore, commentsStore } = await generateInitialData()

  const sidebarStore = new SidebarStore()
  const routerStore = new RouterStore(history)

  return {
    [STORE_COMMENTS]: commentsStore,
    [STORE_FEED]: feedStore,
    [STORE_SIDEBAR]: sidebarStore,
    [STORE_ROUTER]: routerStore,
    [STORE_USERS]: usersStore,
  }
}
