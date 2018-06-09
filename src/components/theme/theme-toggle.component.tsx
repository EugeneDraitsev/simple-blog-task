import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { Toggle } from '../'
import { STORE_USERS } from '../../constants'
import { UsersStore } from '../../stores'

interface IThemeToggle {
  usersStore?: UsersStore
  className?: string
}

@inject(stores => ({ usersStore: stores[STORE_USERS] }))
@observer
export class ThemeToggle extends React.Component<IThemeToggle> {
  public toggleTheme = () => {
    const { usersStore } = this.props
    usersStore!.toggleTheme()
  }

  public render() {
    const { className } = this.props
    const { theme } = this.props.usersStore!.user
    return <Toggle className={className} checked={theme === 'dark'} onChange={this.toggleTheme} />
  }
}
