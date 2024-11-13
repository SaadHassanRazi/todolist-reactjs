import React from "react";
import Router from "./frameworkUi/router/Router";
import { BrowserRouter as Routers } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routers>
        <Router />
      </Routers>
    </div>
  );
};

export default App;
