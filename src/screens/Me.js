import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const Me = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h3>Email : {user?.email}</h3>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default Me;
