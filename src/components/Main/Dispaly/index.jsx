import { Button } from 'antd';
import React, { useState } from 'react';
import './index.less'
import Question from './Question';

// 陈列题目的组件，需要传入 题目对象
export default function Display(props) {
  console.log(props);
  const { ques } = props;
  const item = ques[0]
  console.log(item)
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
      {
        !!item ? <Question ques={item} handleAns={handleAns} /> : <div>Loding...</div>
      }
      <hr />
      <div style={{ display: show ? '' : 'none' }} className='_ans'>{item ? item.ans : 'Loading...'}</div>
      <Button onClick={verification}>提交结果</Button>
    </div>
  )
}

