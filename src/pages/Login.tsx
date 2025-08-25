import ThemeToggle from "../components/ui/theme-toggle";

function Login() {
  return (
    <div className="container">
      <div className="login__content">
        <img src="/img/banner.webp" alt="login image" className="login__img" />

        <form action="" className="login__form">
          <div>
            <h1 className="login__title">
              <div>
                <span>Welcome</span> Back
              </div>

              <ThemeToggle />
            </h1>
            <p className="login__description">
              Welcome! Please login to continue.
            </p>
          </div>

          <div>
            <div className="login__inputs">
              <div>
                <label htmlFor="input-email" className="login__label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="login__input"
                  id="input-email"
                />
              </div>

              <div>
                <label htmlFor="input-pass" className="login__label">
                  Password
                </label>

                <div className="login__box">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="login__input"
                    id="input-pass"
                  />
                  <i className="ri-eye-off-line login__eye" id="input-icon"></i>
                </div>
              </div>
            </div>

            <div className="login__check">
              <input
                type="checkbox"
                className="login__check-input"
                id="input-check"
              />
              <label htmlFor="input-check" className="login__check-label">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <div className="login__buttons">
              <button className="login__button">Log In</button>
              <button className="login__button login__button-ghost">
                Sign Up
              </button>
            </div>

            <a href="#" className="login__forgot">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
