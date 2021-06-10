import React from 'react';

import Navigate from './Nav'
import Display from './Dispaly';
import Profile from './Profile';

import './index.less';
export default function Main() {
  return (
    <div className='main'>
      <Navigate />
      <Display />
      <Profile />
    </div>
  )
}
