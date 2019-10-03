import { History } from 'history'
import React from 'react'
import loadable from '@loadable/component'
import { Router, Redirect, Route, Switch } from 'react-router-dom'

import { Loading } from '../components/common'
import { SidebarLayout } from '../components/layout'

const FeedRoute = loadable(() => import('./feed.container'), { fallback: <Loading /> })
const PostRoute = loadable(() => import('./story.container'), { fallback: <Loading /> })
const WriteRoute = loadable(() => import('./write.container'), { fallback: <Loading /> })
const EditRoute = loadable(() => import('./edit.container'), { fallback: <Loading /> })
const ErrorRoute = loadable(() => import('./error.container'), { fallback: <Loading /> })
const SettingsRoute = loadable(() => import('./settings.container'), { fallback: <Loading /> })

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
            <Route exact path="/story/:id" component={PostRoute} />
            <Route exact path="/edit/:id" component={EditRoute} />
            <Route exact path="/settings" component={SettingsRoute} />
            <Route component={ErrorRoute} />
          </Switch>
        </SidebarLayout>
      </Router>
    )
  }
}
