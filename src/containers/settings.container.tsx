import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  color: ${props => props.theme.colors.primaryText}
`
const Title = styled.div`
  font-size: 44px;
  font-weight: 300;
`
const Text = styled.div`
  font-size: 24px;
`

const SettingsContainer: React.SFC = () => (
  <Wrapper>
    <Title>Under construction</Title>
    <Text>Will be added soon 🛠️</Text>
  </Wrapper>
)

export default SettingsContainer
