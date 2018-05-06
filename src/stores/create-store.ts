import { History } from 'history'
import { STORE_ROUTER, STORE_SIDEBAR, STORE_USER } from '../constants'
import { UserModel } from '../models'
import { RouterStore, SidebarStore, UserStore } from './'

const generateInitialData = () => {
  // initial user for UserStore
  const user = new UserModel('Name')

  // const posts =

  return { user }
}

export function createStores(history: History) {
  const sidebarStore = new SidebarStore()
  const routerStore = new RouterStore(history)
  const { user } = generateInitialData()

  const userStore = new UserStore(user)
  return {
    [STORE_SIDEBAR]: sidebarStore,
    [STORE_ROUTER]: routerStore,
    [STORE_USER]: userStore,
  }
}
