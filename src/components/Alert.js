/**@jsxImportSource @emotion/react*/
import { css } from "@emotion/react";
import React from "react";

const Alert = ({ children }) => {
  return (
    <div
      css={css`
        color: red;
        font-size: 14px;
      `}
    >
      {children}
    </div>
  );
};

export default Alert;
