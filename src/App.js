import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'

import Home from './Home'
import UserList from './components/users/UserList'
import UserShow from './components/users/UserShow'
import PostList from './components/posts/PostList'
import PostShow from './components/posts/PostShow'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Hello</h2>
       <Link to="/">Home</Link>|<Link to="/users">Users</Link>|<Link to="/posts">Posts</Link>
        
       <Route path="/" component={Home} exact={true}/>
       <Route path="/users" component={UserList} exact={true}/>
       <Route path="/users/:id" component={UserShow}/>
       <Route path="/posts" component={PostList} exact={true}/>
       <Route path="/Posts/:id" component={PostShow}/>
      </div>
    </BrowserRouter>
  );
}

export default App;