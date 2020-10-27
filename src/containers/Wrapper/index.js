import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Row, Col, Layout } from 'antd';

export const Wrapper = ({ children, inLogin }) => {
  const router = useRouter();
  const { Header, Footer, Content } = Layout;

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", background: '#f0f2f5' }}>
          <Col span={6}>
            <Link as="/" href="/">
              <a>
                <img
                  src="https://app.clickup.com/assets/images/brand/clickup_color-new.svg"
                  width="130px"
                  alt="image"
                />
              </a>
            </Link>
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
        </Header>
        <Content>
          {children}
        </Content>
        <Footer style={{ color: '#fff', background: '#1e2328', textAlign: 'center' }}>
          This is footer
        </Footer>
      </Layout>
    </>
  )
}
