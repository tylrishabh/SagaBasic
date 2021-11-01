import React from 'react';
import ReactDOM from 'react-dom';
import './component/style/index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/redux/configureStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
