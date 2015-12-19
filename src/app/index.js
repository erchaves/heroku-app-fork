import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import Router from 'react-router';
import routes from './routes';
import { createAppStore } from './stores';

const store = createAppStore();
const history = createBrowserHistory();
const mountNode = document.getElementById('app');

mountNode.style.display = 'block';

ReactDOM.render(
  <Provider store={store} >
    <Router routes={routes} history={history}/>
  </Provider>,
  mountNode
);
