import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyD-TUD7_n38hzskSK7oDWRXqHMCwdmsoTY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
