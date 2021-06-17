import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navigate from './Nav'
import Display from './Dispaly';
import Profile from './Profile';

import './index.less';
export default function Main(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // 在 Main 组件渲染完成后 将所有题目下载下来
    axios.get('/api1/getQues').then(res => {
      setData(res.data);
    })
  }, [])
  return (
    <div className='main'>
      <Navigate />
      <Display ques={data} />
      <Profile />
    </div>
  )
}
