import React, { useState, useEffect } from 'react';
import { Wrapper } from '../Wrapper/index';
import { MailOutlined, LockOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, DatePicker, message } from 'antd';

export function Register() {
  const [showPassword, setShowPassport] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (value) => {
    console.log(value);
    setForm({ email: '', name: '' })
    message.success('the datas was submit!!');
  }

  useEffect(() => {
    message.success('the page was loaded')
  }, []);

  return (
    <Wrapper>
      <div className="register">
        <div className="register__card" >
          <h1 className="register__title">Let's go!</h1>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Email:" name="email">
              <Input
                type="email"
                name="email"
                onChange={ev => setForm({ ...form, [ev.target.name]: ev.target.value })}
                value={form.email}
                placeholder="Enter your email"
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item label="Password:" name="password">
              <div className="register__input">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={ev => setForm({ ...form, [ev.target.name]: ev.target.value })}
                  value={form.password}
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
            <Form.Item label="Full Name:" name="name">
              <Input
                type="text"
                name="name"
                onChange={ev => setForm({ ...form, [ev.target.name]: ev.target.value })}
                value={form.name}
                placeholder="Enter your full name"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item label="Age:" name="age">
              <DatePicker
                format="DD/MM/YYYY"
                onChange={ev => setForm({ ...form, [ev.target.name]: ev.target.value })}
                value={setForm.name}
                name="age"
                prefix={<ClockCircleOutlined />}
                size="large"
                on
              />
            </Form.Item>
            <Form.Item>
              <Button style={{ height: 40 }} htmlType="submit" type="primary" block >
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