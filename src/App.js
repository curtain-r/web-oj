import React from 'react';
import { Link, Route } from 'react-router-dom';

import axios from 'axios';
// Comments 不完善
import Comments from './components/Comments';

import Login from './components/Login';
import Navigate from './components/Nav';
import ResizeCodeMirror from './components/ResizeCodeMirror';


export default function App() {
  return (
    <>
      <Link to='/login'>Login</Link>
      <Link to='/navigate'>Navigate</Link>
      <Link to='code'>Code</Link>

      <Route path='/login' component={Login} />
      <Route path='/navigate' component={Navigate} />
      <Route path='/code' component={ResizeCodeMirror} />
    </>
  )
}

