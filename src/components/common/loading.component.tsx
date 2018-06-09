import * as React from 'react'
import styled from 'styled-components'
import { Spinner } from './'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  color: ${props => props.theme.colors.primaryText}
`

export const Loading = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
)
