import React, { useState } from "react";

const Form = ({ onSubmit, buttonText }) => {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    onSubmit({ email: email.value, password: password.value });
    setSubmitting(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input required type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input required type="password" id="password" />
        </div>

        <div>
          <button type="submit">
            {submitting ? "Submitting" : buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
