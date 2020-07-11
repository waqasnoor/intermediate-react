import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

function NavBar(props) {
  return (
    <header
      css={css`
        /* position:absolute; */
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span aria-label="logo" role="img">
        🐔
      </span>
    </header>
  );
}

export default NavBar;
