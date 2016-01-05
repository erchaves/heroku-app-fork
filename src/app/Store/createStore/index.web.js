import { compose, createStore as _createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';

let createStore = _createStore;

if (process.env.NODE_ENV === 'development') {
  createStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
}

export default createStore;
