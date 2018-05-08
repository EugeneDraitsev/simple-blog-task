import * as React from 'react'
import styled from 'styled-components'

interface IAvatar {
  children?: React.ReactChild
  small?: boolean
  className?: string
}

interface ISmall {
  small?: boolean
  className?: string
  theme?: { colors: { activeText: string, avatarBackground: string } }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(p: ISmall) => p.small ? '40px' : '50px'};
  min-height: ${(p: ISmall) => p.small ? '33px' : '50px'};
  border: 2px solid ${(p: ISmall) => p!.theme!.colors.activeText};
  border-radius: 50%;
  background-color: ${(p: ISmall) => p!.theme!.colors.avatarBackground};
`
const Icon = styled.div`
  margin-top: 3px;
  font-size: ${(p: ISmall) => p.small ? '24px' : '32px'};
`

export const Avatar: React.SFC<IAvatar> = ({ className, small, children }) => (
  <Wrapper className={className} small={small}>
    <Icon small={small}>{children}</Icon>
  </Wrapper>
)
