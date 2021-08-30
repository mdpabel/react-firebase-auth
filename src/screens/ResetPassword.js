import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { email } = e.target.elements;

    try {
      await resetPassword(email.value);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        width: "450px",
        margin: "0 auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" />
        </div>

        <div>
          <button type="submit">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
