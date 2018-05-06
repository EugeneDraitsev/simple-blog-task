import { observable } from 'mobx'
import { UserModel } from '../models'

export class UserStore {
  @observable public user: UserModel

  constructor(user: UserModel) {
    this.user = user
  }
}
