import React from 'react';
import { Route, IndexRoute } from 'react-router'; // does not actually navigate to new pages. Just swaps out content on screen based on change in URL.

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
<Route path='/' component={App}>
  <IndexRoute component={PostsIndex} />
  <Route path='posts/new' component={PostsNew} />
  <Route path='posts/:id' component={PostsShow} />
</Route>
);