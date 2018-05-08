import { History } from 'history'
import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Router } from 'react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { SidebarLayout } from '../components'

const Loading = () => <div />

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
            <Route component={ErrorRoute} />
          </Switch>
        </SidebarLayout>
      </Router>
    )
  }
}
