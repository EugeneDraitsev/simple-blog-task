import { inject, observer } from 'mobx-react'
import React from 'react'
import { Toggle } from '../controls'
import { STORE_USERS } from '../../constants'
import { UsersStore } from '../../stores'

interface IThemeToggle {
  usersStore?: UsersStore
  className?: string
}

@inject((stores: any) => ({ usersStore: stores[STORE_USERS] }))
@observer
export class ThemeToggle extends React.Component<IThemeToggle> {
  public toggleTheme = () => {
    const { usersStore } = this.props
    document.body.classList.add('disable-transitions')
    usersStore!.toggleTheme()
    setTimeout(() => document.body.classList.remove('disable-transitions'), 300)
  }

  public render() {
    const { className } = this.props
    const { theme } = this.props.usersStore!.user
    return <Toggle className={className} checked={theme === 'dark'} onChange={this.toggleTheme} />
  }
}
