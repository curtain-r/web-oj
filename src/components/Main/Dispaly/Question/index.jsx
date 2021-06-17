import React from 'react';
// import { Radio, Space } from 'antd';

export default function Question(props) {
  const { ques } = props;
  // function getAns(e) {
  //   handleAns(e.target.value);
  // }
  return (
    <div className='question'>
      <div>{ques.content}</div>
      <br></br>
      <div>{ques.option}</div>
      {/* <Radio.Group onChange={getAns} >
        <Space direction="vertical">
          <Radio value="A">{ques.option[0]}</Radio>
          <Radio value="B">{ques.option[1]}</Radio>
          <Radio value="C">{ques.option[2]}</Radio>
          <Radio value="D">{ques.option[3]}</Radio>
        </Space>
      </Radio.Group> */}
    </div>
  )
}


