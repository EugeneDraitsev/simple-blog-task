import { action, observable } from 'mobx'

export class SidebarStore {
  @observable public isOpen: boolean
  @observable public isSmallScreen: boolean

  constructor() {
    this.isOpen = false
    this.isSmallScreen = false
  }

  @action
  public openSidebar = () => {
    this.isOpen = true
  }

  @action
  public closeSidebar = () => {
    this.isOpen = false
  }

  @action
  public handleMediaQueryChanged = (mq: MediaQueryList) => {
    this.isOpen = false
    this.isSmallScreen = !mq.matches
  }
}
