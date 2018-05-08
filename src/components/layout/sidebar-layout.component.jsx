import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { push as Menu } from 'react-burger-menu'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { STORE_ROUTER, STORE_SIDEBAR, STORE_USERS } from '../../constants'
import { MenuLink, Header } from './components'

const PageContent = styled.div`
   margin-top: 70px;
   width: 100%;
   background: ${p => p.theme.colors.basicBackground};
   min-height: calc(100vh - 70px);
`
const SidebarContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 300px;
  height: 100%;
  @media (max-width: 800px) {
    width: 256px;
  }
`
const Links = styled.div`
  flex: 1;
  padding-top: 20px;
  height: calc(100% - 20px);
  background: ${props => props.theme.sidebarGradient};
`

class Layout extends React.Component {
  mql = window.matchMedia('(min-width: 801px)')
  links = [
    { show: true, title: 'Feed', to: '/feed' },
    { show: true, title: 'Write', to: '/write' },
    { show: true, title: 'Settings', to: '/settings' },
  ]

  componentDidMount() {
    const sidebar = this.props[STORE_SIDEBAR]
    const { handleMediaQueryChanged } = sidebar
    this.mql.addListener(handleMediaQueryChanged)
    handleMediaQueryChanged(this.mql)
  }

  componentWillUnmount() {
    const sidebar = this.props[STORE_SIDEBAR]
    const { handleMediaQueryChanged } = sidebar
    if (this.mql) {
      this.mql.removeListener(handleMediaQueryChanged)
    }
  }

  render() {
    const sidebar = this.props[STORE_SIDEBAR]
    const { user } = this.props[STORE_USERS]
    const { children } = this.props
    const { isOpen, isSmallScreen, closeSidebar, openSidebar } = sidebar
    const links = this.links.filter(link => link.show)

    return (
      <div id="outer-container">
        <Menu
          width={isSmallScreen ? 256 : 300}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          isOpen={isOpen}
          onStateChange={props => props.isOpen ? null : closeSidebar()}
        >
          <SidebarContent>
            <Links>
              {links.map(link => <MenuLink closeSidebar={closeSidebar} key={link.title} link={link} />)}
            </Links>
          </SidebarContent>
        </Menu>
        <Header isSmallScreen={isSmallScreen} links={links} openSidebar={openSidebar} user={user} />
        <div id="page-wrap">
          <PageContent>
            {children}
          </PageContent>
        </div>
      </div>
    )
  }
}

// @inject(STORE_SIDEBAR, STORE_ROUTER)
// @withRouter
// @observer
export const SidebarLayout = inject(STORE_SIDEBAR, STORE_ROUTER, STORE_USERS)((withRouter(observer(Layout))))
