import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

import * as R from "ramda";
import moment from "moment";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

// import SearchParams from "./SearchParams";

console.log({ R, moment });

const App = () => {
  const theme = useState("#4D6CFA");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>Loading....</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
