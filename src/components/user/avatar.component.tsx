import styled from 'styled-components'

interface IAvatar {
  small?: boolean
}

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p: IAvatar) => p.small ? '40px' : '50px'};
  height: ${(p: IAvatar) => p.small ? '33px' : '50px'};
  font-size: ${(p: IAvatar) => p.small ? '16px' : '22px'};
  border: 2px solid ${props => props.theme.colors.activeText};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.avatarBackground};
`
