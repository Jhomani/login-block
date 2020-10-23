import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>My app</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
      </Head>

      <div className="login">
        <div className="login__card" >
          <h1 className="login__title">Welcome back!</h1>
          <form className="login__form" autoComplete="off">
            <div className="login__input">
              <label>Email</label>
              <div className="login__input-field">
                <input type="text" placeholder="Enter your email" autoComplete="off" />
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="login__input">
              <label>Password</label>
              <div className="login__input-field">
                <input
                  className="login__input"
                  placeholder="Enter your password"
                  autoComplete="false"
                  type="password"
                />
                <i className="fas fa-lock"></i>
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <input className="login__submit" type="submit" value="Login" />
          </form>
        </div>
        <p className="login__motto">Let's make the work more productive, together.</p>
      </div>

      <style jsx>{`
        .login {
          background: url('https://app-cdn.clickup.com/login-bg.5ff304517621ee7b0287.svg') no-repeat;
          background-position: bottom;
          background-size: cover;
          height: 100vh;
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
        }
        .login__form {
          display: flex;
          height: 62%;
          justify-content: space-around;
          flex-direction: column;
          align-items: center;
        }
        .login__title {
          text-align: center;
          color: #333;
          margin-top: 45px;
        }
        .login__input label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .login__input-field > input {
          padding: 11px 0 11px 40px;
          font-size: 14px;
          width: 350px;
          outline: none;
          border: none;
          border-radius: 8px;
          border: 1px solid #aaa;
        }
        ::placeholder{
          font-size: 13px;
          font-style: italic;
        }
        .login__input-field > input:focus {
          border: 1px solid #777;
        }
        .login__input-field > a {
          position: absolute;
          font-size: 13px;
          text-decoration: none;
          right: 8px;
          top: 50%;
          color: #5f48ea;
          font-style: oblique;
          transform: translateY(-50%);
        }
        .login__input-field {
          position: relative;
        }
        .login__input-field > i {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 10px;
          z-index: 1;
          color: #aaa;
          font-size: 22px;
        }
        .login__submit {
          width: 350px;
          border: none;
          background: #7b68ee;
          color: #fff;
          padding: 13px 0;
          border-radius: 8px;
          margin-top: 10px;
          transition: background .5s
        }
        .login__submit:hover {
          background: #5f48ea;
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

export default Login;