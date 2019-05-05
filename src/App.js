import React from "react";
import ReactDOM from "react-dom";

import SearchParams from './SearchParams'

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
