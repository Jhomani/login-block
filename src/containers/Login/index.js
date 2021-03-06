import React, { useState, useEffect } from 'react';

import { Wrapper } from '../Wrapper/index';
import Link from 'next/link'

import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import {
  USER_SINGIN_SUCCESS
} from '../../constants/ActionTypes'

export function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const dispach = useDispatch();
  const auth = useSelector(store => store.auth);

  const [formule] = Form.useForm();

  const handleSubmit = async (value) => {
    value.societyId = 'fafc7359-0139-43d7-9d00-1828d90cc407'

    try {
      const response = await fetch('https://dbcolegios.blockchainconsultora.com/users/login', { method: 'post', body: JSON.stringify(value), headers: { Accept: 'application/json', 'Content-Type': 'application/json' } });
      const data = await response.json();
      alert(`this is you Token: ${data.token}`)

      dispach({
        type: USER_SINGIN_SUCCESS,
        payload: {
          tokenUser: data.token,
          dataUser: value
        }
      })

      message.success('Correct datas...')
      formule.resetFields();

      setForm(value);

    } catch (err) {
      console.log(err)
    }
  }

  console.log(auth)

  useEffect(() => {
    message.success('the page was loaded')
  }, []);

  return (
    <Wrapper inLogin>
      <div className="login">
        <div className="login__card" >
          <h1 className="login__title">Welcome back!</h1>
          <Form layout="vertical" onFinish={handleSubmit} form={formule} name="control-hooks">
            <Form.Item label="Email:" name="email">
              <Input
                type="email"
                placeholder="Enter your email"
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Password:"
              name="password"
            >
              <div className="login__input">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  size="large"
                />
                <Link as="/remember-password" href="/remember-password">
                  <a>Forgot Password?</a>
                </Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ height: 40, marginBottom: 10 }}
                type="primary"
                htmlType="submit"
                block
              >Login</Button>
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
          height: calc(100vh - 137px);
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
    </Wrapper >
  )
}