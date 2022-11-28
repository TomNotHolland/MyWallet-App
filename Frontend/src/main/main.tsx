import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'
import { Provider } from 'react-redux'
import ReduxStore from './app/Store';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement).render(
    <Provider store={ReduxStore}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>
  )
