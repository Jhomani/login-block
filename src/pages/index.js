import Link from 'next/link';
import { Button } from 'antd';

export default function Home() {
  return (
    <div className="container">
      <Link as='/login' href="/login">
        <Button type="primary">Login</Button>
      </Link>
      <Link as='/register' href="/register">
        <Button style={{ marginTop: 20 }} type="primary">Sign up</Button>
      </Link>
      <Link as='/terms-conditions' href="/terms-conditions">
        <Button style={{ marginTop: 20 }} type="primary">Term & Conditions</Button>
      </Link>
      <style jsx>{`
        .container {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
