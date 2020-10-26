import React, { useState, useEffect } from 'react';
import { Wrapper } from '../Wrapper/index';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';

export function Login() {
  const [form, setForm] = useState({ email: '', password: '' })

  useEffect(() => {

  }, []);

  return (
    <Wrapper inLogin>
      <div className="login">
        <div className="login__card" >
          <h1 className="login__title">Welcome back!</h1>
          <Form layout="vertical">
            <Form.Item label="Email:">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item label="Password:">
              <div className="login__input">
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  size="large"
                />
                <a href="#">Forgot Password?</a>
              </div>
            </Form.Item>
            <Form.Item>
              <Button style={{ height: 40 }} type="primary" block >Login</Button>
            </Form.Item>
          </Form>
        </div>
        <p className="login__motto">Let's make the work more productive, together.</p>
      </div>

      <style jsx>{`
        .login {
          background: url('https://app-cdn.clickup.com/login-bg.5ff304517621ee7b0287.svg') no-repeat;
          background-position: bottom;
          background-size: cover;
          height: calc(100vh - 92px);
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .login__card {
          width: 460px;
          height: 380px;
          background:#fff;
          border-radius: 8px;
          box-shadow: 0 0 100px -52px rgba(0,0,0, 0.75);
          padding: 0 35px;
        }
        .login__title {
          text-align: center;
          color: #333;
          margin-top: 45px;
          font-weight: 700;
        }
        .login__input a {
          position: absolute;
          font-size: 13px;
          text-decoration: none;
          right: 8px;
          bottom: 10px;
          color: #5f48ea;
          font-style: oblique;
        }
        .login__motto {
          color: #fff;
          letter-spacing: 2px;
          font-size: 11px;
          mergin-top: 25px;
          font-weight: 600;
          margin-top: 25px;
          text-transform: uppercase;
        }

        @media (max-width: 500px) {
          .login__card {
            width: 400px;
          }
        }
      `}</style>
    </Wrapper>
  )
}