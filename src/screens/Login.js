/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Form from "../components/Form";
import { useAuth } from "../contexts/auth-context";

const Login = () => {
  const { signIn } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function login(formData) {
    try {
      setError("");
      await signIn(formData.email, formData.password);
      navigate("/me");
    } catch (error) {
      console.error(error);
      setError("Login failed!", error.message);
    }
  }

  return (
    <div
      css={css`
        width: 450px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
      `}
    >
      <h2>Login</h2>
      <Alert>{error}</Alert>
      <Form onSubmit={login} buttonText="Login" />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          Do not have account? <Link to="/signup">signup</Link>
        </div>
        <div>
          Forgot password? <Link to="/reset-password">reset</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
