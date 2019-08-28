import React from 'react'
import styled from 'styled-components'

interface IVisible {
  isOpen: boolean
}

const Wrapper = styled.div`
  position: fixed;
  display: inline-block;
  visibility: ${(props: IVisible) => (props.isOpen ? 'visible' : 'hidden')};
  max-width: 80vw;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(p) => p.theme.colors.primaryBackground};
  color: ${(p) => p.theme.colors.primaryText};
  border-radius: 4px;
  padding: 20px;
  z-index: 4;
`
const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`
const HeaderTitle = styled.div`
  font-size: 32px;
`
const Separator = styled.div`
  flex: 1;
`
const Icon = styled.div`
  font-size: 40px;
  line-height: 40px;
  cursor: pointer;
  margin: 0 10px;
`
const Overlay = styled.div`
  display: inline-block;
  opacity: ${(props: IVisible) => (props.isOpen ? 1 : 0)};
  visibility: ${(props: IVisible) => (props.isOpen ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(p) => p.theme.colors.overlay};
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s;
  z-index: 3;
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

export class Modal extends React.PureComponent<IPopupProps> {
  // eslint-disable-next-line react/static-property-placement
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
            {title && (
            <HeaderTitle>
              {title}
            </HeaderTitle>
            )}
            <Separator />
            <Icon className="material-icons" onClick={onRequestClose}>close</Icon>
          </Header>
          <div className="greeting">
            {children}
          </div>
        </Wrapper>
      </div>
    )
  }
}
