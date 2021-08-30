/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Form from "../components/Form";
import { useAuth } from "../contexts/auth-context";

const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function register(formData) {
    try {
      setError("");
      await signup(formData.email, formData.password);
      navigate("/me");
    } catch (error) {
      setError("Failed to create an account");
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
      <h2>Registration</h2>
      <Alert>{error}</Alert>
      <Form onSubmit={register} buttonText="Register" />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          Already have account? <Link to="/">login</Link>
        </div>
        <div>
          Forgot password? <Link to="/reset-password">reset</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
