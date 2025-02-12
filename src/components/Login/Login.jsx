import "./Login.scss";
import "../../styles/partials/_global.scss";
import user from "../../assets/icons/svg/user.svg";
import password from "../../assets/icons/svg/password.svg";

function Login({ path }) {
  if (path === "login") {
    return (
      <main className="login">
        <section className="login-form-container">
          <div className="login-form-logo">
            <h1 className="logo">BEAT</h1>
          </div>
          <form className="login-form">
            <div className="form-group login-form-group">
              <img src={user} alt="user icon" />
              <input
                type="email"
                className="form-control login-form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group login-form-group">
              <small id="emailHelp" className="text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group login-form-group">
              <img src={password} alt="password icon" />
              <input
                type="password"
                className="form-control login-form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-dark">
              LOGIN
            </button>
          </form>
        </section>
      </main>
    );
  } else if (path === "signup") {
    return (
      <div>
        <h1>Register</h1>
      </div>
    );
  }
}

export default Login;
