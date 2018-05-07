import * as React from 'react'
import styled from 'styled-components'
import { UserInfo } from '../../'
import { UserModel } from '../../../models'
import { MenuLink } from './'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(210, 210, 210, 0.5);
  padding: 0 0 0 20px;
  background: ${props => props.theme.headerGradient};
  z-index: 3;
  @media (max-width: 800px) {
    background: ${props => props.theme.colors.primary};
  };
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
    background-color: ${props => props.theme.colors.activeText}};
  }
  &.active:before {
    display: block;
  }
`
const Logo = styled.div`
  height: 70px;
  width: 90px;
  background: url("/images/logo.svg") center no-repeat;
  background-size: contain;
  @media (max-width: 800px) {
    cursor: pointer;
  };
`
const Flex = styled.div`
  flex: 1;
`

interface ILink {
  to: string
  title: string
  onClick?: () => void
}

interface IMenuLinkProps {
  links: ILink[],
  user: UserModel,
  isSmallScreen: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

const getLinks = (links: ILink[], closeSidebar: () => void, isSmallScreen: boolean) => {
  if (!isSmallScreen) {
    return (
      <Links>
        {links.map(link => <HeaderLink closeSidebar={closeSidebar} key={link.title} link={link} />)}
      </Links>
    )
  }
  return null
}

const onLogoClick = (isSmallScreen: boolean, openSidebar: () => void) => {
  if (isSmallScreen) {
    openSidebar()
  }
}

export const Header: React.SFC<IMenuLinkProps> = ({ links, user, isSmallScreen, closeSidebar, openSidebar }) => {
  return (
    <Wrapper>
      <Logo onClick={() => onLogoClick(isSmallScreen, openSidebar)} />
      {getLinks(links, closeSidebar, isSmallScreen)}
      <Flex />
      <UserInfo user={user} />
    </Wrapper>
  )
}