import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'
import { UserModel } from '../models'

export class UsersStore {
  @persist('object') @observable public user: UserModel
  @persist('list') @observable public users: UserModel[] = []

  constructor(user?: UserModel) {
    if (user) {
      this.user = user
    }
  }

  @action
  public setUser = (user: UserModel): void => {
    this.user = user
  }

  @action
  public addUser = (user: UserModel): void => {
    this.users.push(user)
  }
}
