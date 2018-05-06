import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LinkContent = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  color: #FFFFFF;
  border-bottom: 1px solid rgba(0,0,0,0);
  border-top: 1px solid rgba(0,0,0,0);
  &.active {
    background-color: rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(0,0,0,0.2);
    border-top: 1px solid rgba(0,0,0,0.2);
  }
  &:focus {
   outline: none;
  }
  &:before {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 5px;
    height: 54px;
    background-color: ${props => props.theme.colors.activeText}};
  }
  &.active:before {
    display: block;
  }
`

interface IMenuLinkProps {
  link: { to: string, title: string, onClick?: () => void }
  className?: string
  closeSidebar: () => void
}

export const MenuLink: React.SFC<IMenuLinkProps> = ({ className, link, closeSidebar }) => {
  return (
    <LinkContent className={className} to={link.to} onClick={closeSidebar}>
      {link.title}
    </LinkContent>
  )
}
