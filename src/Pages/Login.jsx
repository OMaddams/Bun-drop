import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { UserContext } from "../App";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { data, isPending, error } = useFetch("http://localhost:3000/users");
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  function loginOnSubmit(e) {
    e.preventDefault();
    let userIndex = data.findIndex((user) => user.username === username);
    if (userIndex === -1) {
      setLoginError(true);
      return;
    }

    if (data[userIndex].password !== password) {
      setLoginError(true);
      return;
    }
    setSignedInUser(data[userIndex]);
    navigate("/");
  }
  function usernameOnChange(e) {
    setUsername(e.target.value);
  }
  function passwordOnChange(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <div className="login-container">
        <form action="" onSubmit={loginOnSubmit} className="shipping-container">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameOnChange}
            className="shipping-inputs"
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={passwordOnChange}
            className="shipping-inputs"
            required
          />
          <button className="checkout-buttons login-register-button">
            Login
          </button>
        </form>
        <Link to={"/register"}>
          <p>Not a member? Register</p>
        </Link>
        <p>{signedInUser && signedInUser.username}</p>
      </div>
    </>
  );
}

export default Login;
