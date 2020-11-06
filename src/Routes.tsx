import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import CreatePost from './pages/CreatePost';
import ListPosts from './pages/ListPosts'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListPosts} />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
