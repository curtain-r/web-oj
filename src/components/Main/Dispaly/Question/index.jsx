import React, { useState } from 'react';
import { Radio, Space } from 'antd';

export default function Question(props) {
  const { ques, handleAns } = props;
  function getAns(e) {
    handleAns(e.target.value);
  }
  return (
    <div className='question'>
      <div>{ques.title}</div>
      <br></br>
      <Radio.Group onChange={getAns} >
        <Space direction="vertical">
          <Radio value="A">{ques.options[0]}</Radio>
          <Radio value="B">{ques.options[1]}</Radio>
          <Radio value="C">{ques.options[2]}</Radio>
          <Radio value="D">{ques.options[3]}</Radio>
        </Space>
      </Radio.Group>
    </div>
  )
}


