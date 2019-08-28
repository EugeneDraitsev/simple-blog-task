import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  color: ${(props) => props.theme.colors.primaryText}
`
const ErrorCode = styled.div`
  font-size: 64px;
  font-weight: 300;
`
const Text = styled.div`
  font-size: 24px;
`

const ErrorContainer: React.SFC = () => (
  <Wrapper>
    <ErrorCode>404</ErrorCode>
    <Text>Page Not Found 😿</Text>
  </Wrapper>
)

export default ErrorContainer
