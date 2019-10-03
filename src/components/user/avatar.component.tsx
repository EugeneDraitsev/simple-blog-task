import React from 'react'
import styled from 'styled-components/macro'

interface IAvatar {
  children?: React.ReactChild
  small?: boolean
  className?: string
  background?: string
}

interface ISmall {
  small?: boolean
  className?: string
  theme?: { colors: { avatarBorder: string, avatarBackground: string } }
  background?: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(p: ISmall) => (p.small ? '33px' : '50px')};
  min-height: ${(p: ISmall) => (p.small ? '33px' : '50px')};
  border: 2px solid ${(p: ISmall) => p!.theme!.colors.avatarBorder};
  border-radius: 50%;
  background-color: ${(p: ISmall) => p.background || p!.theme!.colors.avatarBackground};
`
const Icon = styled.div`
  line-height: ${(p: ISmall) => (p.small ? '24px' : '32px')}; ;
  font-size: ${(p: ISmall) => (p.small ? '24px' : '32px')};
`

export const Avatar: React.SFC<IAvatar> = ({ className, small, background, children }: any) => (
  <Wrapper background={background} className={className} small={small}>
    <Icon small={small}>{children}</Icon>
  </Wrapper>
)
