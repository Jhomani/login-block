import React, { useState, useEffect } from 'react';
import { Wrapper } from '../Wrapper/index';
import { MailOutlined, LockOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, DatePicker } from 'antd';

export function Register() {
  const [showPassword, setShowPassport] = useState(false);

  return (
    <Wrapper>
      <div className="register">
        <div className="register__card" >
          <h1 className="register__title">Let's go!</h1>
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
              <div className="register__input">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  size="large"
                />
                <span
                  className="login__showPassword"
                  onClick={() => setShowPassport(!showPassword)}
                >Show</span>
              </div>
            </Form.Item>
            <Form.Item label="Full Name:">
              <Input
                type="text"
                name="name"
                placeholder="Enter your full name"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item label="Age:">
              <DatePicker
                format="DD/MM/YYYY"
                name="age"
                prefix={<ClockCircleOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button style={{ height: 40 }} type="primary" block >
                Play With ClickUp
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <style jsx>{`
        .register {
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
        .register__card {
          width: 460px;
          background:#fff;
          border-radius: 8px;
          box-shadow: 0 0 100px -52px rgba(0,0,0, 0.75);
          padding: 0 35px;
        }
        .register__title {
          text-align: center;
          color: #333;
          margin-top: 45px;
          font-weight: 700;
        }
        .register__input .login__showPassword {
          position: absolute;
          font-size: 13px;
          cursor: pointer;
          text-decoration: none;
          right: 8px;
          bottom: 10px;
          color: #5f48ea;
          font-style: oblique;
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