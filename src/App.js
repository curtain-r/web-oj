import React from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';

// import axios from 'axios';
// // Comments 不完善
// import Comments from './components/Comments';

// import Login from './pages/Login';
import ResizeCodeMirror from './components/ResizeCodeMirror';
// import ReactAce from './components/ReactAce';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.less';
import Main from './components/Main';

export default function App() {

  return (
    <div className='container'>
      <Header data />
      &nbsp;
      <Main />

      <Route path='/code1' component={ResizeCodeMirror} />
      {/* <Route path='/code2' component={ReactAce} /> */}
      <Footer />
    </div>
  )
}

