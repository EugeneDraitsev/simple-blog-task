import { History } from 'history'
import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Router } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarLayout, Spinner } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  color: ${props => props.theme.colors.primaryText}
`

const Loading = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
)

const FeedRoute = Loadable({
  loader: () => import('./feed.container'),
  loading: Loading,
})

const PostRoute = Loadable({
  loader: () => import('./post.container'),
  loading: Loading,
})

const WriteRoute = Loadable({
  loader: () => import('./write.container'),
  loading: Loading,
})

const EditRoute = Loadable({
  loader: () => import('./edit.container'),
  loading: Loading,
})

const ErrorRoute = Loadable({
  loader: () => import('./error.container'),
  loading: Loading,
})

const SettingsRoute = Loadable({
  loader: () => import('./settings.container'),
  loading: Loading,
})

interface IProps {
  history: History
}

export default class RootContainer extends React.PureComponent<IProps> {
  public render() {
    return (
      <Router history={this.props.history}>
        <SidebarLayout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/feed" />} />
            <Route exact path="/feed" component={FeedRoute} />
            <Route exact path="/write" component={WriteRoute} />
            <Route exact path="/post/:id" component={PostRoute} />
            <Route exact path="/edit/:id" component={EditRoute} />
            <Route exact path="/settings" component={SettingsRoute} />
            <Route component={ErrorRoute} />
          </Switch>
        </SidebarLayout>
      </Router>
    )
  }
}
