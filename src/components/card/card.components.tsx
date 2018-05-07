import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.primaryText};
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  border-radius: 2px;
`
