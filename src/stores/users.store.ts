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
    this.users = [...this.users, user]
  }

  @action public generateAvatar = () => {
    this.user.avatar = UserModel.generateAvatar()
    this.users[0] = this.user
  }

  @action public changeName = (name: string) => {
    this.user.name = name
    this.users[0] = this.user
  }

  @action public setTheme = (theme: string) => {
    this.user.theme = theme
    this.users[0] = this.user
  }

  @action public toggleTheme = () => {
    this.user.theme = this.user.theme === 'light' ? 'dark' : 'light'
    this.users[0] = this.user
  }
}
