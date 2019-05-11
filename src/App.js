import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from '@reach/router';

import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

function App() {
  var theme = useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to='/'>
            Adopt Me!
          </Link>
        </header>
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
