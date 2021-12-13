import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './components/redux/store'
import { Provider } from 'react-redux'
import { productsFetch } from './components/redux/productSlice';
import { getTotals } from './components/redux/cartSlice';

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

