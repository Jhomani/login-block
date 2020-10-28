import Link from 'next/link';
import { Button, Layout } from 'antd';

export default function Home() {
  const { Header, Footer, Content } = Layout;

  return (
    <>
      <Layout>
        <Header style={{ color: '#fff', background: '#1e2328', textAlign: 'center' }}>
          this is the header
        </Header>
        <Content style={
          {
            display: 'flex',
            height: 'calc(100vh - 137px)',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center'
          }
        }>
          <h1>this is the home</h1>
          <div style={{ display: 'flex' }}>
            <Link as='/login' href="/login">
              <Button type="primary">Login</Button>
            </Link>
            <Link as='/register' href="/register">
              <Button style={{ marginLeft: 20 }} type="primary">Sign up</Button>
            </Link>
            <Link as='/terms-conditions' href="/terms-conditions">
              <Button style={{ marginLeft: 20 }} type="primary">Term & Conditions</Button>
            </Link>
          </div>
        </Content>
        <Footer style={{ color: '#fff', background: '#1e2328', textAlign: 'center' }}>
          This is the footer
        </Footer>
      </Layout>
    </>
  )
}
