import React from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts/Posts';
import Postform from './components/Postform';
import store from './components/store';

function App() {
  return (
    <Provider store = {store} >
      <section className="mw7 center avenir">
        <Postform />
        <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
        <Posts />
      </section>
    </Provider>
  );
}

export default App;
