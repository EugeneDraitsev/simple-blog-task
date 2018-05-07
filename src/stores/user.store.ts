import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'
import { UserModel } from '../models'

export class UserStore {
  @persist('object') @observable public user: UserModel

  constructor(user?: UserModel) {
    if (user) {
      this.user = user
    }
  }

  @action
  public setUser = (user: UserModel): void => {
    this.user = user
  }
}
