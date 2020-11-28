import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {User} from "./providers/user";
import {AuthIsLoaded} from "./components/AuthIsLoaded";

ReactDOM.render(
  <React.StrictMode>
      <User.Provider>
          <AuthIsLoaded>
              <App />
          </AuthIsLoaded>
      </User.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);