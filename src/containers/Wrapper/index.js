import React from 'react';
import { useRouter } from 'next/router';
import { Button, Row, Col } from 'antd';

export const Wrapper = ({ children, inLogin }) => {
  const router = useRouter();

  return (
    <>
      <Row style={{ padding: "30px 25px" }} justify="center">
        <Col span={6}>
          <img
            src="https://app.clickup.com/assets/images/brand/clickup_color-new.svg"
            width="130px"
            alt="image"
          />
        </Col>
        <Col span={6} offset={12} style={{ textAlign: 'right' }}>
          <span style={{ marginRight: 10 }}>
            {inLogin ? 'Dont have an account?' : 'Already playing with Clickup?'}
          </span>
          <Button
            shape="round"
            type="primary"
            onClick={() => router.push(`/${inLogin ? 'register' : 'login'}`)}
          >
            {inLogin ? 'Sign up' : 'Login'}
          </Button>
        </Col>
      </Row>
      {children}
    </>
  )
}
