import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import './firebase.ts'
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

      <Router>
        <App />
      </Router>

    </Provider>
  </React.StrictMode>,
)
