import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My app</title>
      </Head>
      <Link as='/login' href="/login">
        <button>
          go to login
        </button>
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
