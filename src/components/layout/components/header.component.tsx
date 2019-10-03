import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Show } from '../../common'
import { UserInfo } from '../../user'
import { ThemeToggle } from '../../theme'
import { UserModel } from '../../../models'
import { MenuLink } from './menu-link.component'

interface ILink {
  to: string
  title: string
  onClick?: () => void
}

interface IHeaderProps {
  links: ILink[],
  user: UserModel,
  isSmallScreen: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  width: 100%;
  box-shadow: ${(props) => props.theme.headerShadow};
  padding: 0 0 0 20px;
  background: ${(props) => props.theme.headerGradient};
  z-index: 3;
`
const Links = styled.div`
  display: flex;
  margin-left: 40px;
`
const HeaderLink = styled(MenuLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  width: 140px;
  height: 70px;
  border: none;
  &.active {
    background-color: rgba(0,0,0,0.2);
  }
  &:focus {
   outline: none;
  }
  &:before {
    display: none;
    position: absolute;
    left: 0;
    top: 66px;
    content: '';
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.colors.activeText}};
  }
  &.active:before {
    display: block;
  }
`
const MenuButton = styled.div`
  color: white;
  font-size: 35px;
  cursor: pointer;
`
const Flex = styled.div`
  flex: 1;
`
const Link = styled(NavLink)`
  cursor: pointer;
`
const StyledToggle = styled(ThemeToggle)`
  transform: scale(0.6);
`

const getLinks = (links: ILink[], closeSidebar: () => void, isSmallScreen: boolean) => {
  if (!isSmallScreen) {
    return (
      <Links>
        {links.map((link) => <HeaderLink closeSidebar={closeSidebar} key={link.title} link={link} />)}
      </Links>
    )
  }
  return null
}

export const Header: React.SFC<IHeaderProps> = ({ links, user, isSmallScreen, closeSidebar, openSidebar }: any) => (
  <Wrapper>
    <Show if={isSmallScreen}>
      <MenuButton className="material-icons" onClick={openSidebar}>menu</MenuButton>
    </Show>
    <Show if={!isSmallScreen}>
      <StyledToggle />
    </Show>
    {getLinks(links, closeSidebar, isSmallScreen)}
    <Flex />
    <Link to="/settings">
      <UserInfo user={user} />
    </Link>
  </Wrapper>
)
