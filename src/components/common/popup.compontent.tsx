import * as React from 'react'
import styled from 'styled-components'
import closeSvg from '../../styles/images/close.svg'

interface IVisible {
  isOpen: boolean
}

const Wrapper = styled.div`
  position: fixed;
  display: inline-block;
  visibility: ${(props: IVisible) => props.isOpen ? 'visible' : 'hidden'};
  max-width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  border: 1px solid rgb(0, 0, 0);
  padding: 20px;
`
const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const HeaderTitle = styled.div`
  color: rgb(1, 85, 147);
  font-family: weld-light, sans-serif;
  font-size: 40px;
`
const Separator = styled.div`
  flex: 1;
`
const CloseButton = styled.div`
  background: url('${closeSvg}') center center;
  cursor: pointer;
  width: 46px;
  height: 46px;
`
const Overlay = styled.div`
  display: inline-block;
  opacity: ${(props: IVisible) => props.isOpen ? 1 : 0};
  visibility: ${(props: IVisible) => props.isOpen ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s;
`

export interface IPopupProps {
  isOpen: boolean
  closeOnEsc?: boolean
  closeOnOverlay?: boolean
  overlay?: boolean
  title?: string
  className?: string
  children?: React.ReactChild
  onRequestClose?: () => void
}

export class Popup extends React.PureComponent<IPopupProps> {
  public static defaultProps = {
    closeOnEsc: true,
    closeOnOverlay: true,
    overlay: false,
  }

  public componentDidMount() {
    document.addEventListener('keydown', this.onEscPress, false)
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscPress, false)
  }

  public onEscPress = (event: any) => {
    const { onRequestClose, closeOnEsc } = this.props
    if (event.keyCode === 27 && closeOnEsc && onRequestClose) {
      onRequestClose()
    }
  }

  public render() {
    const { isOpen, overlay, onRequestClose, title, className, children } = this.props

    return (
      <div>
        <Overlay isOpen={Boolean(isOpen && overlay)} onClick={onRequestClose} />
        <Wrapper className={className} isOpen={isOpen}>
          <Header>
            {title && <HeaderTitle>
              {title}
            </HeaderTitle>}
            <Separator />
            <CloseButton onClick={onRequestClose} />
          </Header>
          <div className="greeting">
            {children}
          </div>
        </Wrapper>
      </div>
    )
  }
}
