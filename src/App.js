import React from 'react';
import { Link, Route } from 'react-router-dom';

// import axios from 'axios';
// // Comments 不完善
// import Comments from './components/Comments';

import Login from './components/Login';
import Navigate from './components/Nav';
import ResizeCodeMirror from './components/ResizeCodeMirror';
import ReactAce from './components/ReactAce';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.less';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Link to='/login'>Login</Link>
      <Link to='/navigate'>Navigate</Link>
      <Link to='/code1'>Code</Link>
      <Link to='/code2'>React ace</Link>

      <Route path='/login' component={Login} />
      <Route path='/navigate' component={Navigate} />
      <Route path='/code1' component={ResizeCodeMirror} />
      <Route path='/code2' component={ReactAce} />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <div>jasdjf</div>
      <Footer />
    </div>
  )
}

