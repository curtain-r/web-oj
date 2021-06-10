import { Button } from 'antd';
import React, { useState } from 'react';
import './index.less'
import Question from './Question';

export default function Display() {
  const ques = { title: 'san喜欢吃什么?', options: ["西瓜", "葡萄", "香蕉", "都不喜欢"], _ans: 'A', analy: '他就喜欢啊' };

  const [ans, setAns] = useState('');
  const [show, setShow] = useState(false);
  function handleAns(option) {
    setAns(option);
  }
  function verification() {
    setShow(true);
    if (ans === ques._ans) {
      alert('ok');
    } else {
      alert('nonono')
    }
  }
  return (
    <div className='display'>
      <Question ques={ques} handleAns={handleAns} />
      <hr />
      <div style={{ display: show ? '' : 'none' }} className='_ans'>其实整整的卡机flak你辐射大军阀快速减肥安康放假啊来得及flak价格拉高来得及</div>
      <Button onClick={verification}>提交结果</Button>
    </div>
  )
}
