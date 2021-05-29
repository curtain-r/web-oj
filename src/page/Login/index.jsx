import React, { useState } from 'react';
import { Button } from 'antd';
import './index.css';

import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

export default function Login() {
  // showBox 用于控制显示登陆表单还是注册表单
  const [showBox, setShowBox] = useState('login');
  const renderBox = showBox === 'login' ? LoginForm : RegisterForm;
  // 切换至登录或者注册
  function toAnther() {
    setShowBox(showBox === 'login' ? 'register' : 'login');
  }
  return (
    <div className='loginWrap'>
      <Button onClick={toAnther}>{showBox === 'login' ? 'Register' : 'Login'}</Button>
      {/* <div className='backgroundBox'></div> */}
      <div className='login_container'>
        {renderBox()}
      </div>
    </div>
  )
}
