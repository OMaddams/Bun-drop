import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useFetch } from "../Hooks/useFetch";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { data, isPending, error } = useFetch("http://localhost:3000/users");
  const { signedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  // 1 Capital letter, 1 number, at least 8 letters long
  const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  function usernameOnChange(e) {
    setUsername(e.target.value);
  }
  function passwordOnChange(e) {
    checkMatch(e);
    setPassword(e.target.value);
  }
  function confirmPasswordOnChange(e) {
    checkMatch(e);
    setConfirmPassword(e.target.value);
  }

  function registerOnSubmit(e) {
    e.preventDefault();
    if (passwordError !== "" || username === "" || username.length <= 3) {
      return;
    }

    if (data.findIndex((user) => user.username === username) !== -1) {
      return;
    }

    registerUser();
  }
  function registerUser() {
    const newUser = {
      username: username,
      password: password,
    };

    try {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    } catch (e) {
      setPasswordError("Something went wrong");
    } finally {
      navigate("/login");
    }
  }
  function checkMatch(e) {
    if (e.target.value !== password && e.target.value !== "") {
      setPasswordError("Passwords doesn't match");
    } else {
      setPasswordError("");
    }
  }
  function testPassword() {
    passwordRegex.test(password)
      ? setPasswordError("")
      : setPasswordError("Password doesn't meet requirements");
  }
  useEffect(() => {
    if (signedInUser !== null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="login-container">
        <form
          action=""
          onSubmit={registerOnSubmit}
          className="shipping-container"
          style={{ alignItems: "center" }}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameOnChange}
            className="shipping-inputs"
            required
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={passwordOnChange}
            className="shipping-inputs"
            required
            onBlur={testPassword}
          />
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={confirmPasswordOnChange}
            className="shipping-inputs"
            required
          />
          <label className="password-rules">{passwordError}</label>
          <button
            className="checkout-buttons login-register-button"
            disabled={
              passwordError !== "" || username === "" || username.length <= 3
            }
          >
            Register
          </button>
        </form>
        <Link to={"/login"}>
          <p>Already a member? Login</p>
        </Link>
        <p className="password-rules">
          Password needs to be 8 characters long, have at least one capital
          letter and one number
        </p>
      </div>
    </>
  );
}

export default Register;
