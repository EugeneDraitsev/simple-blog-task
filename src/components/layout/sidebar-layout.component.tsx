import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { push as Menu } from 'react-burger-menu'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeToggle } from '../'
import { STORE_ROUTER, STORE_SIDEBAR, STORE_USERS } from '../../constants'
import { Header, MenuLink } from './components'

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
const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`

@inject(STORE_SIDEBAR, STORE_ROUTER, STORE_USERS)
@observer
export class Layout extends React.Component {
  public mql = window.matchMedia('(min-width: 801px)')
  public links = [
    { show: true, title: 'Feed', to: '/feed' },
    { show: true, title: 'Write', to: '/write' },
    { show: true, title: 'Settings', to: '/settings' },
  ]

  public componentDidMount() {
    const sidebar = this.props[STORE_SIDEBAR]
    const { handleMediaQueryChanged } = sidebar
    this.mql.addListener(handleMediaQueryChanged)
    handleMediaQueryChanged(this.mql)
  }

  public componentWillUnmount() {
    const sidebar = this.props[STORE_SIDEBAR]
    const { handleMediaQueryChanged } = sidebar
    if (this.mql) {
      this.mql.removeListener(handleMediaQueryChanged)
    }
  }

  public render() {
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
              <ToggleWrapper>
                <ThemeToggle />
              </ToggleWrapper>
              {links.map(link => <MenuLink closeSidebar={closeSidebar} key={link.title} link={link} />)}
            </Links>
          </SidebarContent>
        </Menu>
        <Header
          isSmallScreen={isSmallScreen}
          links={links}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          user={user}
        />
        <div id="page-wrap">
          <PageContent>
            {children}
          </PageContent>
        </div>
      </div>
    )
  }
}

export const SidebarLayout = withRouter<any>(Layout)
