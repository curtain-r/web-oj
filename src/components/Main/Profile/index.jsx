import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

import { Divider, Tag } from 'antd';

import './index.less';
export default function Profile() {
  return (
    <div className='profile'>
      <Avatar size='100'>Avatar</Avatar>
      <div>NickName</div>
      <Divider orientation="center">技能展</Divider>
      <div>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </div>
    </div>
  )
}
