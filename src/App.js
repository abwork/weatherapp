import React, { Component } from 'react';
import Main from './components/Main.js';
import Store from './Store/store.js';
import {Provider} from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="container">
          <div className="app-title">Weather App </div>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;