import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';

let code;
const getCode = (phone) => {
  axios.post('/api1/code', {
    data: { phone }
  }).then(res => { code = res.data.code })
};
const validation = (e) => {
  if (+e.captcha === code) {
    console.log('登录成功')
  } else {
    console.log('验证码错误')
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
const Login = () => {
  return (
    <div
      style={{
        width: 330,
        margin: 'auto',
      }}
    >
      <ProForm
        onFinish={(e) => { validation(e) }}
        submitter={{
          searchConfig: {
            submitText: '登录',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: '44px',
              marginRight: 16,
            }}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          Shuck<sub>web</sub>
        </h1>
        <div
          style={{
            marginTop: 12,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >

        </div>
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined />,
          }}
          name="phone"
          placeholder="请输入手机号"
          rules={[
            {
              required: true,
              message: '请输入手机号!',
            },
            {
              pattern: /^1\d{10}$/,
              message: '不合法的手机号格式!',
            },
          ]}
        />
        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <MailOutlined />,
          }}
          captchaProps={{
            size: 'large',
          }}
          phoneName="phone"
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码',
            },
          ]}
          placeholder="请输入验证码"
          onGetCaptcha={async (phone) => {
            await getCode(phone);
            message.success(`手机号 ${phone} 验证码发送成功!`);
          }}
        />
      </ProForm>
    </div>
  );
};

export default Login;