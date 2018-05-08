import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  color: ${props => props.theme.colors.primaryText}
  padding: 10px
`
const Title = styled.div`
  font-size: 44px;
  font-weight: 300;
  text-align: center;
`
const Text = styled.div`
  font-size: 24px;
  text-align: center;
`

const SettingsContainer: React.SFC = () => (
  <Wrapper>
    <Title>Under construction</Title>
    <Text>Will be added soon 🛠️</Text>
  </Wrapper>
)

export default SettingsContainer
